'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const buttons = ["Home", "What we do","Clients", "Our work", "Our Projects", "Contact us"]

    return (
        <>
            <div className="select-none z-50 px-3 md:px-17.5 xl:px-32.5 py-3 xl:py-12 text-2xl xl:bg-transparent bg-[#B7956F] text-white fixed xl:absolute w-full">
                <div className="flex xl:justify-between gap-5 xl:gap-0 items-center">
                    <button 
                        id="slidelist" 
                        className="flex xl:hidden h-8 aspect-square flex-col justify-between"
                        onClick={() => setMenuOpen(true)}
                    >
                        <div className="h-1 bg-[#FFEAD1] w-1/2"></div>
                        <div className="h-1 bg-[#FFEAD1] w-full"></div>
                        <div className="h-1 bg-[#FFEAD1] w-full"></div>
                    </button>
                    <Link href={''} className="w-40 md:w-50">
                        <Image src={'/logo.png'} alt="Logo" width={1000} height={1000} />
                    </Link>
                    {buttons.map((text) => (
                        <a
                            key={text}
                            href={`#${text}`}
                            className="hidden xl:flex border-b border-transparent hover:border-b-white transition duration-300"
                        >
                            {text}
                        </a>
                    ))}
                </div>
            </div>

            {menuOpen && (
                <div className="fixed top-0 left-0 w-64 h-full bg-[#B7956F] text-white z-50 flex flex-col p-6 gap-6 animate-slide-in">
                    <button 
                        onClick={() => setMenuOpen(false)} 
                        className="self-end text-2xl"
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    {buttons.map((text) => (
                        <a
                            key={text}
                            href={`#${text}`}
                            className="text-left border-b border-transparent hover:border-white transition duration-300"
                            onClick={() => setMenuOpen(false)} 
                        >
                            {text}
                        </a>
                    ))}
                </div>
            )}

            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/10 z-40"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <style jsx>{`
                html {
                    scroll-behavior: smooth; /* enables smooth scrolling */
                }

                .animate-slide-in {
                    animation: slideIn 0.3s forwards;
                }

                @keyframes slideIn {
                    from { transform: translateX(-100%); }
                    to { transform: translateX(0); }
                }
            `}</style>
        </>
    )
}
