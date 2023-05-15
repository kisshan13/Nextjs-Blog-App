import { BlogProps } from "../interfaces";

import Image from "next/image";
import Heading from "../ui/heading";
import Tag from "../ui/tag";

export default function BlogHeader({ headers, className, ...props }: BlogProps) {
    return (
        <div>
            {
                headers.map((header) => {
                    switch (header.component) {
                        case 'title':
                            return <Heading variants="big/bold" className=" my-7">{header.content}</Heading>

                        case 'img':
                            return <Image src={header.content} alt="Blog-Image" />

                        case 'tags':
                            return <Tag tag={header.content}></Tag>
                    }
                })
            }
        </div>
    )
}

function StructTags() {
    
}