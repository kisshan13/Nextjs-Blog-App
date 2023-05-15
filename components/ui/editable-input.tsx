import { cn } from "@/lib/utils";
import Input from "./input"
import { InputI } from "../interfaces";

export default function InputEditable({ className, ...props }: InputI) {
    return (
        <Input className={cn([" bg-white xl:w-auto w-52 border-opacity-25 border-2 active:caret-black", className])} {...props} />
    )
}