'use client'
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { useEffect } from "react"

export default function Clients() {
    const images = Array.from({ length: 19 }, (_, i) => `/Clients/Asset ${i + 1}.png`)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            watchDrag: false 
        },
        [
            AutoScroll({
                speed: 1, 
                stopOnInteraction: false,
                stopOnMouseEnter: false
            })
        ]
    )

    useEffect(() => {
        if (emblaApi) emblaApi.reInit()
    }, [emblaApi])

    return (
        <div className="px-0 md:px-17.5 z-0 gap-2 md:gap-30 flex-col bg-white text-white flex py-12 items-center w-full overflow-hidden relative select-none">
            <p className="text-[#B7956F] text-3xl md:text-6xl">Clients</p>
            <div className="hidden md:flex flex-row flex-wrap justify-between items-center gap-12 pb-40">
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Client ${index + 1}`}
                        width={200}
                        height={200}
                        className="object-contain"
                    />
                ))}
            </div>
            <div className="w-full mt-10 md:hidden relative">
                <div className="pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="flex-[0_0_33.333%] px-2 items-center justify-center flex"
                            >
                                <Image
                                    src={src}
                                    alt={`Client Slide ${index + 1}`}
                                    width={200}
                                    height={200}
                                    className="object-contain mx-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
