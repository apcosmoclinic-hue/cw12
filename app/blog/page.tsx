import Link from "next/link";
import { ArrowDown, ArrowUpRight, BookOpen, Sun } from "lucide-react";
import { JsonLd } from "@/components/ui/json-ld";
import { BLOG_POSTS } from "@/data/blog";
import { getBreadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Skin and Hair Health Articles",
  description: "Patient education articles about sun protection, acne, and hair shedding.",
  path: "/blog",
});

type Article = (typeof BLOG_POSTS)[number];
type ArticlePreview = {
  topic: string;
  title: string;
  summary: string;
  questions: readonly string[];
};

const previews: Partial<Record<string, ArticlePreview>> = {
  "The Right Way to Use Sunscreen on Indian Skin": {
    topic: "Sun protection",
    title: "Using sunscreen",
    summary: "A guide to making sense of sunscreen labels and thinking through how sunscreen fits into an everyday routine.",
    questions: ["What do the labels on sunscreen mean?", "How do I use sunscreen as part of my routine?"],
  },
  "Acne Myths vs. Facts: What Actually Works": {
    topic: "Acne",
    title: "Common questions about acne",
    summary: "A closer look at familiar acne advice, including face washing and the use of household products on spots.",
    questions: ["Where did the advice come from?", "What should I ask before trying something new?"],
  },
  "Hair Fall: How Much Is Normal, and When Should You Worry?": {
    topic: "Hair shedding",
    title: "Understanding hair shedding",
    summary: "An introduction to everyday shedding and the kinds of changes readers may want to discuss during an assessment.",
    questions: ["What has changed, and when did I first notice it?", "What details could I share during an assessment?"],
  },
};

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0082A0]";
const offset = "scroll-mt-[calc(var(--header-height,80px)+1rem)]";

function getPreview(article: Article) {
  return previews[article.title];
}

function ArticleLink({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      aria-label={`Read ${getPreview(article)?.title ?? article.title}`}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0E3040] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#14546A] ${focus}`}
    >
      Read article <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

export default function BlogPage() {
  const featured = BLOG_POSTS.find((article) => getPreview(article)?.topic === "Sun protection") ?? BLOG_POSTS[0];
  const featuredPreview = featured ? getPreview(featured) : undefined;
  const otherArticles = BLOG_POSTS.filter((article) => article !== featured);

  return (
    <div className="bg-[#F4F9FC] text-[#102B3A]">
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ])} />

      <section
        aria-labelledby="blog-title"
        className="border-b border-[#DFE8EB] bg-[#FDFEFE] pt-[calc(var(--header-height,80px)+1.25rem)]"
      >
        <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-10 sm:pb-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className={`rounded-sm underline-offset-4 hover:underline ${focus}`}>Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Blog</span>
          </nav>
          <div className="mt-7 border-l-2 border-[#378292] pl-4 sm:pl-6">
            <h1 id="blog-title" className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Skin and hair health
            </h1>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-600">
              Articles about sun protection, acne, and changes in hair shedding.
            </p>
            {featured && (
              <a href="#reading" className={`mt-2 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006680] underline-offset-4 hover:underline ${focus}`}>
                Browse articles <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section id="reading" aria-labelledby="reading-heading" className={`${offset} mx-auto max-w-7xl px-6 py-12 sm:px-10 sm:py-16`}>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <h2 id="reading-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Reading room</h2>
          <a href="#reader-guide" className={`inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[#006680] underline-offset-4 hover:underline ${focus}`}>
            How to use this information <ArrowDown aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        {featured ? (
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            <article className={`rounded-3xl border border-[#BBDCE7] bg-gradient-to-br from-[#E9F8FA] to-[#D7EFF8] p-6 sm:p-9 ${otherArticles.length === 0 ? "lg:col-span-2" : ""}`}>
              {featuredPreview?.topic === "Sun protection" ? (
                <Sun aria-hidden="true" className="mb-5 h-8 w-8 text-[#006681]" />
              ) : (
                <BookOpen aria-hidden="true" className="mb-5 h-8 w-8 text-[#006681]" />
              )}
              {featuredPreview && <p className="text-sm font-semibold text-[#006681]">{featuredPreview.topic}</p>}
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{featuredPreview?.title ?? featured.title}</h3>
              {featuredPreview && (
                <>
                  <p className="mt-3 max-w-lg leading-relaxed text-slate-700">{featuredPreview.summary}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#BBDCE7] pt-4 text-sm leading-relaxed text-slate-700">
                    {featuredPreview.questions.map((question) => <li key={question}>{question}</li>)}
                  </ul>
                </>
              )}
              <div className="mt-6"><ArticleLink article={featured} /></div>
            </article>

            {otherArticles.length > 0 && (
              <ul aria-label="More articles" className="grid gap-5">
                {otherArticles.map((article) => {
                  const preview = getPreview(article);
                  return (
                    <li key={article.slug}>
                      <article className="h-full rounded-3xl border border-[#D3E3EA] bg-white p-6 sm:p-7">
                        {preview && <p className="text-sm font-semibold text-[#006681]">{preview.topic}</p>}
                        <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{preview?.title ?? article.title}</h3>
                        {preview && <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-700">{preview.summary}</p>}
                        <div className="mt-4"><ArticleLink article={article} /></div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ) : <p className="text-slate-700">There are no articles to display.</p>}
      </section>

      <section id="reader-guide" aria-labelledby="guide-heading" className={`${offset} border-t border-[#D3E3EA] bg-white py-12 sm:py-16`}>
        <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 id="guide-heading" className="max-w-sm font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              What to note before a consultation
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-700">
              These articles provide general health information. A clinician can assess your individual symptoms and circumstances.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-600">This index contains AI-assisted text.</p>
          </div>
          <dl className="divide-y divide-[#D3E3EA] rounded-2xl border border-[#D3E3EA] bg-[#F4F9FC] px-5">
            <div className="py-4">
              <dt className="font-semibold">How it started</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">Note when you first noticed the concern, where it appeared, and how it has changed since then.</dd>
            </div>
            <div className="py-4">
              <dt className="font-semibold">What you use</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">List your current skin or hair products and any medicines or supplements you take.</dd>
            </div>
            <div className="py-4">
              <dt className="font-semibold">What you want to ask</dt>
              <dd className="mt-1 text-sm leading-relaxed text-slate-700">Write down any questions about your symptoms, possible causes, or advice you’ve read.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
