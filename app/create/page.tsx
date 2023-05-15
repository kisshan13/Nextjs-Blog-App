'use client'

import { useState } from "react"

import BlogContainer from "@/components/blog/blog-container"
import EditTitle from "@/components/blog/edit-title"

import Image from "next/image"
import EditTags from "@/components/blog/edit-tags"
import InputEditable from "@/components/ui/editable-input"

export default function Create() {

    const [blog, setBlog] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])

    return (
        <BlogContainer>
            <Image src="/" alt="Blog Image" width={400} height={225} className=" bg-black border-black" />
            <div className=" my-8">
                <EditTitle
                    title={blog}
                    onChange={(e) => setBlog(e.target.value)}
                    className=" text-3xl font-bold bg-white xl:w-auto w-52"
                    placeholder="Title Here" />
            </div>
            <div className=" my-3">
                <EditTags
                    placeholder="Tags seprate by (,)"
                    onChange={(e) => setTags(e.target.value.split(','))}
                    tags={tags} />
            </div>
        </BlogContainer>
    )
}