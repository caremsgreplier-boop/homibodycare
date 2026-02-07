'use client'

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export function BackButton() {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
        >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
        </button>
    )
}
