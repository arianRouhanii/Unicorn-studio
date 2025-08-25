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
        '/Start/Start6.jpg',
        '/Start/Start7.jpg'
    ]

    return (
        <Swiper
            id='Home'
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            className="h-[350px] md:h-[100vh] w-full"
            onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex ?? swiper.activeIndex
                setActiveIndex(realIndex)
            }}
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div
                        className=" h-full md:h-[100vh] w-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${src})` }}
                    >
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
