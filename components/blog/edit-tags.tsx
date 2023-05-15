// TODO: Implement a input field for tags.

import { DivI } from "../interfaces"
import Tag from "../ui/tag"

interface EditTagsProps extends DivI {
    tags: string[]
}

export default function EditTags({ tags, className, ...props }: EditTagsProps) {
    return (
        <div className="flex flex-wrap gap-6">
            {
                tags.map(tag => (
                    <Tag tag={tag} className={className} {...props} />
                ))
            }
        </div>
    )
}