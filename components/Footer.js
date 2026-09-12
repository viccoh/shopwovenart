import Link from "next/link";
import GrannySquareMark from "./GrannySquareMark";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="max-w-content mx-auto px-5 md:px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <GrannySquareMark size={30} />
            <span className="font-display text-xl">Shopwovenart</span>
          </div>
          <p className="font-body text-ivory/70 max-w-xs">
            Hand-crocheted throw pillows and blankets, made to order in small batches.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 font-body text-sm text-ivory/70">
          <div>
            <p className="text-ivory mb-3">Shop</p>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-marigold transition-colors">All products</Link></li>
              <li><Link href="/shop?category=Blankets" className="hover:text-marigold transition-colors">Blankets</Link></li>
              <li><Link href="/shop?category=Throw%20Pillows" className="hover:text-marigold transition-colors">Throw pillows</Link></li>
              <li><Link href="/cart" className="hover:text-marigold transition-colors">Your bag</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-ivory mb-3">Shopwovenart</p>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-marigold transition-colors">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-marigold transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <Newsletter />
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-content mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-ivory/50 font-body">
          <p>© {new Date().getFullYear()} Shopwovenart. All rights reserved.</p>
          <p>Payments secured by Paystack.</p>
        </div>
      </div>
    </footer>
  );
}
