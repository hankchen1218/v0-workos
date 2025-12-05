"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { employees, skillGaps, teamStats, type Employee, type SkillGap } from "@/lib/workos-data"
import { StatCard } from "./stat-card"
import { SkillRadarChart } from "./skill-radar-chart"
import { SkillGapBar } from "./skill-gap-bar"
import { EmployeeCard } from "./employee-card"
import { EmployeeDetailModal } from "./employee-detail-modal"
import { SkillGapModal } from "./skill-gap-modal"
import { Users, Award, TrendingUp, BookOpen } from "lucide-react"

export function SkillsDashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0])
  const [detailEmployee, setDetailEmployee] = useState<Employee | null>(null)
  const [selectedGap, setSelectedGap] = useState<SkillGap | null>(null)

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Stats row */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Team Members"
          value={teamStats.totalEmployees}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Avg Skill Level"
          value={`${teamStats.avgSkillLevel}%`}
          icon={Award}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Skills Tracked"
          value={teamStats.skillsTracked}
          icon={TrendingUp}
          subtitle="Across all employees"
        />
        <StatCard
          title="Training ROI"
          value={`${teamStats.trainingROI}%`}
          icon={BookOpen}
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      {/* Main content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Employee list */}
        <Card className="border-border bg-card lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium text-foreground">Team Members</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 max-h-[500px] overflow-y-auto">
            {employees.map((employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
                selected={selectedEmployee.id === employee.id}
                onClick={() => setSelectedEmployee(employee)}
                onDoubleClick={() => setDetailEmployee(employee)}
              />
            ))}
            <p className="text-xs text-muted-foreground text-center pt-2">Double-click to view full profile</p>
          </CardContent>
        </Card>

        {/* Skill radar chart */}
        <Card className="border-border bg-card lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-medium text-foreground">
                Skill Profile: {selectedEmployee.name}
              </CardTitle>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Current</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full border-2 border-[#6366f1] bg-transparent" />
                  <span className="text-muted-foreground">Target</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <SkillRadarChart skills={selectedEmployee.skills} />
          </CardContent>
        </Card>
      </div>

      {/* Skill gaps */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium text-foreground">Team Skill Gaps</CardTitle>
          <p className="text-sm text-muted-foreground">Click on a skill gap to see recommendations</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {skillGaps.map((gap) => (
            <div
              key={gap.skill}
              onClick={() => setSelectedGap(gap)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <SkillGapBar skill={gap.skill} current={gap.current} required={gap.required} priority={gap.priority} />
            </div>
          ))}
        </CardContent>
      </Card>

      <EmployeeDetailModal employee={detailEmployee} open={!!detailEmployee} onClose={() => setDetailEmployee(null)} />
      <SkillGapModal skillGap={selectedGap} open={!!selectedGap} onClose={() => setSelectedGap(null)} />
    </div>
  )
}
