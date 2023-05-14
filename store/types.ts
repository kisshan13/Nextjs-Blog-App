type userid = string

export interface UserInfo {
    name: string,
    email: string,
    password: string,
    id: userid
}

export interface UserProvider {
    login: (info: UserInfo) => void,
    logout: () => void,
    isLoggedIn: () => boolean
}