import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export const metadata = {
  title: "Journal — Shopwovenart"
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogPage() {
  return (
    <div className="max-w-content mx-auto px-5 md:px-8 py-14">
      <h1 className="font-display text-4xl text-espresso mb-2">Journal</h1>
      <p className="font-body text-espresso/70 max-w-md mb-12">
        Notes on the craft, care guides, and what's currently on the hook.
      </p>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group border-b border-espresso/10 pb-10">
            <p className="font-body text-sm text-clay mb-2">
              {post.category} · {formatDate(post.date)}
            </p>
            <h2 className="font-display text-2xl text-espresso leading-snug group-hover:text-clay transition-colors">
              {post.title}
            </h2>
            <p className="font-body text-espresso/70 mt-3">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
