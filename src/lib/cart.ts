import { type Product } from "@/lib/data"

export type CartItem = Product & { quantity: number }

export function parseRupeePrice(price: string): number {
  const normalized = price.replace(/₹/g, "").replace(/,/g, "").trim()
  const value = Number.parseFloat(normalized)
  return Number.isFinite(value) ? value : 0
}

export function formatRupees(value: number): string {
  return `₹${value.toFixed(2)}`
}

export function normalizeCartItems(raw: unknown): CartItem[] {
  if (!Array.isArray(raw)) return []

  const merged = new Map<string, CartItem>()

  for (const item of raw) {
    if (!item || typeof item !== "object") continue

    const candidate = item as Partial<CartItem>
    if (typeof candidate.id !== "string") continue
    if (typeof candidate.name !== "string") continue
    if (typeof candidate.tagline !== "string") continue
    if (!candidate.image) continue
    if (typeof candidate.price !== "string") continue
    if (typeof candidate.description !== "string") continue
    if (!Array.isArray(candidate.ingredients)) continue
    if (!Array.isArray(candidate.benefits)) continue
    if (typeof candidate.usage !== "string") continue

    const quantity =
      typeof candidate.quantity === "number" && Number.isFinite(candidate.quantity) && candidate.quantity > 0
        ? Math.floor(candidate.quantity)
        : 1

    const normalizedItem: CartItem = {
      id: candidate.id,
      name: candidate.name,
      tagline: candidate.tagline,
      image: candidate.image as Product["image"],
      price: candidate.price,
      originalPrice: candidate.originalPrice,
      description: candidate.description,
      ingredients: candidate.ingredients as Product["ingredients"],
      benefits: candidate.benefits as Product["benefits"],
      usage: candidate.usage,
      quantity,
    }

    const existing = merged.get(normalizedItem.id)
    if (existing) {
      merged.set(normalizedItem.id, { ...existing, quantity: existing.quantity + normalizedItem.quantity })
    } else {
      merged.set(normalizedItem.id, normalizedItem)
    }
  }

  return Array.from(merged.values())
}

export function readCartItems(): CartItem[] {
  try {
    const raw = JSON.parse(localStorage.getItem("cart") || "[]")
    return normalizeCartItems(raw)
  } catch {
    return []
  }
}

export function writeCartItems(items: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(items))
  window.dispatchEvent(new Event("cartUpdated"))
}

export function getCartQuantityTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (Number.isFinite(item.quantity) ? item.quantity : 0), 0)
}

