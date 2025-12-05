"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { type SkillGap, employees, learningPaths } from "@/lib/workos-data"
import { TrendingUp, Users, BookOpen, AlertTriangle, Target } from "lucide-react"
import { cn } from "@/lib/utils"

interface SkillGapModalProps {
  skillGap: SkillGap | null
  open: boolean
  onClose: () => void
}

export function SkillGapModal({ skillGap, open, onClose }: SkillGapModalProps) {
  if (!skillGap) return null

  const gapPercentage = Math.round(((skillGap.required - skillGap.current) / skillGap.required) * 100)

  // Find employees who have this skill
  const employeesWithSkill = employees.filter((emp) =>
    emp.skills.some((s) => s.name.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0])),
  )

  // Find related learning paths
  const relatedCourses = learningPaths.filter(
    (path) =>
      path.title.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0]) ||
      path.description.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0]),
  )

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Skill Gap Analysis</DialogTitle>
        </DialogHeader>

        {/* Skill Header */}
        <div className="pb-4 border-b border-border">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{skillGap.skill}</h3>
              <Badge variant="outline" className="gap-1.5 font-normal text-muted-foreground">
                <div
                  className={cn(
                    "size-2 rounded-full",
                    skillGap.priority === "Critical" && "bg-red-500",
                    skillGap.priority === "High" && "bg-amber-500",
                    skillGap.priority === "Medium" && "bg-yellow-500",
                    skillGap.priority === "Low" && "bg-blue-500",
                  )}
                />
                {skillGap.priority} Priority
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-500">{gapPercentage}%</div>
              <p className="text-xs text-muted-foreground">Gap Size</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Current Level</span>
              <span className="text-foreground font-medium">{skillGap.current}%</span>
            </div>
            <Progress value={skillGap.current} className="h-2" />
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Required Level</span>
              <span className="text-primary font-medium">{skillGap.required}%</span>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="py-4 border-b border-border">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Business Impact</p>
              <p className="text-xs text-muted-foreground mt-1">
                This skill gap affects project delivery timelines and may require external hiring if not addressed
                within 3 months.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members with Skill */}
        <div className="py-4 border-b border-border">
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Team Members with Related Skills ({employeesWithSkill.length})
          </h4>
          <div className="space-y-2">
            {employeesWithSkill.slice(0, 3).map((emp) => {
              const skill = emp.skills.find((s) =>
                s.name.toLowerCase().includes(skillGap.skill.toLowerCase().split(" ")[0]),
              )
              return (
                <div key={emp.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                      {emp.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{emp.name}</p>
                      <p className="text-xs text-muted-foreground">{emp.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-primary font-medium">{skill?.current || 0}%</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommendations */}
        <div className="py-4">
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Recommended Actions
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer">
              <BookOpen className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Enroll team in training program</p>
                <p className="text-xs text-muted-foreground">3 courses available · 12 hrs total</p>
              </div>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer">
              <Users className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Pair programming sessions</p>
                <p className="text-xs text-muted-foreground">Connect juniors with senior experts</p>
              </div>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-primary text-primary-foreground">Create Action Plan</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
