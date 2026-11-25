"use client";

import { useEffect } from "react";
import { WEBINAR } from "@/lib/config";

// Runs on /thanks after Razorpay redirects the visitor back.
// Reads the registration remembered before redirect + the payment id from the
// URL, and appends a "PAID" row to the Google Sheet.
export default function PaidReporter() {
  useEffect(() => {
    try {
      const raw = localStorage.getItem("mc_reg");
      if (!raw || !WEBINAR.sheetUrl) return;
      const d = JSON.parse(raw);

      const params = new URLSearchParams(window.location.search);
      const paymentId =
        params.get("razorpay_payment_id") || params.get("payment_id") || "";

      fetch(WEBINAR.sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          key: "pp2026-masterclass",
          name: d.name || "",
          phone: d.phone || "",
          email: d.email || "",
          company: d.company || "",
          team: d.team || "",
          payment: `PAID ✓ ₹${WEBINAR.price} via Razorpay${
            paymentId ? ` · ${paymentId}` : ""
          }`,
        }),
      }).catch(() => {});

      // clear so refreshing /thanks doesn't add duplicate rows
      localStorage.removeItem("mc_reg");
    } catch {}
  }, []);

  return null;
}
