"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { employees, projectMatches } from "@/lib/workos-data"
import { AssignModal } from "./assign-modal"
import { Search, Filter, ArrowUpDown, CheckCircle2, XCircle, TrendingUp, Users, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const allSkills = [
  "React",
  "TypeScript",
  "GraphQL",
  "Problem Solving",
  "Communication",
  "Node.js",
  "Team Leadership",
  "System Design",
]

export function SkillMatching() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<"matchScore" | "growthPotential" | "availability">("matchScore")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [availabilityFilter, setAvailabilityFilter] = useState<string[]>([])
  const [minMatchScore, setMinMatchScore] = useState<number>(0)

  const [assignModal, setAssignModal] = useState<{
    open: boolean
    employeeName: string
    employeeAvatar?: string
    matchScore: number
  }>({ open: false, employeeName: "", matchScore: 0 })

  const sortedMatches = [...projectMatches]
    .filter((match) => {
      // Search filter
      const matchesSearch =
        match.employeeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.skillsMatched.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

      // Skills filter
      const matchesSkills =
        selectedSkills.length === 0 || selectedSkills.every((skill) => match.skillsMatched.includes(skill))

      // Availability filter
      const matchesAvailability = availabilityFilter.length === 0 || availabilityFilter.includes(match.availability)

      // Match score filter
      const matchesScore = match.matchScore >= minMatchScore

      return matchesSearch && matchesSkills && matchesAvailability && matchesScore
    })
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

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]))
  }

  const toggleAvailability = (availability: string) => {
    setAvailabilityFilter((prev) =>
      prev.includes(availability) ? prev.filter((a) => a !== availability) : [...prev, availability],
    )
  }

  const clearFilters = () => {
    setSelectedSkills([])
    setAvailabilityFilter([])
    setMinMatchScore(0)
    setSearchQuery("")
  }

  const hasActiveFilters = selectedSkills.length > 0 || availabilityFilter.length > 0 || minMatchScore > 0

  const getEmployee = (id: string) => employees.find((e) => e.id === id)

  const handleAssignClick = (match: (typeof projectMatches)[0]) => {
    const employee = getEmployee(match.employeeId)
    setAssignModal({
      open: true,
      employeeName: match.employeeName,
      employeeAvatar: employee?.avatar,
      matchScore: match.matchScore,
    })
  }

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
              <span key={skill} className="rounded-md border  px-3 py-1.5 text-sm text-muted-foreground">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, role, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex items-center gap-2">
            {/* Skills Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent",
                    selectedSkills.length > 0 && "border-primary text-primary",
                  )}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Skills {selectedSkills.length > 0 && `(${selectedSkills.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Filter by Skills</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {allSkills.map((skill) => (
                  <DropdownMenuCheckboxItem
                    key={skill}
                    checked={selectedSkills.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                  >
                    {skill}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Availability Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent",
                    availabilityFilter.length > 0 && "border-primary text-primary",
                  )}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Availability {availabilityFilter.length > 0 && `(${availabilityFilter.length})`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Filter by Availability</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {["Available", "Busy", "On Leave"].map((status) => (
                  <DropdownMenuCheckboxItem
                    key={status}
                    checked={availabilityFilter.includes(status)}
                    onCheckedChange={() => toggleAvailability(status)}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          status === "Available" && "bg-primary",
                          status === "Busy" && "bg-amber-400",
                          status === "On Leave" && "bg-muted-foreground",
                        )}
                      />
                      {status}
                    </span>
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Match Score Filter Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "border-border text-muted-foreground hover:bg-secondary hover:text-foreground bg-transparent",
                    minMatchScore > 0 && "border-primary text-primary",
                  )}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Match {minMatchScore > 0 && `(${minMatchScore}%+)`}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Minimum Match Score</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[0, 50, 70, 80, 90].map((score) => (
                  <DropdownMenuCheckboxItem
                    key={score}
                    checked={minMatchScore === score}
                    onCheckedChange={() => setMinMatchScore(score)}
                  >
                    {score === 0 ? "All scores" : `${score}% or higher`}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="mr-1 h-4 w-4" />
                Clear
              </Button>
            )}
          </div>
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {selectedSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {skill}
                <button onClick={() => toggleSkill(skill)} className="hover:text-primary/70">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {availabilityFilter.map((status) => (
              <span
                key={status}
                className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700"
              >
                {status}
                <button onClick={() => toggleAvailability(status)} className="hover:text-blue-500">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            {minMatchScore > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                {minMatchScore}%+ match
                <button onClick={() => setMinMatchScore(0)} className="hover:text-amber-500">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          Showing {sortedMatches.length} of {projectMatches.length} employees
        </p>
      </div>

      {/* Matching table */}
      <Card className="border-border bg-card overflow-hidden py-0">
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
              {sortedMatches.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                    No employees match your current filters. Try adjusting your criteria.
                  </td>
                </tr>
              ) : (
                sortedMatches.map((match, index) => {
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
                        <div className="flex flex-wrap gap-1.5">
                          {match.skillsMatched.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="border inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs text-muted-foreground font-medium"
                            >
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              {skill}
                            </span>
                          ))}
                          {match.skillsMissing.length > 0 && (
                            <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground font-medium">
                              <XCircle className="h-3 w-3 text-red-500" />
                              {match.skillsMissing.length} missing
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Match score */}
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="h-0.5 w-16 rounded-full bg-secondary">
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
                              match.matchScore >= 70 && match.matchScore < 85 && "text-blue-600",
                              match.matchScore < 70 && "text-amber-600",
                            )}
                          >
                            {match.matchScore}%
                          </span>
                        </div>
                      </td>

                      {/* Growth potential */}
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
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
                            match.availability === "Available" && "border text-muted-foreground",
                            match.availability === "Busy" && "border text-muted-foreground",
                            match.availability === "On Leave" && "border text-muted-foreground",
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
                          variant={match.availability === "Available" ? "secondary" : "outline"}
                          disabled={match.availability === "On Leave"}
                          onClick={() => handleAssignClick(match)}
                          className={cn(
                            match.availability === "Available" &&
                              "",
                          )}
                        >
                          <Users className="mr-1.5 h-3.5 w-3.5" />
                          Assign
                        </Button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Summary stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md">
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-foreground">
                {projectMatches.filter((m) => m.matchScore >= 80).length}
              </p>
              <p className="text-sm text-muted-foreground">Strong Matches</p>
            </div>
          </div>
        </Card>
        <Card className="border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-foreground">
                {projectMatches.filter((m) => m.availability === "Available").length}
              </p>
              <p className="text-sm text-muted-foreground">Available Now</p>
            </div>
          </div>
        </Card>
        <Card className="border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md">
              <TrendingUp className="h-5 w-5 text-amber-600" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold text-foreground">
                {projectMatches.filter((m) => m.growthPotential >= 80).length}
              </p>
              <p className="text-sm text-muted-foreground">High Growth Potential</p>
            </div>
          </div>
        </Card>
      </div>

      <AssignModal
        employeeName={assignModal.employeeName}
        employeeAvatar={assignModal.employeeAvatar}
        projectName="Frontend Redesign"
        matchScore={assignModal.matchScore}
        open={assignModal.open}
        onClose={() => setAssignModal({ ...assignModal, open: false })}
        onConfirm={() => {}}
      />
    </div>
  )
}
