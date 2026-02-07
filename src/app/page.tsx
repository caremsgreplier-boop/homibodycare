import Image from "next/image"
import Link from "next/link"
import { products, testimonials } from "@/lib/data"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import React from "react"
import { Leaf, Droplets, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { ComingSoonOverlay } from "@/components/coming-soon-overlay"

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Embrace Your Natural Radiance
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover the power of nature with Homi Body Care. Our handcrafted products are made with the finest ingredients to nourish your body and soul.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-lg"
              />
            )}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Purely Natural</h3>
              <p className="text-muted-foreground">Crafted with 100% natural and organic ingredients.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4">
                <Droplets className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Richly Nourishing</h3>
              <p className="text-muted-foreground">Formulas designed to deeply moisturize and rejuvenate.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Sustainably Sourced</h3>
              <p className="text-muted-foreground">Ethically sourced ingredients, kind to you and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Featured Products</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience gentle care and visible results with our collection of nature-infused essentials.
              </p>
            </div>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {products.slice(0, 4).map((product) => (
              <Card key={product.id} className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative aspect-square w-full overflow-hidden bg-white">
                    <Image
                      src={
                        product.id === 'shampoo' ? '/shampo_main.webp' : 
                        product.id === 'body-soap' ? '/soap_main.webp' : 
                        product.id === 'hair-oil' ? '/oil_main.webp' : 
                        product.id === 'body-care' ? '/test.webp' :
                        product.image.imageUrl
                      }
                      alt={product.name}
                      data-ai-hint={product.image.imageHint}
                      fill
                      className={cn(
                        "object-contain transition-transform duration-500 hover:scale-105",
                        product.id === 'body-care' && "blur-[6px]"
                      )}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{product.tagline}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  {product.id === 'body-care' ? (
                    <Button className="w-full pointer-events-none opacity-50" variant="outline">
                      Coming Soon
                    </Button>
                  ) : (
                    <Button asChild className="w-full" variant="outline">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </div>
  )
}
