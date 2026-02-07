
import { products } from "@/lib/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { BackButton } from "@/components/back-button"

export default function IngredientsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Our Ingredients</h1>
          <p className="mt-4 text-xl text-muted-foreground">A transparent look at what goes into our products.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-secondary/30">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
