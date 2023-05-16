// TODO IMPLEMENT A BLOG CREATION PAGE :

import CreateTitle from "@/components/blog/create/blog-title";
import Heading from "@/components/ui/heading";

export default function Create() {
    return (
        <>
            <div className="creat-blog">
                <div className="guides mt-8">
                    <Heading variants="medium/semibold" className=" underline underline-offset-2">
                        Create your blogs here!!
                    </Heading>
                </div>

                <div>
                    <CreateTitle />
                </div>
            </div>
        </>
    )
}