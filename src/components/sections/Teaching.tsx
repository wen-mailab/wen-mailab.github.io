import { courses } from "@/data/courses";

export const Teaching = () => (
  <section id="teaching" className="py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4">
      <h2
        className="font-medium tracking-[-0.02em] leading-[1.1] text-slate-900 mb-3"
        style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}
      >
        Past Courses Taught
      </h2>
      <p className="mb-8 text-slate-600">University of Florida</p>
      <div
        className="grid grid-cols-1 gap-6"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-2xl bg-white border border-slate-200 p-6"
          >
            <h3 className="text-lg font-medium text-slate-900 tracking-[-0.02em]">{course.title}</h3>
            <p className="text-sm text-slate-600 mt-1 tabular-nums">{course.semester}</p>
            <p className="mt-3 text-slate-700 leading-relaxed">{course.about}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
