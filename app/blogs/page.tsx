import BlogHeader from "@/components/blog/blog-header"
import { BlogProps } from "@/components/interfaces"
import Heading from "@/components/ui/heading"
import Tag from "@/components/ui/tag"

export default function Blog() {

    // TODO: Implement a user preference layout.
    const structure: BlogProps = {
        headers: [
            { component: 'title', content: 'This is a blog' },
            { component: 'tags', content: 'tag1' }
        ]
    }

    return (
        <div>
            <BlogHeader headers={structure.headers} />
        </div>
    )
}