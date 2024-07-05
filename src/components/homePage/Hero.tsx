'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-gray-600 body-font bg-white w-full">
      <div className="w-full h-full py-20">
        <Image 
          alt="hero" 
          src="/hero-image.png"
          layout="responsive"
          width={1920}
          height={1080}
          quality={100}
          className="object-cover object-center w-full h-auto" 
        />
      </div>
    </section>
  );
}
