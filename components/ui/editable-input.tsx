import { cn } from "@/lib/utils";
import Input from "./input"
import { InputI } from "../interfaces";

export default function InputEditable({ className, ...props }: InputI) {
    return (
        <Input className={cn([" border-opacity-25 active:caret-black focus-visible:border-none focus-visible:border-0", className])} {...props} />
    )
}