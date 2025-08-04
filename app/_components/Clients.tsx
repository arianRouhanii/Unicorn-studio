'use client'
import Image from "next/image"
export default function Clients() {
    return (
        <div className="px-3 md:px-17.5 z-0 gap-12 md:gap-30 flex-col bg-[#DDDDDD] text-white flex py-12 items-center w-full overflow-hidden relative">
            <p className="text-[#B7956F] text-3xl md:text-6xl">Clients</p>
            <div className="w-full">
                <Image src={'/clients.jpg'} alt="" width={1000} height={1000} className="w-full"></Image>
            </div>
        </div>
    )
}