'use client'

import { useState, useContext, createContext } from 'react'

import { UserInfo, UserProvider } from './types'

const User = createContext<UserProvider>({} as UserProvider)

export function UserStore({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserInfo>({} as UserInfo)

    function login(info: UserInfo) {
        setUser(info)
    }

    function logout() {
        setUser({} as UserInfo)
    }

    function isLoggedIn() {
        return !!(user.email && user.name && user.password)
    }

    return <User.Provider value={{ login, logout, isLoggedIn }}>
        {children}
    </User.Provider>
}

export function useUser() {
    return useContext(User)
}