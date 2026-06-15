import { Link } from "react-router-dom";
import { awards } from "@/data/awards";

export const AwardsGrants = ({ preview = false }: { preview?: boolean }) => {
  const displayedAwards = preview ? awards.slice(0, 6) : awards;

  return (
    <section id="awards" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2
              className="font-medium tracking-[-0.02em] leading-[1.1] text-white"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
            >
              Awards and Grants
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-2xl">
              Honors, funding awards, and research grants associated with the team.
            </p>
          </div>
          {preview && awards.length > 6 && (
            <Link
              to="/awards"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/15 text-white font-medium text-sm hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              View more ({awards.length - 6} more)
            </Link>
          )}
        </div>

        <div className="grid gap-6">
          {displayedAwards.map((award) => (
            <div
              key={award.id}
              className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/15 hover:scale-[1.02]"
            >
              <h3 className="text-lg font-semibold text-white tracking-[-0.02em]">
                {award.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">
                {award.name} — {award.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
