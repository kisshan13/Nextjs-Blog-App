import { useState } from "react";

import { Blog, BlogContent } from "@/components/props/props";

export function BlogCreationStore() {
    const [metadata, setMetaData] = useState<Blog>({} as Blog)
    const [content, setContent] = useState<BlogContent[]>([''] as BlogContent[])

    return (
        <>
        </>
    )
}