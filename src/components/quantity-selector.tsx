"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type QuantitySelectorProps = {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
}

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }: QuantitySelectorProps) {
  const clamp = React.useCallback(
    (next: number) => {
      const rounded = Math.floor(next)
      if (!Number.isFinite(rounded)) return min
      return Math.min(max, Math.max(min, rounded))
    },
    [min, max]
  )

  const setValue = React.useCallback(
    (next: number) => {
      onChange(clamp(next))
    },
    [clamp, onChange]
  )

  return (
    <div className={cn("flex items-center", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-r-none"
        onClick={() => setValue(value - 1)}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        inputMode="numeric"
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const next = Number.parseInt(e.target.value || "", 10)
          setValue(Number.isFinite(next) ? next : min)
        }}
        className="h-10 w-16 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        aria-label="Quantity"
      />
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-10 w-10 rounded-l-none"
        onClick={() => setValue(value + 1)}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}

