"use client"

import { cn } from "@/lib/utils"

export function ComingSoonOverlay({ className }: { className?: string }) {
  return (
    <div className={cn(
      "absolute inset-0 z-10 flex items-center justify-center bg-background/60 backdrop-blur-sm transition-all duration-300",
      className
    )}>
      <div className="bg-primary px-4 py-2 text-primary-foreground font-bold shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 text-sm sm:text-base">
        Coming Soon
      </div>
    </div>
  )
}