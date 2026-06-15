import { Link } from "react-router-dom";
import { newsItems } from "@/data/news";

export const News = ({ preview = false }: { preview?: boolean }) => {
  const displayedNews = preview ? newsItems.slice(0, 3) : newsItems;

  return (
    <section id="news" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <h2
              className="font-medium tracking-[-0.02em] leading-[1.1] text-white"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
            >
              News
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-2xl">
              The latest announcements, project updates, and team highlights from the lab.
            </p>
          </div>
          {preview && newsItems.length > 3 && (
            <Link
              to="/news"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/15 text-white font-medium text-sm hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              View more ({newsItems.length - 3} more)
            </Link>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedNews.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/15 hover:scale-[1.02]"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-primary">{item.date}</p>
              <h3 className="mt-4 text-xl font-semibold text-white tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{item.description}</p>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-medium text-primary hover:text-primary/80"
                >
                  Read more
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
