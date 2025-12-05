"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { Employee } from "@/lib/workos-data"
import { Mail, Phone, MapPin, Calendar, Award, TrendingUp, ArrowUpRight, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

interface EmployeeDetailModalProps {
  employee: Employee | null
  open: boolean
  onClose: () => void
}

export function EmployeeDetailModal({ employee, open, onClose }: EmployeeDetailModalProps) {
  if (!employee) return null

  const avgSkillLevel = Math.round(
    employee.skills.reduce((acc, s) => acc + s.proficiency, 0) / employee.skills.length,
  )

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="flex items-center justify-between">
            <span>Employee Profile</span>
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[80vh] overflow-y-auto">
          {/* Profile Header */}
          <div className="px-6 pb-6">
            <div className="flex items-start gap-5">
              <Avatar className="h-24 w-24 border-4 border-background shadow-sm">
                <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-primary text-xl text-primary-foreground">
                  {employee.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{employee.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      <span>{employee.role}</span>
                      <span>•</span>
                      <span>{employee.department}</span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="gap-1.5 font-normal text-muted-foreground"
                  >
                    <div
                      className={cn(
                        "size-2 rounded-full",
                        employee.availability === "Available" && "bg-green-500",
                        employee.availability === "Busy" && "bg-orange-500",
                        employee.availability === "On Leave" && "bg-red-500",
                      )}
                    />
                    {employee.availability}
                  </Badge>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Mail className="h-4 w-4 text-foreground/70" />
                    <span>{employee.name.toLowerCase().replace(" ", ".")}@company.com</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="h-4 w-4 text-foreground/70" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-foreground/70" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-foreground/70" />
                    <span>Joined Mar 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 divide-x border-y bg-secondary/30">
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground">
                {avgSkillLevel}%
              </div>
              <div className="text-xs font-medium text-muted-foreground">Avg Skill Level</div>
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground">
                12
              </div>
              <div className="text-xs font-medium text-muted-foreground">Courses Completed</div>
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-green-600">
                +15%
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="text-xs font-medium text-muted-foreground">Growth (YTD)</div>
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-foreground">3</div>
              <div className="text-xs font-medium text-muted-foreground">Certifications</div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold">
              <Award className="h-5 w-5 text-primary" />
              Skills & Proficiency
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {employee.skills.map((skill) => (
                <div key={skill.name} className="rounded-lg border bg-card p-3 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <div className="font-medium text-xs">{skill.name}</div>
                      <div className="text-xs text-muted-foreground">{skill.category}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{skill.proficiency}%</div>
                      {skill.targetProficiency && (
                        <div className="text-xs text-muted-foreground">Target: {skill.targetProficiency}%</div>
                      )}
                    </div>
                  </div>
                  <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full text-sm bg-primary transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                    {skill.targetProficiency && (
                      <div
                        className="absolute top-0 h-full w-0.5 bg-foreground/30"
                        style={{ left: `${skill.targetProficiency}%` }}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t bg-secondary/30 p-4">
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button className="gap-2">
              <ArrowUpRight className="h-4 w-4" />
              View Learning Path
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
