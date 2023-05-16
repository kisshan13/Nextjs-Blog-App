import { cn } from "@/lib/utils"
import { useState } from "react"

import { InputI } from "../../interfaces"
import Tag from "../../ui/tag"
import InputEditable from "../../ui/editable-input"
import Button from "../../ui/button"

interface EditTagsProps extends InputI {
    tags: string[]
}

export default function AddTags({ tags, className, ...props }: EditTagsProps) {

    const [edit, setEdit] = useState(true)

    return (
        <>
            <div>
                {
                    edit && <InputEditable {...props} />
                }
            </div>
            <div className={cn(["flex flex-wrap gap-2 my-3", className])}>
                {
                    tags.map(tag => (
                        <Tag tag={tag} className=" px-1 py-2 rounded-lg" />
                    ))
                }
                <Button variant="dark/regular" onClick={() => edit ? setEdit(false) : setEdit(true)}>Edit</Button>
            </div>
        </>
    )
}