"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { employees, projectMatches } from "@/lib/workos-data"
import { Search, Filter, ArrowUpDown, CheckCircle2, XCircle, TrendingUp, Users } from "lucide-react"

export function SkillMatching() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"matchScore" | "growthPotential" | "availability">("matchScore")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const sortedMatches = [...projectMatches]
    .filter(
      (match) =>
        match.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.role.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      let comparison = 0
      if (sortBy === "matchScore") {
        comparison = a.matchScore - b.matchScore
      } else if (sortBy === "growthPotential") {
        comparison = a.growthPotential - b.growthPotential
      } else {
        const order = { Available: 0, Busy: 1, "On Leave": 2 }
        comparison = order[a.availability] - order[b.availability]
      }
      return sortOrder === "desc" ? -comparison : comparison
    })

  const toggleSort = (column: typeof sortBy) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortOrder("desc")
    }
  }

  const getEmployee = (id: string) => employees.find((e) => e.id === id)

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header section */}
      <div>
        <h2 className="text-lg font-semibold text-foreground">Project: Frontend Redesign</h2>
        <p className="text-sm text-muted-foreground">
          Find the best team members for this project based on required skills
        </p>
      </div>

      {/* Required skills */}
      <Card className="border-border bg-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-medium text-foreground">Required Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "GraphQL", "Problem Solving", "Communication"].map((skill) => (
              <span key={skill} className="rounded-md bg-primary/20 px-3 py-1.5 text-sm text-primary">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Matching table */}
      <Card className="border-border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Employee</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Skills Matched</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  <button
                    onClick={() => toggleSort("matchScore")}
                    className="flex items-center gap-1 hover:text-foreground"
                  >
                    Match Score
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  <button
                    onClick={() => toggleSort("growthPotential")}
                    className="flex items-center gap-1 hover:text-foreground"
                  >
                    Growth Potential
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  <button
                    onClick={() => toggleSort("availability")}
                    className="flex items-center gap-1 hover:text-foreground"
                  >
                    Availability
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </button>
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedMatches.map((match, index) => {
                const employee = getEmployee(match.employeeId)
                return (
                  <tr
                    key={match.employeeId}
                    className={cn(
                      "border-b border-border transition-colors hover:bg-secondary/30",
                      index === sortedMatches.length - 1 && "border-b-0",
                    )}
                  >
                    {/* Employee */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={employee?.avatar || "/placeholder.svg"} />
                          <AvatarFallback className="bg-secondary text-foreground text-xs">
                            {match.employeeName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-foreground">{match.employeeName}</p>
                          <p className="text-xs text-muted-foreground">{match.role}</p>
                        </div>
                      </div>
                    </td>

                    {/* Skills */}
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {match.skillsMatched.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary"
                          >
                            <CheckCircle2 className="h-3 w-3" />
                            {skill}
                          </span>
                        ))}
                        {match.skillsMissing.length > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-destructive/20 px-2 py-0.5 text-xs text-destructive-foreground">
                            <XCircle className="h-3 w-3" />
                            {match.skillsMissing.length} missing
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Match score */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 rounded-full bg-secondary">
                          <div
                            className={cn(
                              "h-full rounded-full",
                              match.matchScore >= 85 && "bg-primary",
                              match.matchScore >= 70 && match.matchScore < 85 && "bg-blue-500",
                              match.matchScore < 70 && "bg-amber-500",
                            )}
                            style={{ width: `${match.matchScore}%` }}
                          />
                        </div>
                        <span
                          className={cn(
                            "text-sm font-medium",
                            match.matchScore >= 85 && "text-primary",
                            match.matchScore >= 70 && match.matchScore < 85 && "text-blue-400",
                            match.matchScore < 70 && "text-amber-400",
                          )}
                        >
                          {match.matchScore}%
                        </span>
                      </div>
                    </td>

                    {/* Growth potential */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp
                          className={cn(
                            "h-4 w-4",
                            match.growthPotential >= 80 && "text-primary",
                            match.growthPotential >= 60 && match.growthPotential < 80 && "text-blue-400",
                            match.growthPotential < 60 && "text-muted-foreground",
                          )}
                        />
                        <span className="text-sm text-foreground">{match.growthPotential}%</span>
                      </div>
                    </td>

                    {/* Availability */}
                    <td className="px-4 py-4">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
                          match.availability === "Available" && "bg-primary/20 text-primary",
                          match.availability === "Busy" && "bg-amber-500/20 text-amber-400",
                          match.availability === "On Leave" && "bg-muted text-muted-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            match.availability === "Available" && "bg-primary",
                            match.availability === "Busy" && "bg-amber-400",
                            match.availability === "On Leave" && "bg-muted-foreground",
                          )}
                        />
                        {match.availability}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4 text-right">
                      <Button
                        size="sm"
                        variant={match.availability === "Available" ? "default" : "outline"}
                        disabled={match.availability === "On Leave"}
                        className={cn(
                          match.availability === "Available" &&
                            "bg-primary text-primary-foreground hover:bg-primary/90",
                        )}
                      >
                        <Users className="mr-1.5 h-3.5 w-3.5" />
                        Assign
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary/20 p-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">
                {projectMatches.filter((m) => m.matchScore >= 80).length}
              </p>
              <p className="text-sm text-muted-foreground">Strong Matches</p>
            </div>
          </div>
        </Card>
        <Card className="border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-blue-500/20 p-2">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">
                {projectMatches.filter((m) => m.availability === "Available").length}
              </p>
              <p className="text-sm text-muted-foreground">Available Now</p>
            </div>
          </div>
        </Card>
        <Card className="border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-amber-500/20 p-2">
              <TrendingUp className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-foreground">
                {projectMatches.filter((m) => m.growthPotential >= 80).length}
              </p>
              <p className="text-sm text-muted-foreground">High Growth Potential</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
