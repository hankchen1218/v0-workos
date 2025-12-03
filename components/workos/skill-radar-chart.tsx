"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import type { Skill } from "@/lib/workos-data"

interface SkillRadarChartProps {
  skills: Skill[]
}

export function SkillRadarChart({ skills }: SkillRadarChartProps) {
  const data = skills.map((skill) => ({
    skill: skill.name,
    current: skill.proficiency,
    target: skill.targetProficiency || skill.proficiency,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
        <PolarGrid stroke="#333" />
        <PolarAngleAxis dataKey="skill" tick={{ fill: "#888", fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#666", fontSize: 10 }} />
        <Radar name="Current" dataKey="current" stroke="#10b981" fill="#10b981" fillOpacity={0.3} strokeWidth={2} />
        <Radar
          name="Target"
          dataKey="target"
          stroke="#6366f1"
          fill="transparent"
          strokeDasharray="4 4"
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
