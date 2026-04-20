import { courses } from '../data/siteData'

function CourseCard({ course }) {
  return (
    <div className="card-glass rounded-lg overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform duration-200">
      {/* Color banner */}
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${course.bannerFrom}, ${course.bannerTo})`,
        }}
      />
      <div className="p-6">
        <div
          className="text-xs font-mono uppercase tracking-wider mb-2.5"
          style={{ color: course.levelColor }}
        >
          {course.level}
        </div>
        <h3 className="text-[1.05rem] font-medium text-slate-100 mb-3 leading-snug">
          {course.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed font-light mb-5">
          {course.description}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-white/6">
          <span className="font-mono text-xs text-slate-500">{course.duration}</span>
          <span className="text-base font-semibold text-slate-100">
            {course.price}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Courses() {
  return (
    <section
      id="courses"
      className="px-6 lg:px-12 py-20 bg-white/[0.01] border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-label">// curriculum</div>
        <h2 className="section-title">Courses Designed by the Industry</h2>
        <p className="section-sub">
          From foundational RTL to advanced UVM methodologies — structured
          learning paths for every stage of your career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

          {/* Coming soon card */}
          <div className="rounded-lg border border-white/10 border-dashed flex items-center justify-center min-h-[220px] p-8 text-center">
            <div>
              <div className="text-3xl font-mono text-cyan-400/25 mb-3">+</div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                More courses coming soon.
                <br />
                Tell us what you need.
              </p>
              <button className="btn-outline-cyan mt-5 text-xs px-4 py-2">
                Request a Topic
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
