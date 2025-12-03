import type { Axis, Person } from "./types"

export const defaultAxes: Axis[] = [
  { id: "1", label: "Product Leadership" },
  { id: "2", label: "Technical Leadership" },
  { id: "3", label: "Shipping Leadership" },
  { id: "4", label: "People Leadership" },
]

export const defaultPeople: Person[] = [
  { id: "1", name: "Alex", color: "#22d3d3", values: [30, 20, 40, 70] },
  { id: "2", name: "Jordan", color: "#60a5fa", values: [80, 50, 30, 40] },
  { id: "3", name: "Sam", color: "#f59e0b", values: [50, 70, 40, 30] },
  { id: "4", name: "Taylor", color: "#f87171", values: [60, 95, 50, 20] },
]

export const colorOptions = [
  "#f87171",
  "#fb923c",
  "#facc15",
  "#4ade80",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
  "#22d3d3",
  "#a3e635",
  "#e879f9",
]

export const colorPickerColors = [
  "#22d3d3",
  "#f97316",
  "#a855f7",
  "#22c55e",
  "#f43f5e",
  "#3b82f6",
  "#eab308",
  "#e879f9",
]
