import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { papers } from "@/data/papers";

export const Papers = ({ preview = false }: { preview?: boolean }) => {
  const displayedPapers = preview ? papers.slice(0, 5) : papers;

  return (
    <section id="publications" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
      <h2
        className="font-medium tracking-[-0.02em] leading-[1.1] text-white mb-12"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
      >
        Publications
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {displayedPapers.map((paper) => (
          <a
            key={paper.id}
            href={`https://doi.org/${paper.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl bg-white/10 backdrop-blur-sm p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/15 hover:scale-[1.02]"
          >
            <h3 className="text-lg font-medium text-white tracking-[-0.02em] pr-8">
              {paper.title}
            </h3>
            <p className="mt-2 text-sm text-white/60 tabular-nums">
              {paper.journal}
              {paper.pages && `, pp. ${paper.pages}`}
              {` (${paper.year})`}
            </p>
            <p className="mt-2 text-sm text-white/80">{paper.authors.join(", ")}</p>
            <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-white/40 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </div>

      {preview && papers.length > 5 && (
        <div className="flex justify-center mt-8">
          <Link
            to="/publications"
            className="px-6 py-2 rounded-full bg-white/15 text-white font-medium text-sm hover:bg-white/25 transition-colors backdrop-blur-sm"
          >
            View more ({papers.length - 5} more)
          </Link>
        </div>
      )}
    </div>
    </section>
  );
};
