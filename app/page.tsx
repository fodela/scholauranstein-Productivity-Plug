"use client";
import Accordion from "@/components/Accordion";
import Image, { StaticImageData } from "next/image";
import standmain from "@/public/images/product/standmain.png";
import bgtable from "@/public/images/product/bgtable.webp";
import wallmounthero from "@/public/images/product/wallmounthero.png";
import { useEffect, useState } from "react";
import ProductSection from "@/components/Home/ProductSection";
import TestimonialSection from "@/components/Home/TestimonialSection";

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
    image: bgtable,
  },
  {
    title: "Healthy Productivity",
    tagline:
      "Keeps your laptop healthy by improving it cooling and keeps you healthy by improving your posture",
    image: standmain,
  },
  {
    title: "Convenient Productivity",
    tagline:
      "Conveniently store and access your phone, cables, or remotes with ease and style.",
    image: wallmounthero,
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
    <section className="bg-secondary/30 py-16" key={currentIndex}>
      <div className="container grid sm:grid-cols-2 items-center   gap-10 overflow-hidden">
        <div className="self-end max-w-sm ">
          <h1 className="heroTitle">{detail.title}</h1>
          <h2 className="heroTagline">{detail.tagline}</h2>
        </div>
        <Image
          className="heroImage"
          src={detail.image}
          width={492.12}
          height={481.67}
          alt="4 image of people using the foldable bed table at different events"
        />
      </div>
    </section>
  );

  return (
    <main className="mt-28 scroll-mt-28">
      {hero}
      <ProductSection />
      <TestimonialSection />
      <section className="bg-[#21211D]   py-16 ">
        <div className="container grid sm:grid-cols-3 gap-5 sm:gap-20">
          <div className="col-span-2  mb-5">
            <h2 className="text-2xl max-w-lg py-4 text-white">
              You should not have to choose between comfort and productivity.
            </h2>
            <p className="">You can have it all</p>
          </div>
          <button className=" px-6 py-2 text-lg bg-white text-black rounded-lg justify-self-center self-end">
            Order now
          </button>
        </div>
      </section>

      <section className=" container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Any Questions? Look Here
          </h2>
          <p>Frequently asked questions</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </section>
    </main>
  );
}
