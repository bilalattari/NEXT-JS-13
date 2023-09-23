import Link from 'next/link'
import getUsers from '../lib/getUsers'
export default async function Blogs() {
    const users = await getUsers()
    return (
        <main className="flex min-h-screen flex-col  justify-between p-24">
            <h1 className='text-center font-bold text-3xl'>Users</h1>
            {
                users.map((data , ind) => {
                    return (
                        <Link key={ind} href={`/blog/${data.id}`}>
                            <div className='p-5 w-full m-4 bg-blue-100 rounded-md'>
                                <h1 className='font-bold'>{data.name}</h1>
                                <p>{data.email}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </main>
    )
}
