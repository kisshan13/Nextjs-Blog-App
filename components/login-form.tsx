'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

import { UserInfo } from "@/store/types"
import { useUser } from "@/store/User"

import Input from "./ui/input"
import Button from "./ui/button"
import Heading from "./ui/heading"
import Text from "./ui/text"

import { DivI } from "./interfaces"
import Loader from "./ui/loader"
import { cn } from "@/lib/utils"

type formStatus = 'typing' | 'submitting'

export default function LoginForm({ className }: DivI) {

    const [loginInfo, setLoginInfo] = useState<UserInfo>({} as UserInfo)
    const [status, setStatus] = useState<formStatus>('typing')

    const user = useUser()
    const router = useRouter()

    const validateFields = {
        name: loginInfo.name?.length >= 5,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(loginInfo.email),
        password: loginInfo.password?.length >= 6
    }
    async function handleFormSubmit(e: FormEvent) {
        e.preventDefault()
        setStatus('submitting')

        await dummyFetch()
        user.login(loginInfo)
        router.push('/')
    }

    return (
        <div className=" flex flex-col items-center ">
            <Heading variants="big/semibold">
                Login
            </Heading>
            <form
                onSubmit={handleFormSubmit}
                className="flex flex-col items-center gap-6  mt-5">
                <div className=" flex flex-col gap-4 items-baseline ">
                    <Input
                        placeholder="Name"
                        className=" w-72 "
                        onChange={(e) => setLoginInfo({ ...loginInfo, name: e.target.value })} />
                    <Input
                        placeholder="Email"
                        className=" w-72 "
                        onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })} />
                    <Input
                        placeholder="Password"
                        type="password"
                        className=" w-72 "
                        onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })} />
                </div>
                <Button
                    variant="dark/regular"
                    className=" px-4 py-1 relative"
                    disabled={!(validateFields.name && validateFields.email && validateFields.password) || status === 'submitting'}>
                    <Text
                        variant="large/normal"
                        className={status === 'submitting' ? 'opacity-0 pointer-events-none' : ' opacity-100'}>
                        Login
                    </Text>

                    <Loader variants="small/white"
                        className={cn(["absolute top-0 left-0 bottom-0 right-0 m-auto", status === 'submitting' ? 'block' : 'hidden' ])}
                    />
                </Button>
            </form>
        </div>
    )
}

function dummyFetch() {
    return new Promise((res, rej) => {
        setTimeout( () => {
            res(0)
        }, 3000)
    })
}