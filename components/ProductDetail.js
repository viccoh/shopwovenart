"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

export default function ProductDetail({ product }) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();
  const size = product.sizes[sizeIndex];

  function handleAdd() {
    addItem(product, size);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem(product, size);
    router.push("/checkout");
  }

  return (
    <div>
      <p className="font-body text-sm text-espresso/60">{product.category}</p>
      <h1 className="font-display text-3xl md:text-4xl text-espresso mt-1">
        {product.name}
      </h1>
      <p className="font-display text-2xl text-clay mt-3">{formatNaira(size.price)}</p>

      <p className="font-body text-espresso/80 mt-6 leading-relaxed">
        {product.description}
      </p>

      <div className="mt-8">
        <p className="font-body text-sm font-medium text-espresso mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setSizeIndex(i)}
              className={`rounded-full px-4 py-2 font-body text-sm border transition-colors ${
                i === sizeIndex
                  ? "bg-espresso text-ivory border-espresso"
                  : "border-espresso/20 text-espresso/70 hover:border-clay hover:text-clay"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        <button
          onClick={handleAdd}
          className="rounded-full bg-espresso text-ivory font-body font-medium px-6 py-3 hover:bg-espresso/90 transition-colors"
        >
          {added ? "Added to bag" : "Add to bag"}
        </button>
        <button
          onClick={handleBuyNow}
          className="rounded-full border border-espresso/20 text-espresso font-body font-medium px-6 py-3 hover:border-clay hover:text-clay transition-colors"
        >
          Buy now
        </button>
      </div>

      {product.care && (
        <p className="font-body text-sm text-espresso/60 mt-8 border-t border-espresso/10 pt-6">
          <span className="font-medium text-espresso/80">Care: </span>
          {product.care}
        </p>
      )}
    </div>
  );
}
