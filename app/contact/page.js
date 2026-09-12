"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      // Point this at your own API route or a form service (e.g. Formspree,
      // Resend) — left unimplemented so it doesn't silently fail in prod.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-14">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="font-display text-4xl text-espresso mb-4">Contact us</h1>
          <p className="font-body text-espresso/70 max-w-sm">
            Questions about a custom colourway, an order, or a wholesale
            enquiry — send a note and we'll get back to you within a
            couple of business days.
          </p>
          <div className="mt-8 space-y-2 font-body text-sm text-espresso/70">
            <p>hello@shopwovenart.com</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            <span className="font-body text-sm text-espresso/70">Name</span>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-espresso/20 px-3 py-2 font-body text-sm bg-ivory focus:border-clay"
            />
          </label>
          <label className="block">
            <span className="font-body text-sm text-espresso/70">Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-espresso/20 px-3 py-2 font-body text-sm bg-ivory focus:border-clay"
            />
          </label>
          <label className="block">
            <span className="font-body text-sm text-espresso/70">Message</span>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-espresso/20 px-3 py-2 font-body text-sm bg-ivory focus:border-clay"
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-clay text-ivory font-body font-medium px-6 py-3 hover:bg-clay/90 disabled:opacity-50 transition-colors"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "sent" && (
            <p className="font-body text-sm text-teal">Message sent — thank you.</p>
          )}
          {status === "error" && (
            <p className="font-body text-sm text-clay">
              Couldn't send that — email us directly at hello@shopwovenart.com.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
