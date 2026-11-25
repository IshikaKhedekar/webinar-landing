import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { WEBINAR } from "@/lib/config";

// Same shared key the Apps Script guards on — keeps random requests from
// writing to the sheet. Must match the SECRET constant in the Apps Script.
const SHEET_SECRET = "pp2026-masterclass";

// Razorpay calls this endpoint directly from its own servers the moment a
// payment succeeds — independent of whether the customer's browser ever
// makes it back to /thanks (the case that fails for many UPI-app payments).
export async function POST(req: NextRequest) {
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("RAZORPAY_WEBHOOK_SECRET is not configured");
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  // Signature must be verified against the exact raw request body.
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature") || "";
  const expected = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");

  const sigMatches =
    expected.length === signature.length &&
    crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

  if (!sigMatches) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  let body: {
    event?: string;
    payload?: { payment?: { entity?: Record<string, unknown> } };
  };
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }

  // Only act on successful, captured payments — acknowledge everything else
  // so Razorpay doesn't keep retrying.
  if (body.event !== "payment.captured") {
    return NextResponse.json({ ok: true });
  }

  const payment = body.payload?.payment?.entity;
  if (!payment) return NextResponse.json({ ok: true });

  const rawPhone = String(payment.contact ?? "").replace(/\D/g, "");
  const phone = rawPhone.slice(-10); // normalise to the last 10 digits
  const amountPaise = typeof payment.amount === "number" ? payment.amount : 0;
  const amountRupees = Math.round(amountPaise / 100);
  const paymentId = String(payment.id ?? "");

  if (phone.length === 10 && WEBINAR.sheetUrl) {
    try {
      await fetch(WEBINAR.sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          key: SHEET_SECRET,
          name: "Webhook", // placeholder — the paid-branch only matches on phone
          phone,
          payment: `PAID ✓ ₹${amountRupees} via Razorpay Webhook · ${paymentId}`,
        }),
      });
    } catch (err) {
      console.error("Webhook: failed to update sheet", err);
    }
  }

  return NextResponse.json({ ok: true });
}
