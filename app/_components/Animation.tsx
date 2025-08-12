'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
export default function Animation() {
  const posters = [
    '/Posters/example.png',
    ...Array.from({ length: 9 }, (_, i) => `/Posters/example${i + 2}.png`)
  ];

  return (
    <div className="bg-[#D9D9D9]">
      <div className="px-3 md:px-8 py-12 flex flex-col items-center w-full bg-cover bg-no-repeat bg-[url(/AnimationBg.png)] overflow-hidden">
        <p className="text-[#B7956F] text-3xl md:text-6xl mb-10">Movie & Animation</p>
        <div className="w-full hidden md:flex flex-wrap justify-center gap-5">
          {posters.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Poster ${i + 1}`}
              width={1000}
              height={1000}
              className="w-auto h-20 md:h-100 hover:opacity-70 transition duration-300"
            />
          ))}
        </div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={1}
          allowTouchMove={true}
          loop={true}
          className=" w-full flex md:hidden"
        >
          {posters.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                key={i}
                src={src}
                alt={`Poster ${i + 1}`}
                width={1000}
                height={1000}
                className="w-full h-100 flex md:hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="mt-12 justify-center mb-10 md:mb-60 bg-[#9B7A51] group hover:bg-white hover:text-[#9B7A51] border border-transparent hover:border-[#9B7A51] transition duration-300 text-lg md:text-3xl rounded-full px-10 py-3 text-white flex items-center gap-5">
          View All Projects
          <svg width="30" height="15" viewBox="0 0 30 15" className="fill-white group-hover:fill-[#9B7A51] transition duration-300" fill="none">
            <path d="M29.1505 8.20711C29.5411 7.81658 29.5411 7.18342 29.1505 6.79289L22.7866 0.428932C22.3961 0.0384078 21.7629 0.0384078 21.3724 0.428932C20.9818 0.819457 20.9818 1.45262 21.3724 1.84315L27.0292 7.5L21.3724 13.1569C20.9818 13.5474 20.9818 14.1805 21.3724 14.5711C21.7629 14.9616 22.3961 14.9616 22.7866 14.5711L29.1505 8.20711ZM0.550781 7.5V8.5H28.4434V7.5V6.5L0.550781 6.5V7.5Z" />
          </svg>
        </button>
        <div className='text-[#9B7A51] text-xl lg:text-4xl text-center gap-3 md:gap-8 flex flex-col mb-100'>
          <p>We're always on the lookout for creative talents and collaborations with new clients.</p>
          <p className='font-bold'>Are you one of those?</p>
          <p className='font-bold text-3xl md:text-6xl'>Don't be a stranger!</p>
        </div>
      </div>
      <div className='h-[100vh] w-full relative justify-center flex'>
        <div className='w-[95%] 2xl:w-[75%] absolute bottom-1/5 z-30 rounded-4xl md:rounded-[100px] bg-[#9B7A51]/50 opacity-80 py-8 px-8 xl:px-32 text-[#9B7A51] text-4xl text-center gap-16 flex flex-col shadow-2xl pb-40'>
          <p className='font-bold'>Let's Talk!</p>
          <form action="" className='text-[#1B1B1B] text-lg lg:text-3xl flex flex-col gap-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
              <Link href={'tel:+989120852730'} className='bg-[#9B7A51] rounded-full px-8 py-4 w-full lg:w-1/2 xl:w-1/3 shadow-xl items-center flex flex-row gap-3'>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                  <path d="M35.875 30.2324C35.875 30.7859 35.7518 31.3547 35.4901 31.9082C35.2282 32.4617 34.8895 32.9845 34.4429 33.4765C33.6885 34.3068 32.8571 34.9064 31.9176 35.2908C30.9938 35.6751 29.9929 35.875 28.9151 35.875C27.3444 35.875 25.666 35.506 23.8953 34.7526C22.1245 33.9993 20.3538 32.9845 18.5983 31.7084C16.8276 30.4169 15.1492 28.987 13.5478 27.4034C11.9618 25.8044 10.5297 24.1285 9.25168 22.3757C7.98904 20.623 6.97277 18.8703 6.23366 17.1329C5.49455 15.3801 5.125 13.7043 5.125 12.1053C5.125 11.0598 5.30977 10.0604 5.67934 9.13788C6.04888 8.2 6.63402 7.339 7.45011 6.57025C8.4356 5.60162 9.51345 5.125 10.6529 5.125C11.0841 5.125 11.5152 5.21725 11.9002 5.40175C12.3005 5.58625 12.6547 5.863 12.9318 6.26275L16.5042 11.2904C16.7814 11.6748 16.9815 12.0284 17.1201 12.3666C17.2588 12.6895 17.3357 13.0124 17.3357 13.3045C17.3357 13.6735 17.2279 14.0425 17.0123 14.3961C16.8122 14.7498 16.5196 15.1188 16.15 15.4878L14.9798 16.7024C14.8104 16.8715 14.7334 17.0714 14.7334 17.3174C14.7334 17.4404 14.7488 17.548 14.7796 17.671C14.8258 17.794 14.872 17.8863 14.9028 17.9785C15.18 18.4859 15.6573 19.147 16.3348 19.9465C17.0277 20.746 17.7668 21.5609 18.5675 22.3757C19.399 23.1906 20.1997 23.944 21.0159 24.6359C21.8166 25.3124 22.4786 25.7736 23.0022 26.0504C23.0792 26.0811 23.1715 26.1273 23.2793 26.1734C23.4025 26.2195 23.5258 26.2349 23.6643 26.2349C23.9261 26.2349 24.1263 26.1426 24.2956 25.9735L25.466 24.8204C25.8508 24.436 26.2204 24.1439 26.5745 23.9594C26.9286 23.7441 27.2829 23.6365 27.6678 23.6365C27.9605 23.6365 28.2683 23.698 28.6071 23.8364C28.9458 23.9748 29.3 24.1746 29.685 24.436L34.7817 28.0491C35.1821 28.3259 35.4592 28.6488 35.6287 29.0331C35.7826 29.4175 35.875 29.8019 35.875 30.2324Z" stroke="#1B1B1B" strokeWidth="1.5" strokeMiterlimit="10" /></svg>
                <p>+989120852730</p>
              </Link>
              <Link href={'mailto:info@uniqorn.studio.com'} className='bg-[#9B7A51] rounded-full px-8 py-4 w-full lg:w-1/2 xl:w-2/3 shadow-xl items-center flex flex-row gap-3'>
                <svg width="41" height="41" viewBox="0 0 41 41" fill="none">
                  <path d="M29.043 36.3034H11.9596C5.72422 36.3034 2.13672 32.7159 2.13672 26.4805V14.5221C2.13672 8.28672 5.72422 4.69922 11.9596 4.69922H29.043C35.2784 4.69922 38.8659 8.28672 38.8659 14.5221V26.4805C38.8659 32.7159 35.2784 36.3034 29.043 36.3034ZM11.9596 7.26172C7.0738 7.26172 4.69922 9.6363 4.69922 14.5221V26.4805C4.69922 31.3663 7.0738 33.7409 11.9596 33.7409H29.043C33.9288 33.7409 36.3034 31.3663 36.3034 26.4805V14.5221C36.3034 9.6363 33.9288 7.26172 29.043 7.26172H11.9596Z" fill="#1B1B1B" />
                  <path d="M20.4994 21.9845C19.0644 21.9845 17.6123 21.5403 16.5019 20.6349L11.1548 16.3641C10.6082 15.9199 10.5057 15.117 10.9498 14.5703C11.394 14.0237 12.1969 13.9212 12.7436 14.3653L18.0907 18.6362C19.389 19.6782 21.5927 19.6782 22.8911 18.6362L28.2382 14.3653C28.7848 13.9212 29.6048 14.0066 30.0319 14.5703C30.4761 15.117 30.3907 15.937 29.8269 16.3641L24.4798 20.6349C23.3865 21.5403 21.9344 21.9845 20.4994 21.9845Z" fill="#1B1B1B" />
                </svg>
                <p>info@uniqorn.studio.com</p>
              </Link>
            </div>
            <input type="text" className='bg-[#9B7A51] rounded-full px-8 py-4 w-full shadow-xl' placeholder='Name' required />
            <input type="tel" className='bg-[#9B7A51] rounded-full px-8 py-4 w-full shadow-xl' required
              pattern="[0-9]*"
              inputMode="numeric"
              onChange={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
              }}
              placeholder='Phone' />
            <input type="email" className='bg-[#9B7A51] rounded-full px-8 py-4 w-full shadow-xl' pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" placeholder='Email' required />
            <textarea className='bg-[#9B7A51] rounded-4xl px-8 py-4 w-full h-30 lg:h-60 shadow-xl resize-none' name="" id="" placeholder='Message' required></textarea>
            <input type="submit" value="Send" className='bg-[#9B7A51] text-[#EBEBEB] border-white border font-bold rounded-full px-8 py-4 w-full shadow-xl hover:bg-[#EBEBEB] hover:text-[#9B7A51] transition-all duration-500' />
          </form>
        </div>
      </div>
    </div>
  );
}
