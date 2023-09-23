import './blog.css'

export const metadata = {
    title: 'Blogs',
    description: 'Blogs by Faiz',
}

export default function Layout({ children }) {
    return (
        <html lang="en">
            <body >
                {children}</body>
        </html>
    )
}
