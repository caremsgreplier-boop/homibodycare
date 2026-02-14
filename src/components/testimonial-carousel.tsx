"use client"

import * as React from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

import { Testimonial } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  const [mobileIndex, setMobileIndex] = React.useState(0)
  const current = testimonials[mobileIndex % testimonials.length]

  return (
    <div className="w-full overflow-x-hidden">
      <div className="md:hidden relative">
        <Card className="bg-white border border-slate-100 shadow-sm rounded-3xl">
          <CardContent className="p-6 h-full flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-slate-700 text-base italic leading-relaxed mb-6 flex-grow">
              &quot;{current.comment}&quot;
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
              <Avatar className="h-12 w-12 border-2 border-primary/10">
                <AvatarFallback className="bg-primary/5 text-primary font-bold">
                  {current.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-slate-900">{current.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Verified Experience</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <button
          aria-label="Previous"
          onClick={() => setMobileIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full border border-slate-200 bg-white/70 text-slate-600 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          aria-label="Next"
          onClick={() => setMobileIndex((i) => (i + 1) % testimonials.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full border border-slate-200 bg-white/70 text-slate-600 shadow-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="hidden md:flex animate-marquee hover:[animation-play-state:paused] gap-6">
        {extendedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-[400px]">
            <Card className="bg-white border border-slate-100 shadow-sm rounded-3xl h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg italic leading-relaxed mb-6 flex-grow">
                  &quot;{testimonial.comment}&quot;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                  <Avatar className="h-12 w-12 border-2 border-primary/10">
                    <AvatarFallback className="bg-primary/5 text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Verified Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
