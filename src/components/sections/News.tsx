import { news } from "@/data/news";

export const News = () => (
  <section id="news" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="font-medium tracking-[-0.02em] text-slate-900 mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>News</h1>
      <p className="text-slate-600 mb-12">The latest announcements, project updates, and team highlights from the lab.</p>
      <div className="grid grid-cols-1 gap-6">
        {news.map(item => (
          <article key={item.id} className="rounded-2xl bg-white border border-slate-200 p-6">
            <time dateTime={item.date} className="text-sm text-slate-600">{item.date}</time>
            <h2 className="mt-3 text-lg font-medium text-slate-900">{item.title}</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-700 hover:underline" aria-label={`Read more: ${item.title}`}>Read more</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
