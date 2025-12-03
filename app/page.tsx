"use client"

import { useState } from "react"
import { WorkOSSidebar } from "@/components/workos/sidebar"
import { WorkOSHeader } from "@/components/workos/header"
import { SkillsDashboard } from "@/components/workos/skills-dashboard"
import { UpskillingPath } from "@/components/workos/upskilling-path"
import { SkillMatching } from "@/components/workos/skill-matching"

export default function WorkOSApp() {
  const [activeView, setActiveView] = useState<"dashboard" | "upskilling" | "matching">("dashboard")

  const viewConfig = {
    dashboard: {
      title: "Skills Dashboard",
      subtitle: "Real-time visibility into your team's skills and gaps",
      component: SkillsDashboard,
    },
    upskilling: {
      title: "My Growth Path",
      subtitle: "Personalized learning recommendations based on your goals",
      component: UpskillingPath,
    },
    matching: {
      title: "Skill Matching",
      subtitle: "Find the best team members for your project",
      component: SkillMatching,
    },
  }

  const CurrentView = viewConfig[activeView].component

  return (
    <div className="flex h-screen bg-background">
      <WorkOSSidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex flex-1 flex-col min-w-0">
        <WorkOSHeader title={viewConfig[activeView].title} subtitle={viewConfig[activeView].subtitle} />
        <main className="flex-1 overflow-auto">
          <CurrentView />
        </main>
      </div>
    </div>
  )
}
