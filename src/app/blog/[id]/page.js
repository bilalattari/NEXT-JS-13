import getUserDetail from "@/app/lib/getUserDetail"
import getUsersPost from "@/app/lib/getUsersPost"
import UsersPost from "@/components/UsersPosts"
import { Suspense } from "react"

export async function generateMetadata({ params }) {
    const userInfo = await getUserDetail(params.id)
    return {
        title: userInfo.name,
        description: userInfo.email
    }
}


export default async function BlogDetail({ params }) {
    const userInfo = getUserDetail(params.id)
    const usersPost = getUsersPost(params.id)
    const [user] = await Promise.all([userInfo])
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h3 className="font-semibold">User Name : {user.name}</h3>
                <h3 className="font-semibold">User Email : {user.email}</h3>
                <Suspense fallback={<h2 className="text-center text-2xl">Loading.....</h2>}>
                    <UsersPost promise={usersPost} />
                </Suspense>
              
            </div>
        </main>
    )
}
