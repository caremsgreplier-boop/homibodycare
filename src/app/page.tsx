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
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 bg-[#FDFBF7] overflow-hidden">
        {/* Advanced Decorative Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-60" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/30 rounded-full blur-[80px]" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-3 duration-1000">
                  <Leaf className="h-4 w-4" />
                  <span>Handcrafted with Pure Intentions</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl xl:text-8xl/none font-headline text-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-1000 leading-[1.05]">
                  Pure Care for Your <br />
                  <span className="text-primary italic font-serif">Natural</span> Radiance
                </h1>
                <p className="max-w-[750px] mx-auto text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000">
                  Homi Body Care blends ancient botanical wisdom with modern purity. 
                  Experience the luxury of 100% organic, handcrafted essentials.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row animate-in fade-in slide-in-from-bottom-6 duration-1000">
                <Button asChild size="lg" className="w-full md:w-auto h-14 px-10 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-primary/20 bg-primary hover:bg-primary/90">
                  <Link href="/products">Explore Collection</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full md:w-auto h-14 px-10 rounded-full border-2 text-lg font-medium transition-all duration-300 hover:scale-105 bg-transparent border-primary/20 hover:border-primary text-primary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white border-y border-slate-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="group flex flex-col items-center text-center space-y-4 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-[#FDFBF7]">
              <div className="rounded-2xl bg-primary/5 p-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                <Leaf className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Purely Organic</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source only the finest certified organic ingredients, ensuring every drop is as pure as nature intended.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center space-y-4 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-[#FDFBF7]">
              <div className="rounded-2xl bg-primary/5 p-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                <Droplets className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Deeply Nutritive</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rich in antioxidants and essential fatty acids, our formulas penetrate deeply to rejuvenate and protect.
              </p>
            </div>
            <div className="group flex flex-col items-center text-center space-y-4 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:bg-[#FDFBF7]">
              <div className="rounded-2xl bg-primary/5 p-5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-primary/10">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-headline">Ethical & Conscious</h3>
              <p className="text-muted-foreground leading-relaxed">
                Committed to sustainability, from our ethical sourcing practices to our eco-friendly packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section removed */}

      {/* Featured Products Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-10 md:mb-16">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-5xl font-headline">Signature Essentials</h2>
              <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl mx-auto">
                Elevate your daily ritual with our most-loved botanical creations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {products.slice(0, 4).map((product) => (
              <Card key={product.id} className="group relative overflow-hidden border-none shadow-none bg-transparent transition-all duration-500">
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10">
                    <Image
                      src={
                        product.id === 'shampoo' ? '/shampo_main.webp' : 
                        product.id === 'body-soap' ? '/soap_main.webp' : 
                        product.id === 'hair-oil' ? '/oil_main.webp' : 
                        product.image.imageUrl
                      }
                      alt={product.name}
                      fill
                      className="object-contain p-6 md:p-8 transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.id === 'body-care' && (
                      <div className="absolute top-6 right-6">
                        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-primary shadow-sm border border-primary/10">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <CardHeader className="px-2 pt-6 pb-2 space-y-1">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold font-headline group-hover:text-primary transition-colors">{product.name}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">{product.tagline}</p>
                  </CardHeader>
                  <CardFooter className="px-2 pb-2">
                    {product.price ? (
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-slate-900">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through opacity-60">{product.originalPrice}</span>
                        )}
                      </div>
                    ) : (
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">Launch Pending</span>
                    )}
                  </CardFooter>
                  <div className="px-2 pb-4">
                    <Button asChild variant="outline" size="lg" className="w-full h-12 rounded-full">
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 md:mt-16 text-center">
            <Button asChild variant="ghost" className="group text-primary font-bold text-lg hover:bg-transparent p-0">
              <Link href="/products" className="flex items-center gap-2">
                View All Products 
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-[#FDFBF7]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Kind Words</h2>
            <div className="w-20 h-1 bg-primary/20 rounded-full" />
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
    </div>
  )
}
