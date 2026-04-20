import { whyUs } from '../data/siteData'

const icons = {
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#00e5c7" strokeWidth="1.5" className="w-5 h-5">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#00e5c7" strokeWidth="1.5" className="w-5 h-5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#00e5c7" strokeWidth="1.5" className="w-5 h-5">
      <rect x="6" y="6" width="12" height="12" rx="1" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="#00e5c7" strokeWidth="1.5" className="w-5 h-5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
}

export default function WhyUs() {
  return (
    <section id="about" className="px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="section-label">// why us</div>
        <h2 className="section-title">Built for the Semiconductor Industry</h2>
        <p className="section-sub">
          Not a generic coding school. Every curriculum, mentor, and project is
          rooted in real chip design and verification workflows.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((item) => (
            <div key={item.id} className="card-glass p-7">
              <div className="w-11 h-11 rounded-md bg-cyan-400/10 flex items-center justify-center mb-5">
                {icons[item.icon]}
              </div>
              <h3 className="text-base font-medium text-slate-100 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
