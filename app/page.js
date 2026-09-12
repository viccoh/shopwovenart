import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import GrannySquareMark from "@/components/GrannySquareMark";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blogPosts";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-ivory">
        <div className="max-w-content mx-auto px-5 md:px-8 pt-14 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-[2.6rem] leading-[1.05] md:text-6xl text-espresso">
              Colour, worked one stitch at a time.
            </h1>
            <p className="font-body text-espresso/70 text-lg mt-6 max-w-md">
              Shopwovenart makes hand-crocheted throw pillows and blankets in
              small batches — every square counted, every colour run chosen
              by hand before it's ever chained.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center rounded-full bg-clay text-ivory font-body font-medium px-6 py-3 hover:bg-clay/90 transition-colors"
              >
                Shop the collection
              </Link>
              <Link
                href="/blog/how-a-granny-square-is-built"
                className="inline-flex items-center rounded-full border border-espresso/20 text-espresso font-body font-medium px-6 py-3 hover:border-clay hover:text-clay transition-colors"
              >
                See how it's made
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/images/granny-square-set.jpg"
              alt="Sunset granny square throw blanket and matching cushion on a dark leather sofa"
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-espresso">Currently making</h2>
          <Link href="/shop" className="font-body text-sm text-clay hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Process — a real sequence, so numbering earns its place */}
      <section className="bg-parchment">
        <div className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
          <h2 className="font-display text-3xl text-espresso mb-10 max-w-md">
            From yarn to your sofa
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                n: "1",
                title: "Choose a colourway",
                body: "Every pattern comes in a small set of colour runs, built from yarn we've already tested together — no clashing combinations to worry about."
              },
              {
                n: "2",
                title: "It's crocheted to order",
                body: "Nothing sits in a warehouse. Once you order, your piece goes into the queue and is made by hand, usually within seven to twelve days."
              },
              {
                n: "3",
                title: "Blocked, finished, shipped",
                body: "Each piece is steam-blocked flat before its border and fringe go on, then packed and shipped with tracking."
              }
            ].map((step) => (
              <div key={step.n}>
                <div className="w-10 h-10 rounded-full bg-espresso text-ivory font-display flex items-center justify-center mb-4">
                  {step.n}
                </div>
                <h3 className="font-display text-xl text-espresso mb-2">{step.title}</h3>
                <p className="font-body text-espresso/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal preview */}
      <section className="max-w-content mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-espresso">From the journal</h2>
          <Link href="/blog" className="font-body text-sm text-clay hover:underline">
            Read more
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <p className="font-body text-sm text-clay mb-2">{post.category}</p>
              <h3 className="font-display text-xl text-espresso leading-snug group-hover:text-clay transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-espresso/70 mt-2 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing band */}
      <section className="bg-indigo">
        <div className="max-w-content mx-auto px-5 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <GrannySquareMark size={44} />
            <p className="font-display text-2xl text-ivory">
              Every piece is one of a kind — order yours today.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center rounded-full bg-marigold text-espresso font-body font-medium px-6 py-3 hover:bg-marigold/90 transition-colors whitespace-nowrap"
          >
            Shop the collection
          </Link>
        </div>
      </section>
    </>
  );
}
