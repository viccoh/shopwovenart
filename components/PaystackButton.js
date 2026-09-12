"use client";

import Script from "next/script";
import { useState } from "react";

// Loads Paystack's inline popup script and opens it with the order total.
// Requires NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to be set in .env.local.
//
// On success this calls onSuccess(reference) so the checkout page can
// send the reference to /api/paystack/verify for server-side confirmation
// before treating the order as paid — never trust the client-side
// callback alone for a real store.
export default function PaystackButton({ email, amountNaira, metadata, onSuccess, disabled }) {
  const [scriptReady, setScriptReady] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  function pay() {
    if (!publicKey) {
      alert(
        "Paystack public key is missing. Add NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY to your .env.local file."
      );
      return;
    }
    if (!window.PaystackPop) {
      alert("Payment is still loading — try again in a moment.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: Math.round(amountNaira * 100), // Paystack expects kobo
      currency: "NGN",
      metadata,
      callback: function (response) {
        onSuccess(response.reference);
      },
      onClose: function () {
        // user closed the popup without paying — no action needed
      }
    });
    handler.openIframe();
  }

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        onLoad={() => setScriptReady(true)}
        strategy="afterInteractive"
      />
      <button
        onClick={pay}
        disabled={disabled || !scriptReady}
        className="w-full rounded-full bg-clay text-ivory font-body font-medium px-6 py-3 hover:bg-clay/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {scriptReady ? "Pay with Paystack" : "Loading payment…"}
      </button>
    </>
  );
}
