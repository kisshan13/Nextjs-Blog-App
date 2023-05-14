import { StructureType } from "@/components/interfaces"
import Structure from "@/components/structure"
import Heading from "@/components/ui/heading"
import Tag from "@/components/ui/tag"

export default function Blog() {

    // TODO: Implement a user preference layout.
    const structure: StructureType[] = [
        "title", "tags", "intro", "image", "intro"
    ]

    return (
        <div>
            {
                structure.map(struct => (
                    <Structure structure={struct}/>
                ))
            }
        </div>
    )
}