// Central place to edit webinar details.
export const WEBINAR = {
  brand: "2X/22",
  durationMinutes: 22,
  audience: "Business Owners & Leaders",
  seatsTotal: 200,
  seatsLeft: 37,
  price: 99,
  regularPrice: 999,
  // Razorpay Payment Page — the form redirects here after saving the lead.
  razorpayPageUrl: "https://rzp.io/rzp/P4oM0OW5",
  // Google Apps Script "Web app" URL — every completed registration is
  // appended as a row in the "Masterclass Registrations" Google Sheet.
  sheetUrl:
    "https://script.google.com/macros/s/AKfycbyD0nWQH-A1YF7Ru_jF9ta_SIZqJJQ33YaXxm1WUDP5YNn4_BGYRQj12efLtLTAfKc/exec",
  // Set a fixed date string (e.g. "2026-09-05T11:00:00") to hard-code the
  // webinar time, or set to null to always show the next Saturday, 11:00 AM.
  fixedDate: "2026-09-15T11:00:00" as string | null,
};

export function formatWebinarDate(): string {
  const d = getWebinarDate();
  const date = d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const time = d.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${date} · ${time.toUpperCase()}`;
}

export function getWebinarDate(): Date {
  if (WEBINAR.fixedDate) return new Date(WEBINAR.fixedDate);
  const d = new Date();
  d.setHours(11, 0, 0, 0);
  const day = d.getDay(); // 0 Sun … 6 Sat
  let daysUntilSat = (6 - day + 7) % 7;
  if (daysUntilSat === 0 && Date.now() > d.getTime()) daysUntilSat = 7;
  d.setDate(d.getDate() + daysUntilSat);
  return d;
}

export function formatINR(n: number): string {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(1)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}
