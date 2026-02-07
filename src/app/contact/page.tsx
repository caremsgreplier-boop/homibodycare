
import { Mail, Phone } from "lucide-react"
import { BackButton } from "@/components/back-button"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              We'd love to hear from you! Whether you have a question about our products, need assistance, or just want to share your feedback, feel free to reach out using the contact details below.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Our Address</h2>
              <address className="not-italic text-muted-foreground mt-2 space-y-1">
                <p>Kovvuri Paddi Reddy</p>
                <p>Inti number 7-106</p>
                <p>pulagam vari street pekeru</p>
                <p>Iragavaram mandalam, Pekeru</p>
                <p>West Godavari, Andhra Pradesh - 534320</p>
              </address>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">WhatsApp</h2>
              <a href="https://wa.me/916303801653" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors mt-2 text-lg">
                <Phone className="w-5 h-5" />
                <span>+91 63038 01653</span>
              </a>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Email</h2>
              <a href="mailto:homibodycareproducts@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors mt-2 text-lg">
                <Mail className="w-5 h-5" />
                <span>homibodycareproducts@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
