import { cn } from "@/lib/utils";
import { TextAreaI } from "../props/props";

export default function TextArea({ className, ...props }: TextAreaI) {
    return (
        <textarea
            className={cn([" w-full max-h-max rounded-md px-2 py-1", className])}
            {...props}>

        </textarea>
    )
}