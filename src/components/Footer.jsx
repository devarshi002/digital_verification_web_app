import { footerLinks } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-white/7 px-6 lg:px-12 pt-14 pb-8 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-mono text-lg font-bold text-white mb-3">
              Digi<span className="text-cyan-400">Verify</span> School
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-light max-w-xs">
              Bengaluru's specialist training institute for digital verification
              and semiconductor design engineers.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-4">
              Courses
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.courses.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institute */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-4">
              Institute
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.institute.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-slate-500 font-medium mb-4">
              Connect
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.connect.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-xs text-slate-500">
            © 2025 DigiVerify School. All rights reserved.
          </span>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Bengaluru, Karnataka, India
          </div>
        </div>
      </div>
    </footer>
  )
}
