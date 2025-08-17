'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function Slider2() {
    const images = ['/Slider2/Slide1.jpg', '/Slider2/Slide2.jpg', '/Slider2/Slide3.jpg', '/Slider2/Slide4.jpg', '/Slider2/Slide5.jpg', '/Slider2/Slide6.jpg', '/Slider2/Slide7.jpg', '/Slider2/Slide8.jpg']

    return (
        <Swiper
            slidesPerView={2}
            breakpoints={{
                768: { 
                    slidesPerView: 3,
                },
            }}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            allowTouchMove={true}
            speed={4000}
            loop={true}
            className=" w-full bg-[#DDDDDD]" dir='rtl'
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="h-[200px] lg:h-[300px] xl:h-[400px] 2xl:h-[600px] mx-10 mt-5 w-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${src})` }}
                    >
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
