'use client'

import { useState } from "react"

import BlogContainer from "@/components/blog/blog-container"

import Image from "next/image"

import EditTitle from "@/components/ui/editables/edit-title"
import EditTags from "@/components/ui/editables/edit-tags"
import EditText from "@/components/ui/editables/edit-text"

export default function Create() {

    const [blog, setBlog] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])
    const [description, setDescription] = useState('')

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
                <EditText
                    defaultValue={description}
                    onChange={(e) => setDescription((e.target as HTMLInputElement).value)}
                    text={description}
                    placeholder="Description goes here.." />
            </div>
            <div className=" my-3">
                <EditTags
                    placeholder="Tags seprate by (,)"
                    onChange={(e) => setTags(e.target.value.split(','))}
                    tags={tags} />
            </div>

            <div className=" w-4/5 h-1 bg-black opacity-25 mx-auto my-4">

            </div>
        </BlogContainer>
    )
}