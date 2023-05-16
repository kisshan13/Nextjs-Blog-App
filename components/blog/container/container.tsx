import { cn } from "@/lib/utils"
import { BlogContainerProps } from "../../props/props"

export default function BlogContainer({ className, children, ...props }: BlogContainerProps) {
    return (
        <div className={cn(["mt-10 xl:w-4/5 mx-auto", className])}>
            {children}
        </div>
    )
}