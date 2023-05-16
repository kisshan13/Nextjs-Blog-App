'use client'

import { CaptureKeyBoardEvent } from "@/components/props/props";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import { useBlogCreation } from "@/store/blog-creation";
import { useEffect, useState } from "react";

export default function CreateTitle() {

    const [isTyping, setIsTyping] = useState(false)
    const { editMetaData, metadata } = useBlogCreation()

    function handleKeyUp(e: CaptureKeyBoardEvent) {
        console.log(metadata)
        if (e.code === 'Enter') {
            editMetaData({ field: 'title', value: metadata.title + ' ' })
        }

        editMetaData({ field: 'title', value: e.currentTarget.textContent as string })
    }

    useEffect(() => {
        metadata.title.length === 0 ? setIsTyping(false) : ''
    }, [metadata.title])

    return (
        <div key='blog-title'>
            <Heading
                className="focus:outline-none bg-black bg-opacity-10 p-2 rounded-md"
                contentEditable
                onClick={() => setIsTyping(true)}
                onKeyUp={handleKeyUp}
            >
                {
                    !isTyping && <span contentEditable="false" className=" pointer-events-none select-none opacity-30">Create a catching title for your audience...</span>
                }
            </Heading>
            <Text variant="small/normal">
                Tap the tab to write something...
            </Text>
        </div>
    )
}