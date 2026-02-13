import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://homibodycare.shop/sitemap.xml',
    host: 'https://homibodycare.shop',
  }
}
