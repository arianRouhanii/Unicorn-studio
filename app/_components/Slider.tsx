'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Slider() {
    const images = ['/Slider/Slide1.jpg', '/Slider/Slide2.jpg', '/Slider/Slide3.jpg', '/Slider/Slide4.jpg']

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            allowTouchMove={false}
            speed={4000}
            loop={true}
            className=" w-full bg-[#DDDDDD]"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="h-[100px] md:h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[600px] mx-10 w-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${src})` }}
                    >
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
