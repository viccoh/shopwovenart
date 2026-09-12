"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-content mx-auto px-5 md:px-8 py-20 text-center">
        <h1 className="font-display text-3xl text-espresso mb-3">Your bag is empty</h1>
        <p className="font-body text-espresso/70 mb-8">
          Nothing added yet — have a look through the collection.
        </p>
        <Link
          href="/shop"
          className="inline-flex rounded-full bg-clay text-ivory font-body font-medium px-6 py-3 hover:bg-clay/90 transition-colors"
        >
          Shop the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl text-espresso mb-10">Your bag</h1>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 divide-y divide-espresso/10">
          {items.map((item) => (
            <div key={item.key} className="flex gap-4 py-6 first:pt-0">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-parchment shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-display text-lg text-espresso">{item.name}</p>
                    <p className="font-body text-sm text-espresso/60 mt-0.5">{item.sizeLabel}</p>
                  </div>
                  <p className="font-body text-espresso whitespace-nowrap">
                    {formatNaira(item.price * item.quantity)}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex items-center border border-espresso/20 rounded-full">
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-espresso/70 hover:text-clay"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-body text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-espresso/70 hover:text-clay"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="font-body text-sm text-espresso/50 hover:text-clay"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-parchment rounded-2xl p-6 h-fit">
          <div className="flex justify-between font-body text-espresso mb-2">
            <span>Subtotal</span>
            <span>{formatNaira(subtotal)}</span>
          </div>
          <p className="font-body text-sm text-espresso/60 mb-6">
            Shipping and delivery time are confirmed at checkout.
          </p>
          <Link
            href="/checkout"
            className="block text-center rounded-full bg-espresso text-ivory font-body font-medium px-6 py-3 hover:bg-espresso/90 transition-colors"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
