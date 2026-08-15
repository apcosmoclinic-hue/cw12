import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  "Skin Care": "from-[var(--color-primary)] to-[var(--color-secondary)]",
  "Acne Care": "from-[var(--color-secondary)] to-purple-500",
  "Hair Care": "from-[var(--color-accent)] to-teal-600",
};

export function BlogCard({ post, className }: { post: BlogPost; className?: string }) {
  const gradient = CATEGORY_COLORS[post.category] ?? CATEGORY_COLORS["Skin Care"];

  return (
    <Link href={`/blog/${post.slug}`} className={cn("group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1 transition-all duration-300", className)}>
      <div className={cn("relative h-44 bg-gradient-to-br flex items-center justify-center overflow-hidden", gradient)}>
        <div className="absolute inset-0 bg-clarity-grid opacity-20" />
        <span className="relative rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white border border-white/25">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(post.date)} &middot; {post.readTime}
        </div>
        <h3 className="mt-3 font-display font-semibold text-lg text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-secondary)] transition-colors">
          {post.title}
        </h3>
        <p className="mt-2.5 text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2 flex-1">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:gap-2 transition-all">
          Read Article <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
