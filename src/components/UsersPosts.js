

export default async function UsersPost({ promise }) {
    const post = await promise
    return (
        <div>
            {
                post.map((data, index) => {
                    return (
                        <div key={index} className='p-5 w-full m-4 bg-blue-100 rounded-md'>
                            <h1 className='font-bold'>{data.title}</h1>
                            <p>{data.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
