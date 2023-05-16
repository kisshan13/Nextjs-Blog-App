import { useState } from "react";

import { TextAreaI } from "../../interfaces";
import TextArea from "../../ui/textarea";
import Text from "../../ui/text";
import Button from "../../ui/button";
import { cn } from "@/lib/utils";

interface EditTextProps extends TextAreaI {
    text: string
}

export default function AddText({ text, className, ...props }: EditTextProps) {

    const [edit, setEdit] = useState(true)

    return (
        <div>
            {
                edit ?
                    <TextArea className={cn(['bg-white border-black border-2 border-opacity-30'])} {...props}/> :
                    <Text variant="large/normal">{text}</Text>
            }
            <Button variant="dark/regular" onClick={() => edit ? setEdit(false) : setEdit(true)}>
                Edit
            </Button>
        </div>
    )
}
