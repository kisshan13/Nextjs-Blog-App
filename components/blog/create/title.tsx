import { useState } from "react";

import InputEditable from "../../ui/editable-input";
import Heading from "../../ui/heading";
import Button from "../../ui/button";

import { InputI } from "../../interfaces";

interface EditTitleProps extends InputI {
    title: string,
    className?: string
}

export default function AddTitle({ title, className, ...props }: EditTitleProps) {

    const [edit, setEdit] = useState(true)

    return (
        <div className=" flex gap-3 flex-wrap ">
            {
                edit ?
                    <InputEditable
                        value={title}
                        className={className}
                        onKeyDown={(e) => e.code === 'Enter' ? setEdit(false) : ''}
                        {...props} /> :
                    <Heading variants="big/bold">
                        {title}
                    </Heading>

            }
            <Button variant="dark/regular" onClick={() => edit ? setEdit(false) : setEdit(true)}>Edit</Button>
        </div>
    )
}