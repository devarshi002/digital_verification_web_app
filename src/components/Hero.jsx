import { stats } from '../data/siteData'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[580px] flex items-center px-6 lg:px-12 py-24">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full glow-cyan -top-24 -right-24 pointer-events-none" />

      {/* Second subtle glow */}
      <div
        className="absolute w-72 h-72 rounded-full pointer-events-none bottom-0 left-1/3 opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(124,110,248,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          {/* Live tag */}
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-mono px-4 py-2 rounded-sm mb-8 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-blink" />
            Bengaluru's Premier Chip Verification Institute
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl font-semibold text-slate-50 leading-[1.08] tracking-tight mb-5">
            Train for the{' '}
            <em className="not-italic text-cyan-400">Future</em> of
            <br />
            Digital Verification
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-400 leading-relaxed font-light max-w-xl mb-10">
            Industry-aligned courses in VLSI, Functional Verification, UVM,
            SystemVerilog &amp; DFT — built for engineers ready to lead in
            semiconductor design.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary text-base px-8 py-4">
              Browse Courses
            </button>
            <button className="btn-outline text-base px-8 py-4">
              Talk to Us
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-white/7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-2xl font-bold text-slate-50">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
