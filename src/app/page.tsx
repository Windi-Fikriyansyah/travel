import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);
  const homeDict = dict.home;

  return (
    <>
      <ScrollReveal />
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[870px] overflow-hidden flex items-center justify-center px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full scale-105 transform transition-transform duration-[10s] hover:scale-100 relative">
            <Image src="/hero.jpg" alt="A breathtaking, cinematic wide shot of crystal-clear turquoise ocean waves crashing gently onto a pristine white sand beach." fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl fade-in">
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-white drop-shadow-lg leading-tight italic">
            {homeDict.heroLine1} <br className="hidden md:block"/> {homeDict.heroLine2}
          </h1>
        </div>
      </section>

      {/* Intro Section with Overlapping Images */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Stacked Images */}
          <div className="absolute left-0 top-0 w-2/3 z-10 aspect-[3/4] relative">
            <Image className="image-matting object-cover" fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsApYPZbrUK7xZn_-hulvBbELtWI8KoFj4leyhrCMf6y7tKBboVX3xZ7PTU4IU0v3H8qYspRrbHrrsxsFCdavoKH7LEeNm0PS9YQ8QjmaarsxAbsKCw_-ef_XnyjU_C-9qUy7OV-rSHXfAe452znniXDhTM6tngVBw5NK-1EGNZM4YNhUsj9XSPc4aiBjMh0SjzPVuek3OesL4BT-fScQZp3xXBDUHmSydMqc5N8G6lgn0-3cWdcNbhw" alt="Travel design 1" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="absolute right-0 bottom-0 w-2/3 z-20 aspect-[3/4] relative">
            <Image className="image-matting object-cover" fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnlXTrgPuyNA8erKhUrm0-JE8aZVhbo1TQYt1lwXagoo3BUbqjVkpR2pe6lu62s_HEXq5a3Zc0KRd8Bw2mlisHDSinyTjLeSghRijCOYJuQS45nRQNZ9LREoPZlo3XjOj52sZ97E_93b8wyYCb88rDofrt2IfihL3LYUqQhRcY1V4eQT6itl8g_8uq671Ad-xyHVA5i7TxE3yZpiv4zT88miPaptI7gDc9I2-4T3uPO_Ct3qCW4_GlyA" alt="Travel design 2" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          {/* Floating Badge/Logo Placeholder */}
          <div className="absolute -left-12 bottom-1/4 z-30 hidden xl:block">
            <div className="w-32 h-32 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-center p-4 rotate-[-15deg]">
              <span className="text-label-md font-label-md">VACATION DESIGNS CREATIVE</span>
            </div>
          </div>
        </div>
        <div className="space-y-8 lg:pl-16">
          <h2 className="font-headline-lg text-headline-lg text-primary italic leading-snug">
            {homeDict.introTitle}
          </h2>
          <div className="space-y-6 text-on-surface-variant font-body-md">
            <p>{homeDict.introP1}</p>
            <p>{homeDict.introP2}</p>
          </div>
          <div className="pt-4">
            <button className="px-8 py-3 border border-secondary text-primary font-label-lg hover:bg-primary/5 transition-all duration-300 uppercase tracking-widest">
              {homeDict.ctaButton}
            </button>
          </div>
          <p className="text-label-md font-label-md text-secondary uppercase tracking-[0.2em] pt-4">
            {homeDict.ctaSubtitle}
          </p>
        </div>
      </section>

      {/* Wide Beach Visual */}
      <section className="w-full px-0 md:px-margin-desktop py-base">
        <div className="w-full h-[300px] md:h-[600px] overflow-hidden relative">
          <Image src="/pulau.jpg" fill className="object-cover" alt="Pulau Island" sizes="100vw" />
        </div>
      </section>

      {/* Benefit Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
          <div className="space-y-8">
            <h3 className="font-headline-md text-headline-md text-on-surface italic">
              {homeDict.benefitTitle}<br/>{homeDict.benefitSubtitle}
            </h3>
            <div className="space-y-4 text-on-surface-variant">
              <p className="font-body-sm italic">{homeDict.benefitP1}</p>
              <p className="font-body-sm">{homeDict.benefitP2}</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-[300px] aspect-[1/2] relative">
              <Image className="image-matting object-cover" fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvSQaOzFZMx7VJhrm9kv0r578Ewn3fMO9KPO9LS6pADwqvvUu5ez0zDxGZqPitxtwHdaGbXL77a7yypfK94pYE7dxwQpQU8G2JV7k1HJZlcmDydNZVNce8VAcmfQ7yHcA7K6bctNCOI9k6s9RxQ4CP2RGTPKm3uYxERdxMxgbKRHh5i88bo07KPEPR4tKPh7Y7aJH1o3gap_It2F_EkVbdT3Kzxln4Vac2WL0_9CDNmpHIc0l073Zew" alt="Benefit Image" sizes="(max-width: 768px) 100vw, 300px" />
            </div>
          </div>
          <div className="space-y-12">
            <h3 className="font-headline-sm text-headline-sm text-on-surface italic">
              {homeDict.workTogetherTitle}
            </h3>
            <div className="space-y-8">
              <div className="group border-b border-secondary-container pb-6 transition-all">
                <div className="flex items-start gap-6">
                  <span className="font-headline-sm text-secondary italic">01.</span>
                  <div>
                    <h4 className="font-label-lg text-primary uppercase tracking-widest mb-2">{homeDict.benefit1Title}</h4>
                    <p className="text-body-sm text-on-surface-variant">{homeDict.benefit1Desc}</p>
                  </div>
                </div>
              </div>
              <div className="group border-b border-secondary-container pb-6 transition-all">
                <div className="flex items-start gap-6">
                  <span className="font-headline-sm text-secondary italic">02.</span>
                  <div>
                    <h4 className="font-label-lg text-primary uppercase tracking-widest mb-2">{homeDict.benefit2Title}</h4>
                    <p className="text-body-sm text-on-surface-variant">{homeDict.benefit2Desc}</p>
                  </div>
                </div>
              </div>
              <div className="group border-b border-secondary-container pb-6 transition-all">
                <div className="flex items-start gap-6">
                  <span className="font-headline-sm text-secondary italic">03.</span>
                  <div>
                    <h4 className="font-label-lg text-primary uppercase tracking-widest mb-2">{homeDict.benefit3Title}</h4>
                    <p className="text-body-sm text-on-surface-variant">{homeDict.benefit3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <button className="px-8 py-3 border border-secondary text-primary font-label-lg hover:bg-primary/5 transition-all duration-300 uppercase tracking-widest">
                {homeDict.exploreServicesBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
