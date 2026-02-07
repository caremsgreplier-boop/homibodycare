'use client'

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsappButton() {
  const whatsappNumber = "916303801653";
  const defaultMessage = "Hi! I'm interested in your products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}
