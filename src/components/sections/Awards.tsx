import { awards } from "@/data/awards";

export const Awards = () => (
  <section id="awards" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="font-medium tracking-[-0.02em] text-slate-900 mb-12" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>Awards and Grants</h2>
      <div className="grid grid-cols-1 gap-6">
        {awards.map(award => (
          <article key={award.id} className="rounded-2xl bg-white border border-slate-200 p-6">
            <h3 className="text-lg font-medium text-slate-900">{award.title}</h3>
            <p className="mt-3 text-slate-600">{award.name} — {award.position}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
