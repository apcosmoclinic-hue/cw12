"use client";

import { Share2, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/data/site-config";

export function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${SITE_CONFIG.url}/blog/${slug}`;

  function copyLink() {
    navigator.clipboard?.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
        <Share2 className="h-3.5 w-3.5" /> Share
      </span>
      <a
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[var(--color-bg-light)] px-4 py-2 text-xs font-medium text-[var(--color-ink)] hover:bg-slate-100"
      >
        WhatsApp
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[var(--color-bg-light)] px-4 py-2 text-xs font-medium text-[var(--color-ink)] hover:bg-slate-100"
      >
        Facebook
      </a>
      <button onClick={copyLink} className="flex items-center gap-1.5 rounded-full bg-[var(--color-bg-light)] px-4 py-2 text-xs font-medium text-[var(--color-ink)] hover:bg-slate-100">
        <LinkIcon className="h-3.5 w-3.5" /> {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
