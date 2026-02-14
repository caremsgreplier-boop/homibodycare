import type { Metadata } from "next"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Terms of Service | Homi Body Care",
  description: "Read the terms that govern the use of Homi Body Care products and website.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Terms of Service</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            These terms govern your use of our website and products.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Use of the Site</h2>
          <p className="text-muted-foreground">
            By accessing our site, you agree to use it lawfully and respect intellectual property rights. Content on the
            site may not be copied or redistributed without permission.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Orders and Payments</h2>
          <p className="text-muted-foreground">
            Placing an order indicates your intent to purchase. Pricing and availability are subject to change. Payment
            details must be accurate to avoid delays or cancellations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Shipping and Delivery</h2>
          <p className="text-muted-foreground">
            We aim to deliver orders promptly. Delivery timelines may vary based on location and logistics partners.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Returns and Refunds</h2>
          <p className="text-muted-foreground">
            Returns and refunds are handled on a case-by-case basis. Please contact us if you experience issues with a
            product so we can assist promptly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="text-muted-foreground">
            We are not liable for indirect or consequential damages arising from the use of our products or website to
            the fullest extent permitted by law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p className="text-muted-foreground">
            We may update these terms periodically. Continued use of the site indicates acceptance of the latest terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            For questions about these terms, contact homibodycareproducts@gmail.com or use the details on our{" "}
            <a href="/contact" className="text-primary underline">Contact</a> page.
          </p>
        </section>
      </div>
    </div>
  )
}
