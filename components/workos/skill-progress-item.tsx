import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { Skill } from "@/lib/workos-data"

interface SkillProgressItemProps {
  skill: Skill
}

export function SkillProgressItem({ skill }: SkillProgressItemProps) {
  const gap = (skill.targetProficiency || skill.proficiency) - skill.proficiency

  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">{skill.name}</span>
            <Badge variant="outline" className="text-xs text-muted-foreground">
              {skill.category}
            </Badge>
          </div>
          <div className="flex items-center gap-1">
            {skill.trend === "up" && <TrendingUp className="h-4 w-4 text-primary" />}
            {skill.trend === "down" && <TrendingDown className="h-4 w-4 text-destructive-foreground" />}
            {skill.trend === "stable" && <Minus className="h-4 w-4 text-muted-foreground" />}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-0.5 rounded-full bg-secondary">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all"
            style={{ width: `${skill.proficiency}%` }}
          />
          {skill.targetProficiency && (
            <div
              className="absolute top-0 h-full w-0.5 bg-muted-foreground"
              style={{ left: `${skill.targetProficiency}%` }}
            />
          )}
        </div>

        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Current: {skill.proficiency}%</span>
          {skill.targetProficiency && (
            <span>
              Target: {skill.targetProficiency}% {gap > 0 && <span className="text-amber-700">(+{gap}% needed)</span>}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
