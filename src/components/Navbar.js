"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


export default function Navbar() {
    const pathname = usePathname()
    const [location, setLocation] = useState(pathname)
    useEffect(() => {
        setLocation(pathname)
    }, [pathname])
    return (
        <header className="header_section">
            <div className="header_bottom" >
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container" >
                        <a className="navbar-brand mt-2" href="/">
                            <span>VibrantEdge</span>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="max-md:collapse max-md:z-30 navbar-collapse ml-auto"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav">
                                <li className={`nav-item ${location == '/' ? 'active' : ''}`}>
                                    <Link className="nav-link" href="/"
                                    >Home <span className="sr-only"></span></
                                    Link>
                                </li>
                                <li className={`nav-item ${location == '/about' ? 'active' : ''}`}>
                                    <Link className="nav-link" href="/about">About</Link>
                                </li>
                                <li className={`nav-item ${location == '/services' ? 'active' : ''}`}>
                                    <Link className="nav-link" href="/services"> Services </Link>
                                </li>
                                <li className={`nav-item ${location == '/projects' ? 'active' : ''}`}>
                                    <Link className="nav-link" href="/projects"> Projects </Link>
                                </li>
                                <li className={`nav-item ${location == '/contact' ? 'active' : ''}`}>
                                    <Link className="nav-link" href="/contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}