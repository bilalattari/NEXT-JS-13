'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleOnClickBlog = () => {
    router.push(`/blog`)
  }

  return (
    <main className="flex min-h-screen flex-col   ">
      <Navbar />
      
      <h1>Hello Next Js</h1>

      
      <div className='flex'>

        <Link href={'/dog'}>
          <div className='p-2 px-4  m-3 bg-red-200 rounded-md'>
            Dog
          </div>
        </Link>
        <Link href={'/contact'}>
          <div className='p-2 px-4  m-3 bg-red-200 rounded-md'>
            Contact
          </div>
        </Link>
        <div onClick={() => router.push('/about')} className='p-2 px-4 cursor-pointer m-3 bg-red-200 rounded-md'>
          About
        </div>
        <div onClick={handleOnClickBlog} className='p-2 px-4 cursor-pointer  m-3 bg-red-200 rounded-md'>
          Users
        </div>
      </div>

    </main>
  )
}
