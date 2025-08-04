'use client';
import Image from 'next/image';

export default function Animation() {
  const posters = [
    '/Posters/example.png',
    ...Array.from({ length: 9 }, (_, i) => `/Posters/example${i + 2}.png`)
  ];

  return (
    <div className="bg-white">
      <div className="px-3 md:px-8 py-12 flex flex-col items-center w-full bg-cover bg-no-repeat bg-[url(/AnimationBg.png)] overflow-hidden">
        <p className="text-[#B7956F] text-3xl md:text-6xl mb-10">Movie & Animation</p>
        <div className="w-full flex flex-wrap justify-center gap-5">
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

        <button className="mt-12 justify-center md:mb-60 bg-[#9B7A51] group hover:bg-white hover:text-[#9B7A51] border border-transparent hover:border-[#9B7A51] transition duration-300 text-lg md:text-3xl rounded-full px-10 py-3 text-white flex items-center gap-5">
          View All Projects
          <svg width="30" height="15" viewBox="0 0 30 15" className="fill-white group-hover:fill-[#9B7A51] transition duration-300" fill="none">
            <path d="M29.1505 8.20711C29.5411 7.81658 29.5411 7.18342 29.1505 6.79289L22.7866 0.428932C22.3961 0.0384078 21.7629 0.0384078 21.3724 0.428932C20.9818 0.819457 20.9818 1.45262 21.3724 1.84315L27.0292 7.5L21.3724 13.1569C20.9818 13.5474 20.9818 14.1805 21.3724 14.5711C21.7629 14.9616 22.3961 14.9616 22.7866 14.5711L29.1505 8.20711ZM0.550781 7.5V8.5H28.4434V7.5V6.5L0.550781 6.5V7.5Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
