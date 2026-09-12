import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Shopwovenart`, description: post.excerpt };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-[720px] mx-auto px-5 md:px-8 py-14">
      <Link href="/blog" className="font-body text-sm text-clay hover:underline">
        ← Back to journal
      </Link>
      <p className="font-body text-sm text-clay mt-6 mb-2">
        {post.category} · {formatDate(post.date)}
      </p>
      <h1 className="font-display text-3xl md:text-4xl text-espresso leading-tight">
        {post.title}
      </h1>
      <div className="mt-8 space-y-5">
        {post.body.map((para, i) => (
          <p key={i} className="font-body text-espresso/80 leading-relaxed text-[17px]">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
