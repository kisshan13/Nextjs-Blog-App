import { useState } from "react";

import { TextAreaI } from "../../interfaces";
import TextArea from "../textarea";
import Text from "../text";
import Button from "../button";
import { cn } from "@/lib/utils";

interface EditTextProps extends TextAreaI {
    text: string
}

export default function EditText({ text, className, ...props }: EditTextProps) {

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
