"use client"

import * as React from "react"

import { type Product } from "@/lib/data"
import { AddToBagButton } from "@/components/add-to-bag-button"
import { BuyNowFlow } from "@/components/buy-now-flow"
import { QuantitySelector } from "@/components/quantity-selector"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProductPurchaseActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = React.useState(1)
  const [soapType, setSoapType] = React.useState("Rose")

  const isSoap = product.id === "body-soap"

  return (
    <div className="space-y-4">
      {isSoap && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Available types</p>
          <Select value={soapType} onValueChange={setSoapType}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Orange">Orange</SelectItem>
              <SelectItem value="Rose">Rose</SelectItem>
              <SelectItem value="Avocado">Avocado</SelectItem>
              <SelectItem value="Sandal">Sandal</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Quantity</span>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <AddToBagButton product={product} quantity={quantity} />
        <BuyNowFlow
          product={isSoap ? { ...product, name: `${product.name} - ${soapType}` } : product}
          quantity={quantity}
        />
      </div>
      <p className="text-xs text-muted-foreground text-center sm:text-left">Shipping charges may apply</p>
    </div>
  )
}

