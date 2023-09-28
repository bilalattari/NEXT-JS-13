
'use client'
import { Suspense, useContext, } from "react"
import UsersPost from "./UsersPosts"
import { AuthContext } from "@/context/AuthContext"
import { ThemeContext } from "@/context/ThemeContext"

export default function UserDetail({ user, usersPost }) {
    const userInfo = useContext(AuthContext)
    const { theme, setTheme } = useContext(ThemeContext)


    return (
        <div>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : "light")}>Change Theme</button>
            <h3 className="font-semibold">User Name : {user.name}</h3>
            <h3 className="font-semibold">User Email : {user.email}</h3>
            <Suspense fallback={<h2 className="text-center text-2xl">Loading.....</h2>}>
                <UsersPost promise={usersPost} />
            </Suspense>

        </div>
    )
}
