import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BackButton } from "@/components/back-button"
import { ProductPurchaseActions } from "@/components/product-purchase-actions"
import { Metadata } from 'next'

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} | Homi Body Care`,
    description: product.description,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} | Homi Body Care`,
      description: product.description,
      images: [
        {
          url: product.image.imageUrl,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  // Handle "Coming Soon" products
  if (product.id === 'body-care') {
    return (
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-8 self-start">
          <BackButton />
        </div>
        <div className="max-w-2xl space-y-8">
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={product.image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <span className="text-primary font-bold text-2xl tracking-wider">COMING SOON</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold font-headline">{product.name}</h1>
            <p className="text-muted-foreground text-xl max-w-lg mx-auto leading-relaxed">
              We're perfecting our {product.name.toLowerCase()} to ensure it meets our highest standards of natural quality. Be the first to know when it launches!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
               <Link href="/products">Back to Products</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all">
               <Link href="/contact">Notify Me</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex justify-center items-start">
          <div className="relative aspect-square w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl">
            <Image
              src={
                product.id === 'shampoo' ? '/shampo_main.webp' : 
                product.id === 'body-soap' ? '/soap_main.webp' : 
                product.id === 'hair-oil' ? '/oil_main.webp' : 
                product.image.imageUrl
              }
              alt={product.name}
              data-ai-hint={product.image.imageHint}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
          {product.price && (
            <div className="flex items-baseline gap-2 mb-4">
              <p className="text-2xl font-semibold text-primary">{product.price}</p>
              {product.originalPrice && (
                  <p className="text-lg text-muted-foreground line-through">{product.originalPrice}</p>
              )}
            </div>
          )}
          <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

          <div className="mb-8">
            <ProductPurchaseActions product={product} />
          </div>

          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Benefits</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {product.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Ingredients</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{product.ingredients.join(", ")}.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">How to Use</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{product.usage}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
