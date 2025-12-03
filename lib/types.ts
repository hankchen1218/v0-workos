export interface Person {
  id: string
  name: string
  color: string
  values: number[]
}

export interface Axis {
  id: string
  label: string
}

export interface DiagramConfig {
  size: number
  center: number
  maxRadius: number
  strokeWidth: { boundary: number; axis: number; polygon: number }
  fontSize: { axis: number; label: number }
  dotRadius: { normal: number; selected: number }
  labelOffset: number
  lineHeight: number
}

export interface LabelBounds {
  x: number
  y: number
  width: number
  height: number
}

export interface TextBounds {
  [id: string]: { width: number; height: number }
}

export interface LabelPosition {
  textX: number
  textY: number
  textWidth: number
  textHeight: number
}

export interface LabelPositions {
  [id: string]: LabelPosition
}
