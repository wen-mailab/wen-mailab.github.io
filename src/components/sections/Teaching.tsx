import { courses } from "@/data/courses";

export const Teaching = () => (
  <section id="teaching" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <h2
        className="font-medium tracking-[-0.02em] leading-[1.1] text-white mb-12"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
      >
        Teaching
      </h2>
      <div
        className="grid grid-cols-1 gap-6"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:bg-white/15 hover:scale-[1.02]"
          >
            <h3 className="text-lg font-medium text-white tracking-[-0.02em]">{course.title}</h3>
            <p className="text-sm text-white/60 mt-1 tabular-nums">{course.semester}</p>
            <p className="mt-3 text-white/80 leading-relaxed">{course.about}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
