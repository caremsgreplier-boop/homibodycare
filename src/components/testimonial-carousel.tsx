"use client"

import * as React from "react"
import { User } from "lucide-react"

import { Testimonial } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  // Duplicate testimonials for seamless looping
  const extendedTestimonials = [...testimonials, ...testimonials]

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div className="flex animate-marquee hover:[animation-play-state:paused]">
        {extendedTestimonials.map((testimonial, index) => (
          <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 basis-full p-2 md:basis-1/2 lg:basis-1/3">
            <Card className="bg-secondary/50 border-0 shadow-none h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarFallback>
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">Verified Buyer</p>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 flex-grow">&quot;{testimonial.comment}&quot;</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
