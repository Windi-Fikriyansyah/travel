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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfFohMZlRGKw-_PulTtrmG96Ftx9ti3V58QwHnr_TBfQy5D2S8WpIrHnTAKahhQ9GPgvju-UJfEpTQ76RLeBN6rdxeMarLc7xokcpcmdfNc5ZcXQ_KgdTScOzItD5h1fKgdAzHcu1ic9xbS8v0anLCU2Y8JmBcSZxGcv6gLWQ7Z8_UUNTOUAlbuP7RJpWwLNrzYyycI2MxLGKiEC1Q2gCPxgnaUmWCGZS9KUr-L2lr9IWNsJgGOZhqUA" 
                alt="A vintage-inspired photograph of a classic wooden boat gliding across a serene, crystal-clear teal lake in the Italian Alps."
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0 reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg mb-8">{aboutDict.storyTitle}</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              {aboutDict.storyP1}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 opacity-80">
              {aboutDict.storyP2}
            </p>
            <div className="border-l-2 border-secondary-container pl-6 py-2 italic font-headline-sm text-secondary">
              {aboutDict.storyQuote}
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">eco</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val1Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val1Desc}
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "100ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">auto_awesome</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val2Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val2Desc}
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface p-12 border border-outline-variant flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
              <span className="material-symbols-outlined text-primary text-4xl mb-6">hotel_class</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">{aboutDict.val3Title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {aboutDict.val3Desc}
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
            </ul>
            <div className="mt-12">
              <Link href="#" className="inline-block px-10 py-4 border border-secondary text-primary font-label-lg uppercase tracking-widest hover:bg-primary-fixed-dim transition-colors">
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6RQQzOcWRTfYlmQ5hr3Z5p4DnxhsOGzV-Qi4Ie50gCKjK7HmAE5cluMBiWIiInbV8t1PsDxnaazaF9No9J7nRxUqTCwqw8sAVoA9L8f8mE6Eh6PWgujGebFz6WwidWqPgdg1JXPrsCTqsLcg3kP77DxhhtwmvySP4M3UtNO0f_pOGgt89I7QWxs4t9VutJZswbmOG7_OnARWFrkVyzjzclXTB2Qu63w965DI94sf5pU9Z9ZyOnyGbgg" 
                alt="An elegant table setting for an outdoor dinner on a private terrace overlooking the Amalfi Coast at sunset."
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="image-matting absolute bottom-0 left-0 w-3/4 z-10 transform -rotate-3 border border-surface-container relative h-80">
              <Image 
                className="object-cover" 
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRX664o9wLtpOFxL0wGXumKJI-ujwSvwf5E0X3FJvzxX85a4wZ1pvlkniXFvnDJH4JKHEV9FyZNblf4SWQaG98l2ZH1PscBprjKsALeVh47NqYXvSWOrXEmH56ukHbe5iDbqZTi5nRv4_gpz75xTTO6WaQlFfmwHOuXP-cFqTi3pT3LuqKlY06Fbo-r1syhLYPeaLt31O611TglGmkafxwBCrp72n9_7p8mMZ7GrFnAd2aUTd3WC4_Dg" 
                alt="A minimalist architectural detail of a luxury riad in Marrakech, featuring intricate arched doorways and a serene turquoise pool reflecting the pale sandstone walls."
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric CTA */}
      <section className="bg-primary text-on-primary py-32 relative">
        <div className="container mx-auto px-margin-mobile text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg mb-6">{aboutDict.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80">{aboutDict.ctaSubtitle}</p>
          <button className="px-12 py-4 border border-on-primary hover:bg-on-primary hover:text-primary transition-all duration-300 font-label-lg uppercase tracking-widest">
            {aboutDict.ctaBtn}
          </button>
        </div>
      </section>
    </>
  );
}
