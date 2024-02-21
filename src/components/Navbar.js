"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


export default function Navbar() {
    const pathname = usePathname()
    const [isClick, setIsClick] = useState(false);
    const [location, setLocation] = useState(pathname)
    useEffect(() => {
        setLocation(pathname)
    }, [pathname])
    return (
        <header className="header_section">
            <div className="header_bottom" >
                <div className="container-fluid">
                <nav className="navbar navbar-expand-lg py-3">
                <div className="container lg:px-5">
                    <a className="navbar-brand" href="/"><span className="fw-bolder text-white">VibrantEdge</span></a>
                    <button className="navbar-toggler bg-white" type="button" onClick={() => setIsClick(!isClick)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>


                    <div className={`${!isClick && 'max-md:collapse max-h-0 min-h-0'} navbar-collapse z-30 max-md:min-h-56 md:max-h-0 max-md:bg-black`} id="navbarSupportedContent1" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className={`${location=='/' ? 'text-yellow-400' : 'text-white'} nav-link text-xl`} href='/'>Home</Link></li>
                            <li className="nav-item"><Link className={`${location=='/about' ? 'text-yellow-400' : 'text-white'} nav-link text-xl`} href="/about">About</Link></li>
                            <li className="nav-item"><Link className={`${location=='/services' ? 'text-yellow-400' : 'text-white'} nav-link text-xl`} href='/services'>Services</Link></li>
                            <li className="nav-item"><Link className={`${location=='/projects' ? 'text-yellow-400' : 'text-white'} nav-link text-xl`} href='/projects'>Projects</Link></li>
                            <li className="nav-item"><Link className={`${location=='/contact' ? 'text-yellow-400' : 'text-white'} nav-link text-xl`} href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
                </div>
            </div>
        </header>
    )
}