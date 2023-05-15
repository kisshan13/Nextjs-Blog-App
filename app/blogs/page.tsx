import BlogHeader from "@/components/blog/blog-header"
import { BlogProps } from "@/components/interfaces"
import Heading from "@/components/ui/heading"
import Tag from "@/components/ui/tag"

export default function Blog() {

    // TODO: Implement a user preference layout.
    const structure: BlogProps = {
        headers: [
            { component: 'img', content: 'https://res.cloudinary.com/practicaldev/image/fetch/s--fRoiBBgn--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ktesxigi964m1u8lyqi0.png' },
            { component: 'title', content: 'This is a blog' },
            { component: 'text', content: "This is a text kind of stuff used as a dummy" },
            {
                component: 'tags', content: [
                    'tag-1', 'tag-2', 'tag-3'
                ]
            }
        ],
        
    }

    return (
        <div className="mt-10 w-4/5 mx-auto">
            <BlogHeader headers={structure.headers} />
        </div>
    )
}
