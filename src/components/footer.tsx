import Link from "next/link"
import React from "react";
import { LogoIcon } from "./logo-icon";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2">
            <Link href="/" className="flex items-center space-x-2 mb-2">
              <LogoIcon className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-lg">Homi Body Care</span>
            </Link>
            <p className="text-sm text-muted-foreground">Natural care for a better you.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center md:col-span-2 md:grid-cols-3 md:text-left">
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">All Products</Link></li>
                <li><Link href="/products/hair-oil" className="text-sm text-muted-foreground hover:text-primary">Hair oil</Link></li>
                <li><Link href="/products/body-soap" className="text-sm text-muted-foreground hover:text-primary">Avocado soap</Link></li>
                <li><Link href="/products/shampoo" className="text-sm text-muted-foreground hover:text-primary">Shampoo</Link></li>
                <li><Link href="/products/body-care" className="text-sm text-muted-foreground hover:text-primary">Hydrating Body Care</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><Link href="/ourstory" className="text-sm text-muted-foreground hover:text-primary">Our Story</Link></li>
                <li><Link href="/ingredients" className="text-sm text-muted-foreground hover:text-primary">Ingredients</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><Link href="https://www.instagram.com/homi_body_care_official?igsh=eXppc3JmZnRzYTJv" className="text-sm text-muted-foreground hover:text-primary">Instagram</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Facebook</Link></li>
                <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Homi Body Care Products. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
