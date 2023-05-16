'use client'

import { useState } from "react";

import { cn } from "@/lib/utils";
import { DivI } from "./props/props";

import Input from "./ui/input";
import Button from "./ui/button";
import Text from "./ui/text";

export default function SearchBar({ className, ...props }: DivI) {

    const [search, setSearch] = useState('')

    return (
        <>
            <div className={cn([" flex gap-5 items-center", className])} {...props}>
                <Input
                    className=" border-[1px] w-80"
                    placeholder="Search Blogs"
                    onChange={(e) => setSearch(e.target.value)} />
                <Button variant="dark/regular">
                    <Text variant="large/normal">
                        Search
                    </Text>
                </Button>
            </div>
            <Text variant="small/light">Searching: {search} </Text>
        </>
    )
}