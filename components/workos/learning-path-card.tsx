"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Clock, CheckCircle2, Play, BookOpen } from "lucide-react"
import type { LearningPath } from "@/lib/workos-data"

interface LearningPathCardProps {
  path: LearningPath
  onStart?: () => void
  onContinue?: () => void
  onClick?: () => void
}

export function LearningPathCard({ path, onStart, onContinue, onClick }: LearningPathCardProps) {
  return (
    <Card
      className="border-border bg-card overflow-hidden cursor-pointer hover:border-muted-foreground transition-colors"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-foreground">{path.title}</h3>
              <span
                className={cn(
                  "flex items-center rounded-full border px-2 py-0.5 text-xs text-muted-foreground",
                )}
              >
                <div
                  className={cn(
                    "mr-1.5 size-1.5 rounded-full",
                    path.status === "Completed" && "bg-green-500",
                    path.status === "In Progress" && "bg-blue-500",
                    path.status === "Not Started" && "bg-muted-foreground",
                  )}
                />
                {path.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{path.description}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
            <Clock className="h-3.5 w-3.5" />
            <span>{path.duration}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Skills tags */}
        <div className="flex flex-wrap gap-2">
          {path.skills.map((skill) => (
            <span key={skill} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
              {skill}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{path.progress}%</span>
          </div>
          <div className="h-0.5 rounded-full bg-secondary">
            <div
              className={cn(
                "h-full rounded-full transition-all",
                path.status === "Completed" ? "bg-primary" : "bg-blue-500",
              )}
              style={{ width: `${path.progress}%` }}
            />
          </div>
        </div>

        {/* Action button */}
        {path.status === "Completed" ? (
          <div className="flex items-center gap-2 text-sm text-primary">
            <CheckCircle2 className="h-4 w-4" />
            <span>Course completed</span>
          </div>
        ) : path.status === "In Progress" ? (
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onContinue?.()
            }}
            variant="outline" 
            className="w-full border-border text-foreground hover:bg-blue-500/5 hover:text-blue-500 bg-transparent"
          >
            <Play className="mr-2 h-4 w-4" />
            Continue Learning
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.stopPropagation()
              onStart?.()
            }}
            variant="outline"
            className="w-full border-border text-foreground hover:bg-blue-500/5 hover:text-blue-500 bg-transparent"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Start Course
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
