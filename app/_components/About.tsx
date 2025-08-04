'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: '/Service/Vector.png',
    title: 'Logo Design, Branding & Graphic Design',
    desc: "Crafting an effective perception of your brand, and elevating it with an efficient visual language.",
    tags: ['Branding', 'Logo Design', 'Graphic Design', 'Company Profile Design']
  },
  {
    icon: '/Service/Vector2.png',
    title: 'Printable & Product Design',
    desc: "We're more than just order takers. We immerse ourselves in your product to help create something users love.",
    tags: ['Catalogue Design', 'Packages & Labels', 'Business Card Design & Paper Bags', 'Design Mug & T-shirt']
  },
  {
    icon: '/Service/Vector3.png',
    title: 'Digital Marketing',
    desc: "Elevating your brand's social presence to your potential customers aided with effective strategy & design.",
    tags: ['Social Media Management', 'Design Posts & Covers for Social Media']
  },
  {
    icon: '/Service/Vector4.png',
    title: 'Art, Illustration & NFT',
    desc: 'We are an international resource for the very best in commercial art and motion graphics for the advertising, design, publishing industries and NFT marketplaces.',
    tags: [
      'Book Illustration & Comic Art', 'Concept Art / Character Design', 'NFT Art & Making Collections',
      'Game Art', 'Original Digital & Traditional Artworks', 'Storyboarding', 'Matte Paint'
    ]
  }
];

export default function About() {
  return (
    <div className="px-3 md:px-8 py-6 md:pt-30 md:pb-60 flex flex-col bg-[#B7956F] bg-cover bg-no-repeat bg-[url(/AboutBack.jpg)] text-white items-center w-full overflow-hidden relative">
      <div className="z-20 flex flex-col items-center gap-12 md:gap-30 w-full">
        <p className="font-bold text-xl xl:text-3xl text-center w-full xl:w-[70%]">
          A brand is more than the way it looks. We go beyond the visual and bring together all the elements needed to create meaningful brand experiences.
        </p>

        {services.map(({ icon, title, desc, tags }, i) => (
          <ServiceBlock
            key={i}
            icon={icon}
            title={title}
            desc={desc}
            tags={tags}
            showLine={i < services.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceBlock({
  icon,
  title,
  desc,
  tags,
  showLine
}: {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  showLine: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only animate once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full text-xl md:text-3xl flex flex-col gap-6 md:gap-20 transform transition-all duration-1000 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-30">
        <div className="w-full lg:w-1/2 xl:w-2/7 rounded-full flex items-center gap-6 p-6 bg-[#9B7A51] shadow-2xl">
          <div className="w-20">
            <Image src={icon} alt={`${title} icon`} width={1000} height={1000} />
          </div>
          <p>{title}</p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-5/7">{desc}</div>
      </div>

      <div className="flex flex-wrap text-xs md:text-3xl gap-x-10 gap-y-5">
        {tags.map((tag, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="bg-white w-1 md:w-5 aspect-square rounded-full" />
            {tag}
          </div>
        ))}
      </div>

      {showLine && <div className="h-1 bg-[#DDDDDD] w-full" />}
    </div>
  );
}
