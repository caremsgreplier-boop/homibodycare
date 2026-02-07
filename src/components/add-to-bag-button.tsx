'use client'

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { type Product } from "@/lib/data"
import { readCartItems, writeCartItems, type CartItem } from "@/lib/cart"

export function AddToBagButton({ product, quantity = 1 }: { product: Product; quantity?: number }) {
  const { toast } = useToast()

  const handleAddToCart = () => {
    try {
      const safeQty = Number.isFinite(quantity) && quantity > 0 ? Math.floor(quantity) : 1
      const cartItems = readCartItems()
      const existingIndex = cartItems.findIndex((item) => item.id === product.id)

      if (existingIndex >= 0) {
        const updated = [...cartItems]
        updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + safeQty }
        writeCartItems(updated)
        toast({
          title: "Updated bag",
          description: `${product.name} quantity updated in your shopping bag.`,
        })
        return
      }

      const nextItem: CartItem = { ...product, quantity: safeQty }
      writeCartItems([...cartItems, nextItem])
      toast({
        title: "Added to bag!",
        description: `${product.name} has been added to your shopping bag.`,
      })
    } catch (error) {
      console.error("Failed to save to local storage", error)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not add product to bag.",
      });
    }
  }

  return (
    <Button size="lg" className="w-full transition-transform duration-300 hover:scale-105" onClick={handleAddToCart}>
      <ShoppingBag className="mr-2 h-5 w-5" />
      Add to Bag
    </Button>
  )
}
