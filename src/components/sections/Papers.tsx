import { papers } from "@/data/papers";
import { Bibliography } from "../Bibliography";

export const Papers = () => (
  <Bibliography title="Publications" entries={papers.map(paper => ({
    id: paper.id,
    year: paper.year,
    citation: <>
      {paper.authors.join(", ")} ({paper.year}).{" "}
      <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.title}</a>.{" "}
      <em>{paper.journal}</em>{paper.pages && `, pp. ${paper.pages}`}.
    </>,
  }))} />
);
