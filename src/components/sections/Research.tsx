import { Satellite, Radio, CheckCircle, Globe } from "lucide-react";
import { researchAreas } from "@/data/research";

const iconMap: Record<string, React.ReactNode> = {
  satellite: <Satellite className="h-6 w-6 text-blue-700" />,
  radar: <Radio className="h-6 w-6 text-blue-700" />,
  planet: <Globe className="h-6 w-6 text-blue-700" />,
  "check-circle": <CheckCircle className="h-6 w-6 text-blue-700" />,
};

export const Research = () => (
  <section id="research" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <h1
        className="font-medium tracking-[-0.02em] leading-[1.1] text-slate-900 mb-12"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
      >
        Research Areas
      </h1>
      <div
        className="divide-y divide-slate-200"
      >
        {researchAreas.map((area) => (
          <div key={area.id} className="py-8 first:pt-0 last:pb-0">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">{iconMap[area.icon]}</div>
              <div>
                <h2 className="text-xl font-medium text-slate-900 tracking-[-0.02em]">{area.title}</h2>
                <p className="mt-2 text-slate-600 leading-relaxed">{area.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
