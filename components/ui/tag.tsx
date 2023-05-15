import { cn } from "@/lib/utils"
import { TagProps } from "../interfaces"

import Text from "./text"

export default function Tag({ tag, className, ...props }: TagProps) {
    return (
        <div className={cn([" px-3 py-1 bg-black rounded-sm max-w-max", className])} {...props}>
            <Text variant="small/normal" className=" text-white"># {tag}</Text>
        </div>
    )
}