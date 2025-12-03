"use client"

import { Plus, Trash2, Edit2, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { Person, Axis } from "@/lib/types"
import { colorPickerColors } from "@/lib/constants"

interface PanelContentProps {
  isMobile: boolean
  people: Person[]
  axes: Axis[]
  selectedPerson: string | null
  editingPerson: string | null
  editingAxis: string | null
  showFill: boolean
  onSelectPerson: (id: string | null) => void
  onAddPerson: () => void
  onDeletePerson: (id: string) => void
  onUpdatePersonName: (id: string, name: string) => void
  onUpdatePersonColor: (id: string, color: string) => void
  onSetEditingPerson: (id: string | null) => void
  onAddAxis: () => void
  onDeleteAxis: (id: string) => void
  onUpdateAxisLabel: (id: string, label: string) => void
  onSetEditingAxis: (id: string | null) => void
  onToggleFill: () => void
}

export function PanelContent({
  isMobile,
  people,
  axes,
  selectedPerson,
  editingPerson,
  editingAxis,
  showFill,
  onSelectPerson,
  onAddPerson,
  onDeletePerson,
  onUpdatePersonName,
  onUpdatePersonColor,
  onSetEditingPerson,
  onAddAxis,
  onDeleteAxis,
  onUpdateAxisLabel,
  onSetEditingAxis,
  onToggleFill,
}: PanelContentProps) {
  return (
    <div className={`${isMobile ? "p-2 space-y-2" : "p-3 space-y-6"}`}>
      {/* Items */}
      <div>
        <div className={`flex items-center justify-between ${isMobile ? "mb-1" : "mb-2"}`}>
          <h2 className="font-medium uppercase tracking-wider text-xs text-neutral-400">Items</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={onAddPerson}
            className="text-white border-neutral-700 hover:bg-neutral-800 hover:text-white bg-transparent h-6 text-xs"
          >
            <Plus className="w-3 h-3 mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-1">
          {people.map((person) => (
            <div
              key={person.id}
              className={`${isMobile ? "p-1.5" : "p-2"} rounded border cursor-pointer ${
                selectedPerson === person.id
                  ? "border-white bg-neutral-800"
                  : "border-neutral-800 hover:border-neutral-700"
              }`}
              onClick={() => onSelectPerson(selectedPerson === person.id ? null : person.id)}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 flex-shrink-0" style={{ backgroundColor: person.color }} />
                {editingPerson === person.id ? (
                  <div className="flex items-center gap-2 flex-1">
                    <Input
                      value={person.name}
                      onChange={(e) => onUpdatePersonName(person.id, e.target.value)}
                      className="h-6 bg-black border-neutral-700 text-sm"
                      autoFocus
                      onKeyDown={(e) => e.key === "Enter" && onSetEditingPerson(null)}
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6"
                      onClick={(e) => {
                        e.stopPropagation()
                        onSetEditingPerson(null)
                        onSelectPerson(null)
                      }}
                    >
                      <Check className="w-3 h-3" />
                    </Button>
                  </div>
                ) : (
                  <>
                    <span className="flex-1 text-sm truncate">{person.name}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6 text-neutral-500 hover:text-white hover:bg-neutral-800"
                      onClick={(e) => {
                        e.stopPropagation()
                        onSetEditingPerson(person.id)
                      }}
                    >
                      <Edit2 className="w-3 h-3" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6 text-neutral-500 hover:text-white hover:bg-neutral-800"
                      onClick={(e) => {
                        e.stopPropagation()
                        onDeletePerson(person.id)
                      }}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </>
                )}
              </div>
              {selectedPerson === person.id && editingPerson !== person.id && (
                <div className={`${isMobile ? "mt-1.5 pt-1.5" : "mt-2 pt-2"} border-t border-neutral-800`}>
                  <div className="flex flex-wrap gap-1.5">
                    {colorPickerColors.map((color) => (
                      <button
                        key={color}
                        className={`w-5 h-5 ${person.color === color ? "ring-2 ring-white ring-offset-1 ring-offset-black" : ""}`}
                        style={{ backgroundColor: color }}
                        onClick={(e) => {
                          e.stopPropagation()
                          onUpdatePersonColor(person.id, color)
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <label
          className={`flex items-center gap-2 cursor-pointer select-none ${isMobile ? "mt-1.5" : "mt-2"}`}
          onClick={onToggleFill}
        >
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center ${
              showFill ? "bg-neutral-600 border-neutral-600" : "border-neutral-700 bg-transparent"
            }`}
          >
            {showFill && <Check className="w-3 h-3 text-neutral-200" />}
          </div>
          <span className="text-xs text-neutral-400">Show fill</span>
        </label>
      </div>

      {/* Axes */}
      <div>
        <div className={`flex items-center justify-between ${isMobile ? "mb-1" : "mb-2"}`}>
          <h2 className="font-medium uppercase tracking-wider text-xs text-neutral-400">Axes</h2>
          <Button
            size="sm"
            variant="outline"
            onClick={onAddAxis}
            className="text-white border-neutral-700 hover:bg-neutral-800 hover:text-white bg-transparent h-6 text-xs"
          >
            <Plus className="w-3 h-3 mr-1" /> Add
          </Button>
        </div>
        <div className="space-y-1">
          {axes.map((axis) => (
            <div
              key={axis.id}
              className={`${isMobile ? "p-1.5" : "p-2"} border border-neutral-800 rounded flex items-center gap-2`}
            >
              {editingAxis === axis.id ? (
                <div className="flex items-center gap-2 flex-1">
                  <Input
                    value={axis.label}
                    onChange={(e) => onUpdateAxisLabel(axis.id, e.target.value)}
                    className="h-6 bg-black border-neutral-700 text-sm"
                    autoFocus
                    onKeyDown={(e) => e.key === "Enter" && onSetEditingAxis(null)}
                  />
                  <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => onSetEditingAxis(null)}>
                    <Check className="w-3 h-3" />
                  </Button>
                </div>
              ) : (
                <>
                  <span className="flex-1 text-sm truncate">{axis.label}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-neutral-500 hover:text-white hover:bg-neutral-800"
                    onClick={() => onSetEditingAxis(axis.id)}
                  >
                    <Edit2 className="w-3 h-3" />
                  </Button>
                  {axes.length > 3 && (
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-6 w-6 text-neutral-500 hover:text-white hover:bg-neutral-800"
                      onClick={() => onDeleteAxis(axis.id)}
                    >
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
