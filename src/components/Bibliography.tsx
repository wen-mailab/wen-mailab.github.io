import type { ReactNode } from "react";

interface BibliographyEntry {
  id: string;
  year: number;
  citation: ReactNode;
}

export function Bibliography({ title, entries }: { title: string; entries: BibliographyEntry[] }) {
  const sortedEntries = [...entries].sort((a, b) => b.year - a.year);

  return (
    <section className="bibliography mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16">
      <h1 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      <ul className="space-y-5">
        {sortedEntries.map(entry => (
          <li key={entry.id} data-entry-id={entry.id} className="text-base leading-7">{entry.citation}</li>
        ))}
      </ul>
    </section>
  );
}
