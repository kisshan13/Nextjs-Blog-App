'use client'

import { useState } from "react"

import BlogContainer from "@/components/blog/blog-container"
import EditTitle from "@/components/blog/edit-title"

import Image from "next/image"

export default function Create() {

    const [blog, setBlog] = useState<string>('')

    return (
        <BlogContainer>
            <Image src="/" alt="Blog Image" width={400} height={225} className=" bg-black border-black" />
            <EditTitle
                title={blog}
                onChange={(e) => setBlog(e.target.value)}
                className=" text-3xl font-bold bg-white xl:w-auto w-52"
                placeholder="Title Here" />
        </BlogContainer>
    )
}