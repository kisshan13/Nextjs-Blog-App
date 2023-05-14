import { cn } from "@/lib/utils";
import UserProfileSML from "./user-profile-sml";

import Text from "./ui/text";
import Heading from "./ui/heading";
import Image from "next/image";
import Link from "next/link";

import { BlogPostProps } from "./interfaces";
import Tag from "./ui/tag";


export default function BlogCard({ user, blog, className, ...props }: BlogPostProps) {
    return (
        <div className={cn([' my-11 block', className])}>
            <div className={cn([" flex flex-wrap-reverse justify-center md:justify-normal xl:justify-between gap-4  ", className])} {...props}>
                <div>
                    <UserProfileSML image={user.image} name={user.name} />
                    <div className="blog-info mt-4">
                        <Link href={blog.link}>
                            <Heading variants="big/normal" className=" max-w-3xl ">
                                {blog.title}
                            </Heading>
                        </Link>
                        <Text variant="large/normal" className=" max-w-2xl">
                            {blog.description}
                        </Text>

                        <div className="tags flex gap-2 mt-3 flex-wrap">
                            {
                                blog.tags.map(tag => (
                                    <Tag tag={tag} />
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Image src={blog.image} alt="Blog-Image" width={240} height={135} className=" bg-black" />
            </div>
        </div>
    )
}