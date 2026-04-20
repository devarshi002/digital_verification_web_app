export default function CTABanner() {
  return (
    <section
      id="contact"
      className="px-6 lg:px-12 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-cyan-400/[0.06] border border-cyan-400/20 rounded-xl p-14 text-center overflow-hidden">
          {/* Grid texture */}
          <div className="absolute inset-0 grid-bg-sm pointer-events-none opacity-60" />

          {/* Content */}
          <div className="relative">
            <div className="section-label justify-center flex">// next cohort open</div>
            <h2 className="text-4xl font-semibold text-slate-50 tracking-tight mb-4 leading-tight">
              Start Your Verification Career Today
            </h2>
            <p className="text-slate-400 font-light text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Join the next cohort. Limited seats per batch to ensure personal
              attention from every mentor.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary text-base px-10 py-4">
                Book a Free Counseling Session
              </button>
              <button className="btn-outline text-base px-8 py-4">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
