import { BadgeCheck, HardHat, Sparkles } from 'lucide-react'

export type ProjectStage = 'New Launch' | 'Under Construction' | 'Delivered'

// Colours mirror statusColors in app/projects/page.tsx so a project reads the
// same on the listing card and on its own detail page.
const stages = {
  'New Launch': { icon: Sparkles, bg: '#091e44', fg: '#ffffff' },
  'Under Construction': { icon: HardHat, bg: '#eab308', fg: '#000000' },
  Delivered: { icon: BadgeCheck, bg: '#22c55e', fg: '#000000' },
} as const

export default function ProjectStatusTag({
  stage,
  className = '',
}: {
  stage: ProjectStage
  className?: string
}) {
  const { icon: Icon, bg, fg } = stages[stage]

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider shadow-md ring-1 ring-black/5 ${className}`}
      style={{ backgroundColor: bg, color: fg }}
    >
      <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
      {stage}
    </div>
  )
}
