import type { Metadata } from "next"
import { BackButton } from "@/components/back-button"

export const metadata: Metadata = {
  title: "Privacy Policy | Homi Body Care",
  description: "Learn how Homi Body Care collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Privacy Policy</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Your privacy matters. This policy explains what we collect and how we use it.
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p className="text-muted-foreground">
            We may collect your name, contact details, order information, and messages you send us. We also use
            analytics to understand site usage and improve our experience.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use your information to process orders, provide support, improve our products and website, and send
            important updates. We do not sell your personal information.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies and Analytics</h2>
          <p className="text-muted-foreground">
            We use cookies and analytics tools to personalize content and measure performance. You can manage cookies
            through your browser settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Sharing</h2>
          <p className="text-muted-foreground">
            We may share information with trusted service providers for payments, analytics, and logistics. These
            partners are bound by agreements to protect your data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p className="text-muted-foreground">
            We implement reasonable safeguards to protect personal data. No method of transmission is fully secure, so
            we encourage you to use strong passwords and secure devices.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Choices</h2>
          <p className="text-muted-foreground">
            You may request access, updates, or deletion of your data by contacting us. Opt-out options for marketing
            communications are available in each message.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-muted-foreground">
            For privacy requests, contact homibodycareproducts@gmail.com or reach us via the details on the{" "}
            <a href="/contact" className="text-primary underline">Contact</a> page.
          </p>
        </section>
      </div>
    </div>
  )
}
