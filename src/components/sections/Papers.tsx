import { papers } from "@/data/papers";
import { Bibliography } from "../Bibliography";
import { citationEnd } from "@/lib/citations";

const publicationLabels = {
  preprint: "Preprint",
  accepted: "Accepted conference paper",
  "book-chapter": "Book chapter",
  editorial: "Editorial",
};

export const Papers = () => (
  <Bibliography title="Publications" entries={papers.map(paper => ({
    id: paper.id,
    year: paper.year,
    citation: <>
      {paper.authors.join(", ")} ({paper.year}).{" "}
      <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.title}</a>{citationEnd(paper.title)}{" "}
      <em>{paper.journal}</em>
      {paper.volume && `, ${paper.volume}${paper.issue ? `(${paper.issue})` : ""}`}
      {paper.pages && `, pp. ${paper.pages}`}
      {paper.articleNumber && `, Article ${paper.articleNumber}`}.
      {paper.status && <span className="text-muted-foreground"> [{publicationLabels[paper.status]}]</span>}
    </>,
  }))} />
);
