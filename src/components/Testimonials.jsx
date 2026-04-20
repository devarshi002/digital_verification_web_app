import { testimonials } from '../data/siteData'

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-12 py-20 bg-cyan-400/[0.02] border-y border-cyan-400/[0.08]">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">// student voices</div>
        <h2 className="section-title">Engineers Who Made the Leap</h2>
        <p className="section-sub mb-10">
          Real feedback from students who transformed their careers with
          DigiVerify School.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="card-glass p-7">
              {/* Quote mark */}
              <div className="font-mono text-3xl text-cyan-400/20 leading-none mb-4">
                "
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light italic mb-7">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/6">
                <div className="w-10 h-10 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center font-mono text-sm font-bold text-cyan-400 flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
