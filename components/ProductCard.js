import Image from "next/image";
import Link from "next/link";

function formatNaira(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

export default function ProductCard({ product }) {
  const prices = product.sizes.map((s) => s.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-parchment">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </div>
      <div className="mt-3">
        <p className="font-body text-sm text-espresso/60">{product.category}</p>
        <h3 className="font-display text-lg text-espresso leading-snug mt-0.5">
          {product.name}
        </h3>
        <p className="font-body text-sm text-espresso/80 mt-1">
          {min === max ? formatNaira(min) : `${formatNaira(min)} – ${formatNaira(max)}`}
        </p>
      </div>
    </Link>
  );
}
