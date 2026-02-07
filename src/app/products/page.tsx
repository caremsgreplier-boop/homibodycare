import Image from "next/image"
import Link from "next/link"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"

import { cn } from "@/lib/utils"

export default function ProductsPage() {
  return (
    <div className="bg-secondary/50">
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="mb-8">
            <BackButton />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">All Products</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our full range of natural care products, crafted with love and the finest ingredients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col bg-background">
              <CardContent className="p-0">
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
              </CardContent>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-grow">{product.tagline}</p>
                {product.price && (
                  <div className="flex items-baseline gap-2 mt-4">
                    <p className="text-lg font-semibold">{product.price}</p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">{product.originalPrice}</p>
                    )}
                  </div>
                )}
              </div>
              <CardFooter className="p-6 pt-0">
                {product.id === 'body-care' ? (
                  <Button className="w-full pointer-events-none opacity-50" variant="outline">
                    Coming Soon
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
