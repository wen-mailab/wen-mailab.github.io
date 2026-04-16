import { Mail } from "lucide-react";
import { team, type TeamMember } from "@/data/team";
import { papers } from "@/data/papers";
import { conferencesPresentations } from "@/data/conferences";

const statusLabel: Record<string, string> = {
  "Principal Investigator": "Principal Investigator",
  "PhD Student": "Graduate Student — PhD",
  "M.S. Student": "Graduate Student — M.S.",
  "Undergraduate": "Undergraduate Student",
  "Collaborator": "Collaborator",
  "Alumni": "Alumni",
};

function MemberCard({ member }: { member: TeamMember }) {
  const memberPapers = member.paperIds
    ? papers.filter((p) => member.paperIds!.includes(p.id))
    : [];
  const memberConferences = member.conferenceIds
    ? conferencesPresentations.filter((c) => member.conferenceIds!.includes(c.id))
    : [];

  return (
    <div
      className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/15 hover:scale-[1.02]"
    >
      <div className={member.headshot ? "grid grid-cols-[auto_1fr] gap-x-6" : ""}>
        {member.headshot && (
          <img
            src={member.headshot}
            alt={member.name}
            className="h-20 w-20 rounded-full object-cover ring-2 ring-white/20"
          />
        )}
        <div>
          <h3 className="text-xl font-medium text-white tracking-[-0.02em]">{member.name}</h3>
          <p className="text-sm text-white/60 mt-0.5">{statusLabel[member.status] || member.status}</p>
          
          {member.email && member.email.length > 0 && (
            <div className="mt-4">
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-primary mt-1 hover:underline"
            >
              <Mail className="h-3.5 w-3.5" />
              {member.email}
            </a>
            </div>
          )}
          <p className="mt-3 text-white/80 leading-relaxed">{member.about}</p>

          {member.awards && member.awards.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-white mb-1">Awards</h4>
              {/* Change: list-outside and added ml-4 */}
              <ul className="list-disc list-outside ml-4 text-sm text-white/60 space-y-0.5">
                {member.awards.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
          )}

          {memberPapers.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-white mb-1">Publications</h4>
              <ul className="space-y-2">
                {memberPapers.map((paper) => (
                  <li key={paper.id} className="text-sm text-white/60">
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {paper.title}
                    </a>
                    <span className="block mt-0.5">
                      {paper.authors.map((author, i) => {
                        const isMember = member.name.includes(author.split(" ").pop()!) ||
                          author.includes(member.name.split(" ").pop()!);
                        return (
                          <span key={i}>
                            {i > 0 && ", "}
                            {isMember ? (
                              <strong className="font-medium text-white">{author}</strong>
                            ) : (
                              author
                            )}
                          </span>
                        );
                      })}
                      {" — "}
                      <span className="tabular-nums">{paper.journal}, {paper.year}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {memberConferences.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-white mb-1">Conference Presentations</h4>
              <ul className="space-y-2">
                {memberConferences.map((conference) => (
                  <li key={conference.id} className="text-sm text-white/60">
                    <span className="text-white/80">{conference.title}</span>
                    <span className="block mt-0.5">
                      {conference.authors.map((author, i) => {
                        const isMember = member.name.includes(author.split(" ").pop()!) ||
                          author.includes(member.name.split(" ").pop()!);
                        return (
                          <span key={i}>
                            {i > 0 && ", "}
                            {isMember ? (
                              <strong className="font-medium text-white">{author}</strong>
                            ) : (
                              author
                            )}
                          </span>
                        );
                      })}
                      {" — "}
                      <span className="tabular-nums">{conference.conferenceName}, {conference.location} ({conference.year})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const Team = () => {
  const pi = team.filter((m) => m.status === "Principal Investigator");
  const grads = team.filter((m) => m.status === "PhD Student" || m.status === "M.S. Student");
  const undergrads = team.filter((m) => m.status === "Undergraduate");
  const collaborators = team.filter((m) => m.status === "Collaborator");
  const alumni = team.filter((m) => m.status === "Alumni");

  const groups = [
    { label: "Principal Investigator", members: pi },
    { label: "Graduate Students", members: grads },
    { label: "Undergraduate Students", members: undergrads },
    { label: "Collaborators", members: collaborators },
    { label: "Alumni", members: alumni },
  ].filter((g) => g.members.length > 0);

  return (
    <section id="team" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="font-medium tracking-[-0.02em] leading-[1.1] text-white mb-16"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
        >
          Team
        </h2>

        {groups.map((group) => (
          <div key={group.label} className="mb-16 last:mb-0">
            <h3 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-6">
              {group.label}
            </h3>
            <div
              className="grid grid-cols-1 gap-6"
            >
              {group.members.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
