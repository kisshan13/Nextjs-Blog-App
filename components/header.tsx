'use client'

import { useUser } from "@/store/User"
import Heading from "./ui/heading"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { HeaderI } from "./interfaces"

export default function Header({className, children, ...props}: HeaderI) {

    const user = useUser()

    return (
        <header className={cn(["flex justify-between", className ])}>
            <Heading variants="big/bold">
                Blogs
            </Heading>

            {
                user.isLoggedIn() ?
                    <Link href={'/logout'}>Logout</Link> :
                    <Link href={'/login'}>Login</Link>
            }
        </header>
    )

}