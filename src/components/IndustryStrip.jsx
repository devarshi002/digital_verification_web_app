import { primaryTags, secondaryTags } from '../data/siteData'

export default function IndustryStrip() {
  return (
    <div
      id="industry"
      className="bg-cyan-400/[0.03] border-y border-cyan-400/10 px-6 lg:px-12 py-6"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase whitespace-nowrap">
          Focus Areas
        </span>
        <div className="flex flex-wrap gap-2">
          {primaryTags.map((tag) => (
            <span
              key={tag}
              className="bg-cyan-400/10 border border-cyan-400/25 text-cyan-400 text-xs font-mono px-3.5 py-1.5 rounded-sm tracking-wide"
            >
              {tag}
            </span>
          ))}
          {secondaryTags.map((tag) => (
            <span
              key={tag}
              className="bg-white/[0.03] border border-white/[0.08] text-slate-500 text-xs font-mono px-3.5 py-1.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
