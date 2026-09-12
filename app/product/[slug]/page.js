import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Shopwovenart`,
    description: product.description
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-14">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-parchment">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <ProductDetail product={product} />
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-espresso mb-6">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
