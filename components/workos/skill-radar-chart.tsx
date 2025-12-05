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
    <ResponsiveContainer width="100%" height={450}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="80%">
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis dataKey="skill" tick={{ fill: "#1f2937", fontSize: 14, fontWeight: 500 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#6b7280", fontSize: 11 }} />
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
