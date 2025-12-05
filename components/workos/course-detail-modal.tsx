"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { LearningPath } from "@/lib/workos-data"
import { Clock, BookOpen, Award, CheckCircle2, Play, Users, Star, X } from "lucide-react"

interface CourseDetailModalProps {
  course: LearningPath | null
  open: boolean
  onClose: () => void
  onEnroll?: (course: LearningPath) => void
}

export function CourseDetailModal({ course, open, onClose, onEnroll }: CourseDetailModalProps) {
  const [enrolled, setEnrolled] = useState(false)

  if (!course) return null

  const handleEnroll = () => {
    setEnrolled(true)
    onEnroll?.(course)
    setTimeout(() => {
      setEnrolled(false)
      onClose()
    }, 1500)
  }

  const modules = [
    { name: "Introduction & Setup", duration: "30 min", completed: course.progress >= 20 },
    { name: "Core Concepts", duration: "1.5 hrs", completed: course.progress >= 40 },
    { name: "Hands-on Practice", duration: "2 hrs", completed: course.progress >= 60 },
    { name: "Advanced Topics", duration: "1.5 hrs", completed: course.progress >= 80 },
    { name: "Final Project", duration: "2 hrs", completed: course.progress >= 100 },
  ]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-secondary transition-colors z-10"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <DialogHeader>
          <DialogTitle className="text-foreground pr-8">Course Details</DialogTitle>
        </DialogHeader>

        {enrolled ? (
          <div className="py-12 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Successfully Enrolled!</h3>
            <p className="text-muted-foreground">You can now access this course from your learning dashboard.</p>
          </div>
        ) : (
          <>
            {/* Course Header */}
            <div className="pb-4 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    course.status === "Completed"
                      ? "bg-primary/10 text-primary border-primary/20"
                      : course.status === "In Progress"
                        ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                  }
                >
                  {course.status}
                </Badge>
              </div>

              <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4" />
                  {course.difficulty}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4" />
                  1,234 enrolled
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-600" />
                  4.8 (256 reviews)
                </span>
              </div>
            </div>

            {/* Progress */}
            {course.status !== "Not Started" && (
              <div className="py-4 border-b border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Your Progress</span>
                  <span className="text-sm text-primary font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-0.5" />
              </div>
            )}

            {/* Modules */}
            <div className="py-4">
              <h4 className="text-sm font-medium text-foreground mb-3">Course Modules</h4>
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      {module.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      ) : (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />
                      )}
                      <span className={module.completed ? "text-foreground" : "text-muted-foreground"}>
                        {module.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{module.duration}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills You'll Gain */}
            <div className="py-4 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Skills You'll Gain
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Technical Design", "Best Practices", "Code Review"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-secondary text-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-border">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              {course.status === "Not Started" ? (
                <Button className="bg-primary text-primary-foreground" onClick={handleEnroll}>
                  <Play className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
              ) : course.status === "In Progress" ? (
                <Button className="bg-primary text-primary-foreground" onClick={onClose}>
                  <Play className="mr-2 h-4 w-4" />
                  Continue Learning
                </Button>
              ) : (
                <Button className="bg-primary text-primary-foreground" onClick={onClose}>
                  <Award className="mr-2 h-4 w-4" />
                  View Certificate
                </Button>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
