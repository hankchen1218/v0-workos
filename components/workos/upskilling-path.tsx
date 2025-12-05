"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { employees, learningPaths, type LearningPath } from "@/lib/workos-data"
import { LearningPathCard } from "./learning-path-card"
import { SkillProgressItem } from "./skill-progress-item"
import { SkillRadarChart } from "./skill-radar-chart"
import { CourseDetailModal } from "./course-detail-modal"
import { Target, Award, Clock, TrendingUp } from "lucide-react"

export function UpskillingPath() {
  // Using the first employee as the "current user" for the prototype
  const currentUser = employees[0]
  const [selectedCourse, setSelectedCourse] = useState<LearningPath | null>(null)

  const inProgressPaths = learningPaths.filter((p) => p.status === "In Progress")
  const recommendedPaths = learningPaths.filter((p) => p.status === "Not Started")
  const completedPaths = learningPaths.filter((p) => p.status === "Completed")

  const totalProgress = Math.round(learningPaths.reduce((acc, p) => acc + p.progress, 0) / learningPaths.length)

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* User profile header */}
      <Card className="border-border bg-card">
        <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={currentUser.avatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {currentUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground">{currentUser.name}</h2>
            <p className="text-muted-foreground">
              {currentUser.role} - {currentUser.department}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="h-4 w-4 text-primary" />
                <span>{currentUser.skills.length} skills tracked</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-4 w-4 text-primary" />
                <span>{completedPaths.length} courses completed</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>{inProgressPaths.length} in progress</span>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <div className="text-3xl font-bold text-primary">{totalProgress}%</div>
            <p className="text-sm text-muted-foreground">Overall Progress</p>
          </div>
        </CardContent>
      </Card>

      {/* Main content grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column - Learning paths */}
        <div className="space-y-6 lg:col-span-2">
          {/* In Progress */}
          {inProgressPaths.length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-medium text-foreground">Continue Learning</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {inProgressPaths.map((path) => (
                  <LearningPathCard
                    key={path.id}
                    path={path}
                    onClick={() => setSelectedCourse(path)}
                    onContinue={() => setSelectedCourse(path)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recommended */}
          {recommendedPaths.length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-400" />
                <h3 className="text-lg font-medium text-foreground">Recommended For You</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {recommendedPaths.map((path) => (
                  <LearningPathCard
                    key={path.id}
                    path={path}
                    onClick={() => setSelectedCourse(path)}
                    onStart={() => setSelectedCourse(path)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed */}
          {completedPaths.length > 0 && (
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium text-foreground">Completed</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {completedPaths.map((path) => (
                  <LearningPathCard key={path.id} path={path} onClick={() => setSelectedCourse(path)} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column - Skills overview */}
        <div className="space-y-6">
          {/* Skill radar */}
          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium text-foreground">Your Skill Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillRadarChart skills={currentUser.skills} />
              <div className="mt-2 flex items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Current</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full border-2 border-[#6366f1] bg-transparent" />
                  <span className="text-muted-foreground">Target</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills list */}
          <Card className="border-border bg-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium text-foreground">Skill Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentUser.skills.slice(0, 4).map((skill) => (
                <SkillProgressItem key={skill.name} skill={skill} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <CourseDetailModal course={selectedCourse} open={!!selectedCourse} onClose={() => setSelectedCourse(null)} />
    </div>
  )
}
