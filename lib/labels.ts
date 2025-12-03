import type { DiagramConfig, Axis, Person, LabelBounds, TextBounds, LabelPositions } from "./types"
import { createGeometryHelpers } from "./geometry"

export const checkCollision = (rect1: LabelBounds, rect2: LabelBounds, padding = 4) => {
  return !(
    rect1.x + rect1.width + padding < rect2.x ||
    rect2.x + rect2.width + padding < rect1.x ||
    rect1.y + rect1.height + padding < rect2.y ||
    rect2.y + rect2.height + padding < rect1.y
  )
}

export const calculateAxisLabelBounds = (
  axes: Axis[],
  config: DiagramConfig,
  measuredBounds?: LabelBounds[],
): LabelBounds[] => {
  if (measuredBounds && measuredBounds.length === axes.length) {
    return measuredBounds
  }

  const helpers = createGeometryHelpers(config, axes)
  const charWidth = config.fontSize.axis * 0.7

  return axes.map((axis, i) => {
    const endpoint = helpers.getAxisEndpoint(i)
    const words = axis.label.toUpperCase().split(" ")
    const width = Math.max(...words.map((w) => w.length * charWidth)) + 20
    const height = words.length * config.lineHeight + 10
    return {
      x: endpoint.labelX - width / 2,
      y: endpoint.labelY - height / 2,
      width,
      height,
    }
  })
}

export const calculateLabelPositions = (
  people: Person[],
  axes: Axis[],
  config: DiagramConfig,
  textBounds: TextBounds,
  axisLabelBounds: LabelBounds[],
): LabelPositions => {
  const helpers = createGeometryHelpers(config, axes)
  const positions: LabelPositions = {}
  const placedLabels: LabelBounds[] = []

  const charWidth = config.fontSize.label * 0.65
  const defaultHeight = config.fontSize.label * 1.4

  const allBullets: LabelBounds[] = []
  const bulletRadius = config.dotRadius?.normal || 4
  for (const person of people) {
    for (let i = 0; i < axes.length; i++) {
      const pos = helpers.getPointPosition(i, person.values[i])
      allBullets.push({
        x: pos.x - bulletRadius - 2,
        y: pos.y - bulletRadius - 2,
        width: (bulletRadius + 2) * 2,
        height: (bulletRadius + 2) * 2,
      })
    }
  }

  const offsets = [
    { dx: 14, dy: 0 },
    { dx: -14, dy: 0, alignRight: true },
    { dx: 14, dy: -20 },
    { dx: 14, dy: 20 },
    { dx: -14, dy: -20, alignRight: true },
    { dx: -14, dy: 20, alignRight: true },
    { dx: 0, dy: -28 },
    { dx: 0, dy: 28 },
    { dx: 28, dy: 0 },
    { dx: -28, dy: 0, alignRight: true },
    { dx: 28, dy: -20 },
    { dx: 28, dy: 20 },
    { dx: -28, dy: -20, alignRight: true },
    { dx: -28, dy: 20, alignRight: true },
    { dx: 0, dy: -42 },
    { dx: 0, dy: 42 },
    { dx: 42, dy: 0 },
    { dx: -42, dy: 0, alignRight: true },
    { dx: 42, dy: -28 },
    { dx: 42, dy: 28 },
    { dx: -42, dy: -28, alignRight: true },
    { dx: -42, dy: 28, alignRight: true },
    { dx: 0, dy: -56 },
    { dx: 0, dy: 56 },
    { dx: 56, dy: 0 },
    { dx: -56, dy: 0, alignRight: true },
  ]

  for (const person of people) {
    // Find highest value axis for label anchor point
    let maxIdx = 0
    let maxVal = 0
    person.values.forEach((v, i) => {
      if (v > maxVal) {
        maxVal = v
        maxIdx = i
      }
    })

    const basePos = helpers.getPointPosition(maxIdx, person.values[maxIdx])
    const measured = textBounds[person.id]
    const textWidth = measured ? measured.width : person.name.length * charWidth + 4
    const textHeight = measured ? measured.height : defaultHeight

    let finalPos = { textX: basePos.x + 14, textY: basePos.y, textWidth, textHeight }
    let foundPosition = false

    for (const offset of offsets) {
      const textX = offset.alignRight ? basePos.x + offset.dx - textWidth : basePos.x + offset.dx
      const textY = basePos.y + offset.dy
      const labelRect = { x: textX - 4, y: textY - textHeight / 2 - 2, width: textWidth + 8, height: textHeight + 4 }

      const axisCollision = axisLabelBounds.some((rect) => checkCollision(labelRect, rect, 6))
      const labelCollision = placedLabels.some((rect) => checkCollision(labelRect, rect, 2))
      const bulletCollision = allBullets.some((rect) => checkCollision(labelRect, rect, 0))

      if (!axisCollision && !labelCollision && !bulletCollision) {
        finalPos = { textX, textY, textWidth, textHeight }
        foundPosition = true
        break
      }
    }

    positions[person.id] = finalPos
    placedLabels.push({
      x: finalPos.textX - 4,
      y: finalPos.textY - finalPos.textHeight / 2 - 2,
      width: finalPos.textWidth + 8,
      height: finalPos.textHeight + 4,
    })
  }

  return positions
}
