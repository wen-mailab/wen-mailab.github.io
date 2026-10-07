import { conferencesPresentations } from "@/data/conferences";
import { Bibliography } from "../Bibliography";

export const Conferences = () => (
  <Bibliography title="Conference Presentations" entries={conferencesPresentations.map(presentation => ({
    id: presentation.id,
    year: presentation.year,
    citation: <>
      {presentation.authors.join(", ")} ({presentation.year}).{" "}
      {presentation.doi ? (
        <a href={`https://doi.org/${presentation.doi}`} target="_blank" rel="noopener noreferrer">{presentation.title}</a>
      ) : presentation.title}.{" "}
      <em>{presentation.conferenceName}</em>, {presentation.location}.
    </>,
  }))} />
);
