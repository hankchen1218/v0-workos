"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import type { Employee } from "@/lib/workos-data"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface EmployeeCardProps {
  employee: Employee
  selected?: boolean
  onClick?: () => void
}

export function EmployeeCard({ employee, selected, onClick }: EmployeeCardProps) {
  const avgProficiency = Math.round(employee.skills.reduce((acc, s) => acc + s.proficiency, 0) / employee.skills.length)

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors",
        selected ? "border-primary bg-primary/10" : "border-border bg-card hover:border-muted-foreground",
      )}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src={employee.avatar || "/placeholder.svg"} />
        <AvatarFallback className="bg-secondary text-foreground text-xs">
          {employee.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <p className="truncate font-medium text-foreground">{employee.name}</p>
        <p className="text-xs text-muted-foreground">{employee.role}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium text-primary">{avgProficiency}%</p>
        <div className="flex items-center justify-end gap-1">
          {employee.skills.filter((s) => s.trend === "up").length > 2 ? (
            <TrendingUp className="h-3 w-3 text-primary" />
          ) : employee.skills.filter((s) => s.trend === "down").length > 2 ? (
            <TrendingDown className="h-3 w-3 text-destructive-foreground" />
          ) : (
            <Minus className="h-3 w-3 text-muted-foreground" />
          )}
        </div>
      </div>
    </button>
  )
}
