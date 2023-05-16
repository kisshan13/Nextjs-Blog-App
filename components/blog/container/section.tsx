import { SectionI } from "@/components/props/props";
import { cn } from "@/lib/utils";

export default function BlogSection({ className, children }: SectionI) {
    return (
        <section className={cn(['p-1', className])}>
            {children}
        </section>
    )
}