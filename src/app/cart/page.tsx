'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BackButton } from "@/components/back-button"
import { useToast } from "@/hooks/use-toast"
import { CartBuyNowFlow } from "@/components/cart-buy-now-flow"
import { QuantitySelector } from "@/components/quantity-selector"
import { formatRupees, parseRupeePrice, readCartItems, writeCartItems, type CartItem } from "@/lib/cart"

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const loadCartItems = () => {
      try {
        const items = readCartItems()
        setCartItems(items)
      } catch (error) {
        console.error("Failed to read from local storage", error)
        setCartItems([])
      }
    }

    loadCartItems() // Load on initial mount

    window.addEventListener('cartUpdated', loadCartItems) // Listen for changes

    return () => {
      window.removeEventListener('cartUpdated', loadCartItems) // Cleanup listener
    }
  }, [])

  const handleRemoveItem = (productId: string) => {
    try {
      const currentCart = readCartItems()
      const updatedCart = currentCart.filter((item) => item.id !== productId)
      
      setCartItems(updatedCart)
      writeCartItems(updatedCart)
      
      toast({
        title: "Item removed",
        description: "The item has been removed from your bag.",
      })
    } catch (error) {
      console.error("Failed to update cart in local storage", error)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not remove item from bag.",
      });
    }
  }

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    try {
      const currentCart = readCartItems()
      const updatedCart = currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, Math.floor(quantity)) } : item
      )

      setCartItems(updatedCart)
      writeCartItems(updatedCart)
    } catch (error) {
      console.error("Failed to update cart in local storage", error)
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not update quantity.",
      })
    }
  }
  
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const unitPrice = parseRupeePrice(item.price)
      const qty = Number.isFinite(item.quantity) && item.quantity > 0 ? item.quantity : 1
      return total + unitPrice * qty
    }, 0)
  }

  const subtotal = getSubtotal()

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline mb-12 text-center">Your Shopping Bag</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-6">Your bag is empty.</p>
            <Button asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="flex items-center gap-4 p-4 overflow-hidden">
                  <Image 
                    src={item.image.imageUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md object-cover aspect-square"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.price}</p>
                    <div className="mt-2 flex items-center justify-between gap-4">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(q) => handleUpdateQuantity(item.id, q)}
                        className="shrink-0"
                      />
                      <p className="text-sm text-muted-foreground">
                        {formatRupees(parseRupeePrice(item.price) * item.quantity)}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)} className="shrink-0">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatRupees(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>Charges may apply</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatRupees(subtotal)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <CartBuyNowFlow cartItems={cartItems} total={subtotal} />
                </CardFooter>
              </Card>
              <p className="text-xs text-center text-muted-foreground">You will be redirected to WhatsApp to complete your order.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
