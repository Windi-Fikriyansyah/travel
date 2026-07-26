"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dictionary } from "@/dictionaries";

export default function DestinationsClient({ dict, lang }: { dict: Dictionary['destinations'], lang: string }) {
  const [activeFilter, setActiveFilter] = useState(dict.all);

  const filters = [dict.all, dict.beach, dict.culture, dict.adventure, dict.wellness];

  useEffect(() => {
    // Simple parallax effect for hero text
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.getElementById("hero-text");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        hero.style.opacity = (1 - scrolled / 500).toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getWaLink = (packageName: string) => {
    const text = lang === 'id'
      ? `Halo Travoscape, saya tertarik dengan paket ${packageName}`
      : `Hello Travoscape, I am interested in the ${packageName} package`;
    return `https://wa.me/6285110520266?text=${encodeURIComponent(text)}`;
  };

  return (
    <>
      {/* Hero Header */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div id="hero-text" className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
            {dict.heroTitle1} <br /><span className="italic text-primary">{dict.heroTitle2}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {dict.heroSubtitle}
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto mb-12 md:mb-16">
        <div className="flex flex-nowrap md:flex-wrap gap-4 items-center overflow-x-auto pb-4 md:pb-0 scrollbar-hide w-full">
          <span className="font-label-lg text-label-lg uppercase text-secondary whitespace-nowrap shrink-0">{dict.filterBy}</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap shrink-0 px-6 py-2 font-label-md tracking-wider transition-all ${activeFilter === filter
                ? "border border-primary text-primary hover:bg-primary/5"
                : "border border-outline-variant text-on-surface-variant hover:border-primary"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Bento-ish Grid for Packages */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter gap-y-16">
          {/* Card 1: Gili Islands Escape */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/gili-islands-escape" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="Destination"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/gili1.jpeg"
                />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-md text-primary tracking-widest uppercase text-xs">{dict.featured}</div>
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">Gili Islands Escape</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).giliEscapeDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("Gili Islands Escape")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>

          {/* Card 2: Secret Gili Expedition */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/secret-gili-expedition" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="Secret Gili Expedition"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/kedis1.jpeg"
                />
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">Secret Gili Expedition</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).secretGiliDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("Secret Gili Expedition")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>

          {/* Card 3: Pink Beach */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/pink-beach-sandbar-adventure" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="Pink Beach & Sandbar Adventure"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/pink1.jpeg"
                />
                <div className="absolute top-4 left-4 bg-surface-container-lowest/90 px-3 py-1 font-label-md text-primary tracking-widest uppercase text-xs">{dict.limited}</div>
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">Pink Beach & Sandbar Adventure</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).pinkBeachDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("Pink Beach & Sandbar Adventure")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>

          {/* Card 4: Waterfall Escape */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/hidden-waterfall-escape" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="Hidden Waterfall Escape"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/gile1.jpeg"
                />
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">Hidden Waterfall Escape</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).waterfallDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("Hidden Waterfall Escape")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>

          {/* Card 5: Explore Senaru & Sembalun */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/explore-senaru-sembalun" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="Explore Senaru & Sembalun"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/sembalun1.jpeg"
                />
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">Explore Senaru & Sembalun</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).senaruSembalunDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("Explore Senaru & Sembalun")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>

          {/* Card 6: Mandalika Heritage Tour */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/mandalika-heritage-tour" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="Mandalika Heritage Tour"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/mandalika1.jpeg"
                />
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">Mandalika Heritage Tour</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).mandalikaDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("Mandalika Heritage Tour")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>

          {/* Card 7: West Lombok Scenic Escape */}
          <div className="group flex flex-col">
            <div className="hover-lift flex-1 flex flex-col">
              <Link href="/destinations/west-lombok-scenic-escape" className="relative overflow-hidden mb-6 image-matting block">
                <Image
                  alt="West Lombok Scenic Escape"
                  width={600}
                  height={300}
                  className="w-full h-[300px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  src="/assets/sceni12.jpeg"
                />
              </Link>
              <h2 className="font-headline-sm text-headline-sm mb-2">West Lombok Scenic Escape</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-1">
                {(dict as any).westLombokDesc}
              </p>
              <div className="flex justify-end items-center pt-4 border-t border-outline-variant/30">
                <a target="_blank" rel="noopener noreferrer" href={getWaLink("West Lombok Scenic Escape")} className="font-label-lg text-label-lg text-secondary border-b border-secondary/30 hover:border-secondary transition-all">{dict.bookNow}</a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-display-lg text-display-lg mb-8">{dict.ctaTitle1} <span className="italic">{dict.ctaTitle2}</span></h2>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto mb-10 text-on-surface-variant">
            {dict.ctaSubtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="px-10 py-4 bg-primary text-on-primary font-label-lg uppercase tracking-widest hover:bg-primary-container transition-all text-center cursor-pointer"
            >
              {dict.planBtn}
            </button>
            <a href="https://wa.me/message/AZHNPNKH53WSJ1" target="_blank" rel="noopener noreferrer" className="px-10 py-4 border border-secondary text-secondary font-label-lg uppercase tracking-widest hover:bg-secondary/5 transition-all text-center">
              {dict.brochureBtn}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
