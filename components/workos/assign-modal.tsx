"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2, Users, AlertCircle } from "lucide-react"

interface AssignModalProps {
  employeeName: string
  employeeAvatar?: string
  projectName: string
  matchScore: number
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export function AssignModal({
  employeeName,
  employeeAvatar,
  projectName,
  matchScore,
  open,
  onClose,
  onConfirm,
}: AssignModalProps) {
  const [status, setStatus] = useState<"confirm" | "loading" | "success">("confirm")

  const handleConfirm = () => {
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
      onConfirm()
      setTimeout(() => {
        setStatus("confirm")
        onClose()
      }, 1500)
    }, 1000)
  }

  const handleClose = () => {
    setStatus("confirm")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-card border-border">
        {status === "success" ? (
          <div className="py-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Assignment Successful!</h3>
            <p className="text-muted-foreground">
              {employeeName} has been assigned to {projectName}.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-foreground">Confirm Assignment</DialogTitle>
            </DialogHeader>

            <div className="py-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={employeeAvatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {employeeName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{employeeName}</p>
                  <p className="text-sm text-muted-foreground">Match Score: {matchScore}%</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Assigning to: {projectName}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    This employee will be notified and added to the project team.
                  </p>
                </div>
              </div>

              {matchScore < 70 && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-4">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Low Match Score</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Consider providing additional training resources for this assignment.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-border">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                className="bg-primary text-primary-foreground"
                onClick={handleConfirm}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Assigning..." : "Confirm Assignment"}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
