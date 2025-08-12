'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './start-swiper.css'

export default function Start() {
    const [activeIndex, setActiveIndex] = useState(0)

    const images = [
        '/Start/Start1.png',
        '/Start/Start2.jpg',
        '/Start/Start3.jpg',
        '/Start/Start4.jpg',
        '/Start/Start5.jpg',
        '/Start/Start6.jpg'
    ]

    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            className="h-[100vh] w-full"
            onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex ?? swiper.activeIndex
                setActiveIndex(realIndex)
            }}
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="h-[100vh] w-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${src})` }}
                    >
                        <div
                            className={`text-white text-4xl md:text-6xl absolute bottom-[15%] md:bottom-[20%] font-bold left-[10%] transform transition-all duration-1000 ease-out
                                ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
                            `}
                        >
                            <p className="tracking-tight">GRAPHIC</p>
                            <p className="tracking-widest">DESIGN</p>
                            <p className="tracking-wide">AGENCY</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
