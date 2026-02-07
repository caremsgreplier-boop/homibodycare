"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { formatRupees, parseRupeePrice, type CartItem } from "@/lib/cart"

const addressSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  street: z.string().min(5, { message: "Street address is required." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "State/Province is required." }),
  zip: z.string().min(4, { message: "A valid postal code is required." }),
  phone: z.string().min(10, { message: "A valid phone number is required." }),
})

type AddressFormValues = z.infer<typeof addressSchema>

export function CartBuyNowFlow({ cartItems, total }: { cartItems: CartItem[]; total: number }) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  const form = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      fullName: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
    },
  })

  useEffect(() => {
    if (open) {
      try {
        const savedAddress = localStorage.getItem("shippingAddress")
        if (savedAddress) {
          form.reset(JSON.parse(savedAddress))
        }
      } catch (error) {
        console.error("Failed to read address from local storage", error)
      }
    }
  }, [open, form])


  function onSubmit(data: AddressFormValues) {
    const productsList = cartItems
      .map((item) => {
        const lineTotal = parseRupeePrice(item.price) * item.quantity
        return `- ${item.name} x${item.quantity} (${item.price}) = ${formatRupees(lineTotal)}`
      })
      .join("\n")
    
    try {
      localStorage.setItem("shippingAddress", JSON.stringify(data))
      const order = {
        products: cartItems.map((item) => ({ name: item.name, price: item.price, quantity: item.quantity })),
        totalPrice: formatRupees(total),
        address: data,
        timestamp: new Date().toISOString(),
      }
      const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]")
      existingOrders.push(order)
      localStorage.setItem("orders", JSON.stringify(existingOrders))
      localStorage.setItem("cart", "[]")
      window.dispatchEvent(new Event('cartUpdated'))
    } catch (error) {
      console.error("Failed to save to local storage", error)
    }

    const message = `Hi! I'd like to order the following products:

${productsList}

Total: ${formatRupees(total)}

Delivery Address:
${data.fullName}
${data.street}
${data.city}, ${data.state} ${data.zip}
Phone: ${data.phone}`

    const whatsappNumber = "916303801653"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    setOpen(false)
    toast({
      title: "Order Details Sent!",
      description: "Your order has been sent via WhatsApp. We will contact you shortly.",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Shipping Address</DialogTitle>
          <DialogDescription>
            Enter your address to complete your purchase.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Anytown" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State / Province</FormLabel>
                    <FormControl>
                      <Input placeholder="CA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
             <FormField
                control={form.control}
                name="zip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ZIP / Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="90210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="(555) 555-5555" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Send to WhatsApp</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
