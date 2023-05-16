'use client'

import { useState } from "react"

import BlogContainer from "@/components/blog/container/container"

import Image from "next/image"

import AddTitle from "@/components/blog/create/title"
import AddTags from "@/components/blog/create/tags"
import AddText from "@/components/blog/create/text"
import AddComponent from "@/components/blog/create/component"
import Button from "@/components/ui/button"

export default function Create() {

    const [componentFlow, setComponentFlow] = useState([''])

    const [blog, setBlog] = useState<string>('')
    const [tags, setTags] = useState<string[]>([])
    const [description, setDescription] = useState('')

    return (
        <BlogContainer>
            <Image src="/" alt="Blog Image" width={400} height={225} className=" bg-black border-black" />
            <div className=" my-8">
                <AddTitle
                    title={blog}
                    onChange={(e) => setBlog(e.target.value)}
                    className=" text-3xl font-bold bg-white xl:w-auto w-52"
                    placeholder="Title Here" />
            </div>
            <div className=" my-3">
                <AddText
                    defaultValue={description}
                    onChange={(e) => setDescription((e.target as HTMLInputElement).value)}
                    text={description}
                    placeholder="Description goes here.." />
            </div>
            <div className=" my-3">
                <AddTags
                    placeholder="Tags seprate by (,)"
                    onChange={(e) => setTags(e.target.value.split(','))}
                    tags={tags} />
            </div>

            <div className=" w-4/5 h-1 bg-black opacity-25 mx-auto my-4">

            </div>

            <Button variant="dark/regular" onClick={() => setComponentFlow([...componentFlow, 'heading'])}>Add</Button>
            {
                componentFlow.map(component => {
                    switch (component) {
                        case 'heading':
                            return (<AddTitle title="" />)
                    }
                }
                )
            }
        </BlogContainer>
    )
}