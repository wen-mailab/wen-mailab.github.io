import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { conferencesPresentations } from "@/data/conferences";

export const Conferences = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedConferences = showAll ? conferencesPresentations : conferencesPresentations.slice(0, 5);

  return (
    <section id="presentations" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="font-medium tracking-[-0.02em] leading-[1.1] text-white mb-12"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
        >
          Conference Presentations
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {displayedConferences.map((presentation) => (
            <div
              key={presentation.id}
              className="group relative block rounded-2xl bg-white/10 backdrop-blur-sm p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/15 hover:scale-[1.02]"
            >
              <h3 className="text-lg font-medium text-white tracking-[-0.02em] pr-8">
                {presentation.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 tabular-nums">
                {presentation.conferenceName}, {presentation.location} ({presentation.year})
              </p>
              <p className="mt-2 text-sm text-white/80">{presentation.authors.join(", ")}</p>
              {presentation.doi && (
                <ArrowUpRight className="absolute top-6 right-6 h-5 w-5 text-white/40 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
          ))}
        </div>

        {!showAll && conferencesPresentations.length > 5 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 rounded-full bg-white/15 text-white font-medium text-sm hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              View more ({conferencesPresentations.length - 5} more)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
