"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ProductSection from "@/components/Home/ProductSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import CartIcon from "@/components/Cart/CartIcon";

export type HeroDetail = {
  title: string;
  tagline: string;
  image: StaticImageData;
};
const heroDetails = [
  {
    title: "Comfortable Productivity",
    tagline:
      "You shouldn't have to choose between productivity and comfort. You can have it all",
    image: "/images/product/bgtable.png",
  },
  {
    title: "Healthy Productivity",
    tagline:
      "Keeps your laptop healthy by improving it cooling and keeps you healthy by improving your posture",
    image: "/images/product/standmain.png",
  },
  {
    title: "Convenient Productivity",
    tagline:
      "Conveniently store and access your phone, cables, or remotes with ease and style.",
    image: "/images/product/wallmounthero.png",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interValId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroDetails.length);
    }, 6000);
    return () => clearInterval(interValId);
  }, []);

  const detail = heroDetails[currentIndex];
  const hero = (
    <section id="hero" className="scroll-mt-28" key={currentIndex}>
      <div className="relative w-fit mx-auto">
        <div className="hidden md:flex flex-col gap-2  mt-8 absolute -left-5 top-1/2 sm:top-1/3 -translate-y-1/2 z-10">
          {heroDetails.map((_, index) => (
            <button
              key={index}
              className={`flex gap-1 items-center bg-opacity-100 hover:text-primary transition-colors ease-linear ${
                currentIndex === index && "text-primary"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {index}
              <div
                key={index}
                className={`${
                  currentIndex === index
                    ? "animateHeroSwitch bg-primary"
                    : "bg-grey_main"
                } h-1 w-2  rounded-full  transition-all `}
              />
            </button>
          ))}
        </div>
        <div className="relative container grid  sm:grid-cols-2 items-center gap-10  max-w-screen-md overflow-hidden bg-secondary/30 py-16 lg:py-32 px-4 lg:px-32 ">
          <Image
            className="heroImage"
            src={detail.image}
            width={492.12}
            height={481.67}
            alt="4 image of people using the foldable bed table at different events"
          />
          <div className="self-end max-w-sm sm:order-first ">
            <h1 className="heroTitle">{detail.title}</h1>
            <h2 className="heroTagline">{detail.tagline}</h2>
          </div>

          <div className="flex gap-2  mt-8 md:hidden sm:col-span-2 justify-self-center ">
            {heroDetails.map((_, index) => (
              <button
                key={index}
                className={`${
                  currentIndex === index && "scaleCarousel"
                } h-3 w-3 rounded-full bg-primary transition-all`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <main className="mt-28 scroll-mt-28 relative">
      {hero}
      <ProductSection />
      <TestimonialSection />
      <CTA />
      <FAQ />
      <CartIcon />
    </main>
  );
}

const product = {};
