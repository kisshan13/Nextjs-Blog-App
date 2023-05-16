import { cn } from "@/lib/utils";
import { InputI } from "../props/props";

export default function Input({className, ...props}: InputI) {
    return (
        <input type="text" className={cn(["border-2 border-black px-2 py-1 rounded-md border-opacity-50", className])} {...props} />
    )
}