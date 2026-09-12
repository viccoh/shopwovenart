"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import GrannySquareMark from "./GrannySquareMark";

const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=Blankets", label: "Blankets" },
  { href: "/shop?category=Throw%20Pillows", label: "Throw pillows" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-espresso/10 bg-ivory sticky top-0 z-40">
      <div className="max-w-content mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <GrannySquareMark size={34} />
          <span className="font-display text-2xl tracking-tight text-espresso">
            Shopwovenart
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-[15px] text-espresso/80">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-clay transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative font-body text-sm font-medium text-espresso border border-espresso/20 rounded-full px-4 py-2 hover:border-clay hover:text-clay transition-colors"
          >
            Bag
            {count > 0 && (
              <span className="ml-2 inline-flex items-center justify-center h-5 min-w-5 px-1 rounded-full bg-clay text-ivory text-xs">
                {count}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-espresso"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-espresso/10 bg-ivory px-5 py-4 flex flex-col gap-4 font-body text-espresso/80">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:text-clay transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
