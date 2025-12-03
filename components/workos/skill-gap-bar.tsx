import { cn } from "@/lib/utils"

interface SkillGapBarProps {
  skill: string
  current: number
  required: number
  priority: "High" | "Medium" | "Low"
}

export function SkillGapBar({ skill, current, required, priority }: SkillGapBarProps) {
  const gap = required - current

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-foreground">{skill}</span>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-xs",
              priority === "High" && "bg-red-500/20 text-red-400",
              priority === "Medium" && "bg-yellow-500/20 text-yellow-400",
              priority === "Low" && "bg-blue-500/20 text-blue-400",
            )}
          >
            {priority}
          </span>
          <span className="text-muted-foreground">Gap: {gap}%</span>
        </div>
      </div>
      <div className="relative h-2 rounded-full bg-secondary">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all"
          style={{ width: `${current}%` }}
        />
        <div className="absolute top-0 h-full w-0.5 bg-muted-foreground" style={{ left: `${required}%` }} />
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Current: {current}%</span>
        <span>Required: {required}%</span>
      </div>
    </div>
  )
}
