import type { DiagramConfig, Axis, Person } from "./types"

export const createGeometryHelpers = (config: DiagramConfig, axes: Axis[]) => {
  const { center, maxRadius } = config
  const totalAxes = axes.length

  const getPointPosition = (axisIndex: number, value: number) => {
    const angle = (axisIndex * 2 * Math.PI) / totalAxes - Math.PI / 2
    const radius = (value / 100) * maxRadius
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    }
  }

  const getAxisEndpoint = (axisIndex: number) => {
    const angle = (axisIndex * 2 * Math.PI) / totalAxes - Math.PI / 2
    return {
      x: center + maxRadius * Math.cos(angle),
      y: center + maxRadius * Math.sin(angle),
      labelX: center + (maxRadius + config.labelOffset) * Math.cos(angle),
      labelY: center + (maxRadius + config.labelOffset) * Math.sin(angle),
      angle,
    }
  }

  const getPolygonPoints = (person: Person) => {
    return person.values
      .map((value, i) => {
        const pos = getPointPosition(i, value)
        return `${pos.x},${pos.y}`
      })
      .join(" ")
  }

  const getBoundaryPoints = () => {
    return axes
      .map((_, i) => {
        const pos = getAxisEndpoint(i)
        return `${pos.x},${pos.y}`
      })
      .join(" ")
  }

  return { getPointPosition, getAxisEndpoint, getPolygonPoints, getBoundaryPoints }
}

export type GeometryHelpers = ReturnType<typeof createGeometryHelpers>
