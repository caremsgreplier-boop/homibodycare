import Image from "next/image";
import { cn } from "@/lib/utils";

export const LogoIcon = ({ className }: { className?: string }) => (
    <div className={cn("relative", className)}>
        <Image
            src="/logo-paddi.webp"
            alt="Homi Body Care Logo"
            fill
            className="object-contain"
            priority
        />
    </div>
)