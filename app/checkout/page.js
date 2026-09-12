"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import PaystackButton from "@/components/PaystackButton";

function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

const SHIPPING_FLAT_RATE = 2500;

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "" });
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");

  const total = items.length > 0 ? subtotal + SHIPPING_FLAT_RATE : 0;
  const formComplete = form.name && form.email && form.phone && form.address && form.city;

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handlePaymentSuccess(reference) {
    setVerifying(true);
    setError("");
    try {
      const res = await fetch("/api/paystack/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference })
      });
      const data = await res.json();
      if (data.verified) {
        clearCart();
        router.push(`/checkout/success?ref=${encodeURIComponent(reference)}`);
      } else {
        setError("We couldn't confirm this payment. If you were charged, contact us with your reference: " + reference);
      }
    } catch (e) {
      setError("Something went wrong confirming your payment. Please contact us with reference: " + reference);
    } finally {
      setVerifying(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-content mx-auto px-5 md:px-8 py-20 text-center">
        <h1 className="font-display text-3xl text-espresso mb-3">Your bag is empty</h1>
        <p className="font-body text-espresso/70 mb-8">Add something to your bag before checking out.</p>
        <Link href="/shop" className="inline-flex rounded-full bg-clay text-ivory font-body font-medium px-6 py-3 hover:bg-clay/90 transition-colors">
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl text-espresso mb-10">Checkout</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-display text-xl text-espresso mb-4">Delivery details</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full name" name="name" value={form.name} onChange={handleChange} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
            <Field label="Phone number" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            <Field label="City" name="city" value={form.city} onChange={handleChange} />
            <div className="sm:col-span-2">
              <Field label="Delivery address" name="address" value={form.address} onChange={handleChange} />
            </div>
          </div>

          <h2 className="font-display text-xl text-espresso mt-10 mb-4">Order summary</h2>
          <div className="divide-y divide-espresso/10 border-t border-b border-espresso/10">
            {items.map((item) => (
              <div key={item.key} className="flex justify-between py-3 font-body text-sm">
                <span className="text-espresso/80">
                  {item.name} · {item.sizeLabel} × {item.quantity}
                </span>
                <span className="text-espresso">{formatNaira(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-parchment rounded-2xl p-6 h-fit">
          <div className="space-y-2 font-body text-sm text-espresso">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatNaira(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{formatNaira(SHIPPING_FLAT_RATE)}</span>
            </div>
            <div className="flex justify-between font-medium text-base pt-2 border-t border-espresso/10">
              <span>Total</span>
              <span>{formatNaira(total)}</span>
            </div>
          </div>

          <div className="mt-6">
            {!formComplete && (
              <p className="font-body text-xs text-espresso/60 mb-3">
                Fill in your delivery details above to continue to payment.
              </p>
            )}
            {error && (
              <p className="font-body text-xs text-clay mb-3">{error}</p>
            )}
            <PaystackButton
              email={form.email || "customer@example.com"}
              amountNaira={total}
              metadata={{ customer: form, items }}
              onSuccess={handlePaymentSuccess}
              disabled={!formComplete || verifying}
            />
            {verifying && (
              <p className="font-body text-xs text-espresso/60 mt-2">Confirming your payment…</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, name, value, onChange, type = "text" }) {
  return (
    <label className="block">
      <span className="font-body text-sm text-espresso/70">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="mt-1 w-full rounded-lg border border-espresso/20 px-3 py-2 font-body text-sm bg-ivory focus:border-clay"
      />
    </label>
  );
}
