"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import GrannySquareMark from "@/components/GrannySquareMark";

export default function CheckoutSuccessPage() {
  const params = useSearchParams();
  const ref = params.get("ref");

  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-24 text-center">
      <div className="flex justify-center mb-6">
        <GrannySquareMark size={56} />
      </div>
      <h1 className="font-display text-4xl text-espresso mb-3">Order confirmed</h1>
      <p className="font-body text-espresso/70 max-w-md mx-auto">
        Thank you — your piece is going into our crochet queue. We'll email
        you a confirmation and reach out with an estimated delivery date.
      </p>
      {ref && (
        <p className="font-body text-sm text-espresso/50 mt-4">
          Payment reference: {ref}
        </p>
      )}
      <Link
        href="/shop"
        className="inline-flex mt-10 rounded-full bg-clay text-ivory font-body font-medium px-6 py-3 hover:bg-clay/90 transition-colors"
      >
        Continue shopping
      </Link>
    </div>
  );
}
