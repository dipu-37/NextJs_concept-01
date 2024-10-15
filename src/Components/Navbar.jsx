"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    console.log(pathname)
    const links = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Content",
            path: "/content"
        },
    ]
    const handler = () => {

        router.push('/about')
    }

    return (
        <div>
            <nav className=" bg-red-400 flex justify-between items-center px-6 py-4" >
                <h4>logo</h4>
                <ul className='flex gap-3 justify-between items-center'>

                    {
                        links?.map((link) => <Link className={`${pathname === link.path && "text-cyan-100"}`} key={Link.path} href={link.path}>{link.title}</Link>)
                    }

                </ul>
                <button className='text-blue-400' onClick={handler}>Login</button>
            </nav>
        </div>
    )
}
