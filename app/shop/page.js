import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, getCategories } from "@/lib/products";

export const metadata = {
  title: "Shop — Shopwovenart"
};

export default function ShopPage({ searchParams }) {
  const categories = getCategories();
  const activeCategory = searchParams?.category;
  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl text-espresso mb-2">Shop</h1>
      <p className="font-body text-espresso/70 max-w-md mb-8">
        Every piece below is made to order. Pick a size on the product page —
        larger sizes take a little longer to finish.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/shop"
          className={`rounded-full px-4 py-2 font-body text-sm border transition-colors ${
            !activeCategory
              ? "bg-espresso text-ivory border-espresso"
              : "border-espresso/20 text-espresso/70 hover:border-clay hover:text-clay"
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/shop?category=${encodeURIComponent(cat)}`}
            className={`rounded-full px-4 py-2 font-body text-sm border transition-colors ${
              activeCategory === cat
                ? "bg-espresso text-ivory border-espresso"
                : "border-espresso/20 text-espresso/70 hover:border-clay hover:text-clay"
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-espresso/70">
          Nothing in this category yet — check back soon, or{" "}
          <Link href="/shop" className="text-clay hover:underline">
            browse everything
          </Link>
          .
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
