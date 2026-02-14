import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/favicon.jpeg', '/favicon.ico', '/apple-touch-icon.png'],
      },
    ],
    sitemap: 'https://homibodycare.shop/sitemap.xml',
    host: 'https://homibodycare.shop',
  }
}
