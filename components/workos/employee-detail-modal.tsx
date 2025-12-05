"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { Employee } from "@/lib/workos-data"
import { Mail, Phone, MapPin, Calendar, Award, TrendingUp, BookOpen } from "lucide-react"

interface EmployeeDetailModalProps {
  employee: Employee | null
  open: boolean
  onClose: () => void
}

export function EmployeeDetailModal({ employee, open, onClose }: EmployeeDetailModalProps) {
  if (!employee) return null

  const avgSkillLevel = Math.round(employee.skills.reduce((acc, s) => acc + s.current, 0) / employee.skills.length)

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Employee Profile</DialogTitle>
        </DialogHeader>

        {/* Profile Header */}
        <div className="flex items-start gap-4 pb-4 border-b border-border">
          <Avatar className="h-20 w-20">
            <AvatarImage src={employee.avatar || "/placeholder.svg"} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xl">
              {employee.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground">{employee.name}</h3>
            <p className="text-muted-foreground">{employee.role}</p>
            <p className="text-sm text-muted-foreground">{employee.department}</p>
            <div className="flex items-center gap-4 mt-3">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {employee.level}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                Joined 2022
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{avgSkillLevel}%</div>
            <p className="text-xs text-muted-foreground">Avg Skill Level</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-3 gap-4 py-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>{employee.name.toLowerCase().replace(" ", ".")}@company.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        {/* Skills */}
        <div className="py-4">
          <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            Skills & Proficiency
          </h4>
          <div className="space-y-3">
            {employee.skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.current}%</span>
                </div>
                <Progress value={skill.current} className="h-2" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
          <div className="text-center p-3 rounded-lg bg-secondary/50">
            <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-lg font-semibold text-foreground">12</p>
            <p className="text-xs text-muted-foreground">Courses Completed</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-secondary/50">
            <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-lg font-semibold text-foreground">+15%</p>
            <p className="text-xs text-muted-foreground">Growth This Year</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-secondary/50">
            <Award className="h-5 w-5 text-primary mx-auto mb-1" />
            <p className="text-lg font-semibold text-foreground">3</p>
            <p className="text-xs text-muted-foreground">Certifications</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-primary text-primary-foreground">Message Employee</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
