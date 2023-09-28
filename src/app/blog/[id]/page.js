import getUserDetail from "@/app/lib/getUserDetail"
import getUsersPost from "@/app/lib/getUsersPost"
import UserDetail from "@/components/UsersDetail"

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
            <UserDetail user={user} usersPost={usersPost} />
        </main>
    )
}
