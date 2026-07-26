import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";

export default async function About() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);
  const aboutDict = dict.about;

  return (
    <>
      <ScrollReveal />
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[716px] flex items-center overflow-hidden">
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <span className="font-label-lg text-label-lg text-primary mb-4 block uppercase tracking-widest">{aboutDict.legacyLabel}</span>
          <h1 className="font-display-lg text-display-lg md:text-[80px] leading-tight max-w-4xl mx-auto mb-8">
            {aboutDict.heroLine1} <span className="italic text-secondary">{aboutDict.heroLine2}</span>
          </h1>
        </div>
      </section>

      {/* Our Story Section: Asymmetric Layout */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 reveal-on-scroll">
            <div className="image-matting relative aspect-[3/4] w-full">
              <Image
                className="object-cover"
                fill
                src="/assets/about.jpeg"
                alt="The Story of Travoscape"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0 reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg mb-8">{aboutDict.storyTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              {aboutDict.storyP1}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-80">
              {aboutDict.storyP2}
            </p>
            <div className="border-l-2 border-secondary-container pl-6 py-2 italic font-headline-sm text-secondary mb-6">
              {aboutDict.storyP3}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 opacity-80">
              {aboutDict.storyP4}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 opacity-80">
              {aboutDict.storyP5}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values: Bento Grid */}
      <section className="bg-surface-container-low py-section-gap">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg mb-4">{aboutDict.valuesTitle}</h2>
            <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Value 1 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">explore</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val1Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val1Desc}
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "100ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val2Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val2Desc}
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">verified</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val3Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val3Desc}
              </p>
            </div>
            {/* Value 4 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "300ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val4Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val4Desc}
              </p>
            </div>
            {/* Value 5 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "400ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">favorite</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val5Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val5Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us: Image Stacking & Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-content-gap items-center">
          <div className="w-full md:w-1/2 reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg mb-8">{aboutDict.whyTitle}</h2>
            <ul className="space-y-10">
              <li className="flex gap-6">
                <span className="font-display-lg text-primary opacity-20 leading-none">01</span>
                <div>
                  <h4 className="font-label-lg text-label-lg uppercase mb-2">{aboutDict.why1Title}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {aboutDict.why1Desc}
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-display-lg text-primary opacity-20 leading-none">02</span>
                <div>
                  <h4 className="font-label-lg text-label-lg uppercase mb-2">{aboutDict.why2Title}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {aboutDict.why2Desc}
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-display-lg text-primary opacity-20 leading-none">03</span>
                <div>
                  <h4 className="font-label-lg text-label-lg uppercase mb-2">{aboutDict.why3Title}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {aboutDict.why3Desc}
                  </p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-display-lg text-primary opacity-20 leading-none">04</span>
                <div>
                  <h4 className="font-label-lg text-label-lg uppercase mb-2">{aboutDict.why4Title}</h4>
                  <p className="font-body-md text-on-surface-variant">
                    {aboutDict.why4Desc}
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-12">
              <Link href="/destinations" className="inline-block px-10 py-4 border border-secondary text-primary font-label-lg uppercase tracking-widest hover:bg-primary-fixed-dim transition-colors">
                {aboutDict.experienceBtn}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[500px] mt-16 md:mt-0 reveal-on-scroll">
            {/* Overlapping Images */}
            <div className="image-matting absolute top-0 right-0 w-4/5 z-20 transform rotate-2 relative h-80">
              <Image
                className="object-cover"
                fill
                src="/assets/chooseus1.jpeg"
                alt="Why Choose Us 1"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="image-matting absolute bottom-0 left-0 w-3/4 z-10 transform -rotate-3 border border-surface-container relative h-80">
              <Image
                className="object-cover"
                fill
                src="/assets/chooseus2.jpeg"
                alt="Why Choose Us 2"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric CTA */}
      {/* <section className="bg-primary text-on-primary py-32 relative">
        <div className="container mx-auto px-margin-mobile text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg mb-6">{aboutDict.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">{aboutDict.ctaSubtitle}</p>
          <Link href="/contact" className="inline-block px-12 py-4 border border-on-primary hover:bg-on-primary hover:text-primary transition-all duration-300 font-label-lg uppercase tracking-widest text-center">
            {aboutDict.ctaBtn}
          </Link>
        </div>
      </section> */}
    </>
  );
}
