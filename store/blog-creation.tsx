'use client'

import { createContext, useContext, useState } from "react";

import { Blog, BlogContent } from "@/components/props/props";

type Fields = 'title' | 'image' | 'tags' | 'description'

interface BlogCreationContextProps {
    metadata: Blog,
    content: BlogContent[]
    editMetaData: ({ field, value }: { field: Fields, value: string }) => void,
    editContent: (value: string) => void
}

const BlogCreationContext = createContext<BlogCreationContextProps>({} as BlogCreationContextProps)

export function BlogCreationStore({ children }: { children: React.ReactNode }) {
    const [metadata, setMetaData] = useState<Blog>({
        title: '',
        tags: [''],
        image: '',
        description: '',
        link: ''
    })
    const [content, setContent] = useState<BlogContent[]>([''] as BlogContent[])

    function editMetaData({ field, value }: { field: Fields, value: string }) {
        switch (field) {
            case 'title':
                setMetaData({ ...metadata, title: value })
                break

            case 'tags':
                let tags = value.split(',')
                setMetaData({ ...metadata, tags: tags })
                break

            case 'description':
                setMetaData({ ...metadata, description: value })
                break

            default:
                ''
        }
    }

    function editContent(value: string) {
        setContent([...content, value])
    }

    return (
        <>
            <BlogCreationContext.Provider value={{ editMetaData, editContent, metadata, content }}>
                {children}
            </BlogCreationContext.Provider>
        </>
    )
}

export function useBlogCreation() {
    return useContext(BlogCreationContext)
}