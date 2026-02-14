import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"

import { cn } from "@/lib/utils"

export default function ProductsPage() {
  return (
    <div className="bg-[#FDFBF7]/50 min-h-screen">
      <div className="container px-4 md:px-6 py-12 md:py-20 lg:py-24">
        <div className="mb-12">
            <BackButton />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl font-headline">The Collection</h1>
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed mx-auto">
              Meticulously handcrafted essentials for your daily ritual. 
              Pure, botanical, and uncompromising in quality.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden border-none shadow-none bg-transparent transition-all duration-500">
              <Link href={`/products/${product.id}`} className="block">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 border border-slate-100/50">
                  <Image
                    src={
                      product.id === 'shampoo' ? '/shampo_main.webp' : 
                      product.id === 'body-soap' ? '/soap_main.webp' : 
                      product.id === 'hair-oil' ? '/oil_main.webp' : 
                      product.image.imageUrl
                    }
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
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
                <div className="px-2 pb-2 mt-2">
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
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
