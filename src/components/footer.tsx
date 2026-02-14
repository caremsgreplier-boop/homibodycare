import Link from "next/link"
import React from "react";
import { LogoIcon } from "./logo-icon";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container px-6 md:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <LogoIcon className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl tracking-tight text-slate-900">Homi</span>
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              Handcrafting the purest botanical essentials to nourish your body and soul with ancient wisdom.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:col-span-3 place-items-center md:place-items-start">
            <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
              <h3 className="font-bold font-headline text-lg text-slate-900">Collection</h3>
              <ul className="space-y-3">
                <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
                <li><Link href="/products/hair-oil" className="text-muted-foreground hover:text-primary transition-colors">Hair oil</Link></li>
                <li><Link href="/products/body-soap" className="text-muted-foreground hover:text-primary transition-colors">Avocado soap</Link></li>
                <li><Link href="/products/shampoo" className="text-muted-foreground hover:text-primary transition-colors">Shampoo</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
              <h3 className="font-bold font-headline text-lg text-slate-900">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/ourstory" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
                <li><Link href="/ingredients" className="text-muted-foreground hover:text-primary transition-colors">Ingredients</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
              <h3 className="font-bold font-headline text-lg text-slate-900">Connect</h3>
              <ul className="space-y-3">
                <li><Link href="https://www.instagram.com/homi_body_care_official?igsh=eXppc3JmZnRzYTJv" className="text-muted-foreground hover:text-primary transition-colors">Instagram</Link></li>
                <li><Link href="https://www.facebook.com/share/17FcqdyF7t/" className="text-muted-foreground hover:text-primary transition-colors">Facebook</Link></li>
                <li><Link href="https://x.com/MReplier11259" className="text-muted-foreground hover:text-primary transition-colors">x</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Homi Body Care. Handcrafted with love.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
