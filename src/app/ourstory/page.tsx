
import { BackButton } from "@/components/back-button"

export default function OurStoryPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-headline">Our Story</h1>
          <p className="mt-4 text-xl text-muted-foreground">The journey behind Homi Body Care Products.</p>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground md:text-justify leading-relaxed">
          <p>
            This is the story of Homi Body Care Products.
          </p>
          <p>
            Everyone is suffering from hair fall and dandruff, wasting money on fake products that give no results. I started thinking about the olden days and how our grandmothers had such strong, healthy hair.
          </p>
          <p>
            I asked my grandmother what the secret was. She told me that they used to prepare shampoo and oil using natural ingredients.
          </p>
          <p>
            Inspired by her words, I started this company — Homi Body Care Products.
          </p>
        </div>
      </div>
    </div>
  )
}
