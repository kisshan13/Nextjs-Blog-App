'use clinet'

import { BlogCreationStore } from "@/store/blog-creation";

export default function CreateLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <BlogCreationStore>
                {children}
            </BlogCreationStore>
        </>
    )
}