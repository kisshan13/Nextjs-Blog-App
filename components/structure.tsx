import Heading from "@/components/ui/heading"
import Tag from "@/components/ui/tag"
import Image from "next/image"

import { StructureProps } from "./interfaces"
import Text from "./ui/text"

export default function Structure({ structure, className, ...props }: StructureProps) {
    if (structure === 'title') {
        return <Heading variants="big/bold">Heading Structure</Heading>
    }

    if (structure === 'image') {
        return <Image src="/" alt="image" width={160} height={90} className=" bg-black" />
    }

    if (structure === 'intro') {
        return <Text variant="large/normal">This is a intro</Text>
    }

    if (structure === 'tags') {
        return <Tag tag="hii"></Tag>
    }

    return (
        <></>
    )
}
