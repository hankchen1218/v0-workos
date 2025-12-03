"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface HeaderProps {
  title: string
  subtitle?: string
}

export function WorkOSHeader({ title, subtitle }: HeaderProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-background px-6">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search employees, skills..."
            className="w-64 bg-secondary pl-9 text-sm placeholder:text-muted-foreground"
          />
        </div>

        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell className="h-5 w-5" />
        </Button>

        <Avatar className="h-8 w-8">
          <AvatarImage src="/manager-avatar.png" />
          <AvatarFallback className="bg-primary text-primary-foreground text-xs">MG</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
