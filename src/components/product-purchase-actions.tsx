"use client"

import * as React from "react"

import { type Product } from "@/lib/data"
import { AddToBagButton } from "@/components/add-to-bag-button"
import { BuyNowFlow } from "@/components/buy-now-flow"
import { QuantitySelector } from "@/components/quantity-selector"

export function ProductPurchaseActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = React.useState(1)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Quantity</span>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <AddToBagButton product={product} quantity={quantity} />
        <BuyNowFlow product={product} quantity={quantity} />
      </div>
      <p className="text-xs text-muted-foreground text-center sm:text-left">Shipping charges may apply</p>
    </div>
  )
}

