"use client"

import type React from "react"

import type { DiagramConfig, Axis, Person, LabelPositions, TextBounds } from "@/lib/types"
import type { GeometryHelpers } from "@/lib/geometry"

interface DiagramRendererProps {
  config: DiagramConfig
  helpers: GeometryHelpers
  axes: Axis[]
  people: Person[]
  labelPositions: LabelPositions
  textBounds: TextBounds
  textRefs: React.MutableRefObject<{ [id: string]: SVGTextElement | null }>
  axisTextRefs?: React.MutableRefObject<{ [index: number]: SVGTextElement | null }>
  showFill: boolean
  selectedPerson?: string | null
  isMobile?: boolean
  interactive?: boolean
  onMouseDown?: (personId: string, axisIndex: number, e: React.MouseEvent) => void
  onTouchStart?: (personId: string, axisIndex: number, e: React.TouchEvent) => void
}

export function DiagramRenderer({
  config,
  helpers,
  axes,
  people,
  labelPositions,
  textBounds,
  textRefs,
  axisTextRefs,
  showFill,
  selectedPerson,
  isMobile = false,
  interactive = false,
  onMouseDown,
  onTouchStart,
}: DiagramRendererProps) {
  return (
    <>
      {/* Boundary polygon */}
      <polygon
        points={helpers.getBoundaryPoints()}
        fill="none"
        stroke="#ffffff"
        strokeWidth={config.strokeWidth.boundary}
      />

      {/* Axes */}
      {axes.map((axis, i) => {
        const endpoint = helpers.getAxisEndpoint(i)
        return (
          <g key={axis.id}>
            <line
              x1={config.center}
              y1={config.center}
              x2={endpoint.x}
              y2={endpoint.y}
              stroke="#ffffff"
              strokeWidth={config.strokeWidth.axis}
            />
            <text
              ref={axisTextRefs ? (el) => (axisTextRefs.current[i] = el) : undefined}
              x={endpoint.labelX}
              y={endpoint.labelY}
              fill="#ffffff"
              fontSize={config.fontSize.axis}
              fontWeight={interactive ? "400" : "500"}
              textAnchor="middle"
              dominantBaseline="middle"
              className={interactive ? "select-none tracking-wider" : undefined}
              style={{ letterSpacing: "0.05em" }}
            >
              {axis.label
                .toUpperCase()
                .split(" ")
                .map((word, wi) => (
                  <tspan key={wi} x={endpoint.labelX} dy={wi === 0 ? 0 : config.lineHeight}>
                    {word}
                  </tspan>
                ))}
            </text>
          </g>
        )
      })}

      {/* Person polygons */}
      {people.map((person) => (
        <polygon
          key={person.id}
          points={helpers.getPolygonPoints(person)}
          fill={showFill ? `${person.color}33` : "none"}
          stroke={person.color}
          strokeWidth={config.strokeWidth.polygon}
          opacity={interactive && selectedPerson && selectedPerson !== person.id ? 0.3 : 1}
        />
      ))}

      {people.map((person) =>
        person.values.map((value, axisIndex) => {
          const pos = helpers.getPointPosition(axisIndex, value)
          const isSelected = selectedPerson === person.id
          const canInteract = interactive && (!isMobile || !selectedPerson || isSelected)
          const touchRadius =
            isMobile && isSelected ? 24 : isSelected ? config.dotRadius.selected : config.dotRadius.normal

          return (
            <circle
              key={`${person.id}-${axisIndex}`}
              cx={pos.x}
              cy={pos.y}
              r={touchRadius}
              fill={isMobile && isSelected ? "transparent" : person.color}
              stroke={isMobile && isSelected ? "transparent" : "black"}
              strokeWidth={isMobile && isSelected ? 0 : 2}
              opacity={interactive && selectedPerson && !isSelected ? 0.3 : 1}
              onMouseDown={
                canInteract && onMouseDown
                  ? (e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onMouseDown(person.id, axisIndex, e)
                    }
                  : undefined
              }
              onTouchStart={
                canInteract && onTouchStart
                  ? (e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      onTouchStart(person.id, axisIndex, e)
                    }
                  : undefined
              }
              className={canInteract ? "cursor-grab active:cursor-grabbing" : undefined}
              style={{
                touchAction: canInteract ? "none" : undefined,
                WebkitTouchCallout: "none",
                pointerEvents: canInteract ? "auto" : interactive ? "none" : undefined,
              }}
            />
          )
        }),
      )}

      {isMobile &&
        people.map((person) =>
          person.values.map((value, axisIndex) => {
            const pos = helpers.getPointPosition(axisIndex, value)
            const isSelected = selectedPerson === person.id
            return (
              <circle
                key={`visible-${person.id}-${axisIndex}`}
                cx={pos.x}
                cy={pos.y}
                r={isSelected ? config.dotRadius.selected : config.dotRadius.normal}
                fill={person.color}
                stroke="black"
                strokeWidth="2"
                opacity={selectedPerson && !isSelected ? 0.3 : 1}
                style={{ pointerEvents: "none" }}
              />
            )
          }),
        )}

      {/* Person labels */}
      {people.map((person) => {
        const pos = labelPositions[person.id]
        if (!pos) return null
        const { textX, textY } = pos
        const measured = textBounds[person.id]
        const rectWidth = measured ? measured.width + 6 : 0
        const rectHeight = measured ? measured.height + 2 : 0
        return (
          <g
            key={`label-${person.id}`}
            opacity={interactive && selectedPerson && selectedPerson !== person.id ? 0.3 : 1}
            style={{ pointerEvents: "none" }} // Added pointer-events none to entire label group so labels don't block dragging
          >
            {measured && (
              <rect
                x={textX - 3}
                y={textY - rectHeight / 2}
                width={rectWidth}
                height={rectHeight}
                fill="rgba(0, 0, 0, 0.7)"
              />
            )}
            <text
              ref={(el) => {
                textRefs.current[person.id] = el
              }}
              x={textX}
              y={textY}
              fill={person.color}
              fontSize={config.fontSize.label}
              fontWeight={interactive ? "500" : "600"}
              dominantBaseline="central"
              className={interactive ? "select-none uppercase tracking-wide" : undefined}
              style={!interactive ? { letterSpacing: "0.05em", textTransform: "uppercase" } : undefined}
            >
              {person.name}
            </text>
          </g>
        )
      })}
    </>
  )
}
