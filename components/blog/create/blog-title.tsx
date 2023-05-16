import { CaptureKeyBoardEvent } from "@/components/props/props";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import { useState } from "react";

export default function CreateTitle() {

    const [isTyping, setIsTyping] = useState(false)
    
    function handleKeyUp(e: CaptureKeyBoardEvent) {
        // Do some stuff here...
    }

    return (
        <div key='blog-title'>
            <Heading
                className="focus:outline-none"
                contentEditable
                onClick={() => setIsTyping(true)}
                onKeyUp={handleKeyUp}
            >
            </Heading>
            <Text variant="small/normal">
                Tap the tab to write something...
            </Text>
        </div>
    )
}