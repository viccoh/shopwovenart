"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your mailing list provider (Mailchimp, Klaviyo, Beehiiv, etc.)
    // via an API route. Left as a stub so the form is functional out of the box.
    setStatus("sent");
  }

  return (
    <div>
      <p className="font-display text-2xl text-ivory">New patterns, first look.</p>
      <p className="font-body text-ivory/70 mt-2 max-w-sm">
        One email a month when a new colourway or pattern goes up — no spam, easy to leave.
      </p>
      {status === "sent" ? (
        <p className="font-body text-marigold mt-5">You're on the list. Thank you.</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 flex gap-2 max-w-sm">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-full bg-ivory/10 border border-ivory/30 px-4 py-2 text-ivory placeholder:text-ivory/40 font-body text-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-marigold text-espresso font-body text-sm font-medium px-5 py-2 hover:bg-marigold/90 transition-colors"
          >
            Sign up
          </button>
        </form>
      )}
    </div>
  );
}
