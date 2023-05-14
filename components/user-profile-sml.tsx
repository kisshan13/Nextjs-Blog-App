import { cn } from "@/lib/utils"
import Image from "next/image"

import Text from "./ui/text"
import { UserProfileProps } from "./interfaces"

export default function UserProfileSML({image, name, className, ...props}: UserProfileProps) {
    return (
        <div className={cn(['flex gap-3 items-center', className])} {...props}>
            <Image
                src={image}
                alt="user-img"
                width={30} height={30}
                className="rounded-full bg-black" />
            <Text variant="small/light">@{name}</Text>
        </div>
    )
}