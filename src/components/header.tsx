"use client"

import Link from "next/link"
import { Menu, ShoppingBag } from "lucide-react"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"

import { cn } from "@/lib/utils"
import { getCartQuantityTotal, readCartItems } from "@/lib/cart"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LogoIcon } from "./logo-icon"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/ourstory", label: "Our Story" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/contact", label: "Contact Us" },
]

export function Header() {
  const pathname = usePathname()
  const [cartCount, setCartCount] = useState(0)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const updateCartCount = () => {
      try {
        const items = readCartItems()
        setCartCount(getCartQuantityTotal(items))
      } catch {
        setCartCount(0)
      }
    }
    
    updateCartCount()

    window.addEventListener('cartUpdated', updateCartCount)

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount)
    }
  }, [])

  const NavLinks = ({ className, linkClassName, onNavClick }: { className?: string; linkClassName?: string; onNavClick?: () => void }) => (
    <nav className={cn("flex items-center gap-6 md:gap-8", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onNavClick}
          className={cn(
            "group relative py-1 px-3 text-sm font-headline uppercase tracking-widest rounded-full transition-all hover:bg-primary/10 hover:text-primary",
            pathname === link.href ? "text-primary bg-primary/10 shadow-sm" : "text-muted-foreground",
            linkClassName
          )}
        >
          {link.label}
          <span className={cn(
            "absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100",
            pathname === link.href && "scale-x-100"
          )} />
        </Link>
      ))}
    </nav>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center space-x-3">
            <LogoIcon className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold tracking-tight">Homi Body Care</span>
          </Link>
          <div className="hidden md:flex">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative transition-transform hover:scale-105" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground animate-in zoom-in">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Shopping Bag</span>
            </Link>
          </Button>

          <div>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="transition-transform hover:scale-105">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left border-b pb-4 mb-8">
                  <SheetTitle className="font-headline text-xl">Menu</SheetTitle>
                  <SheetDescription>Explore our natural collection</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-6">
                  <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setIsSheetOpen(false)}>
                    <LogoIcon className="h-8 w-8 text-primary" />
                    <span className="font-headline text-lg font-bold">Homi Body Care</span>
                  </Link>
                  <NavLinks 
                    className="flex-col items-start gap-6" 
                    linkClassName="text-lg normal-case tracking-normal font-headline" 
                    onNavClick={() => setIsSheetOpen(false)}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
