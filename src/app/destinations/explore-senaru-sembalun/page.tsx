import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";
import ScrollReveal from "@/components/ScrollReveal";

export default async function SenaruSembalunPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);
  const { senaruSembalun: g, destinations } = dict as any;

  const waLinkText = lang === 'id' 
      ? `Halo Palmer Travel, saya tertarik dengan paket ${g.title}` 
      : `Hello Palmer Travel, I am interested in the ${g.title} package`;

  const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(waLinkText)}`;

  return (
    <>
      <ScrollReveal />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbVaJS6Lv9k0roM40wGDOui9XoIjYFqRy1Z_mAth6Zwy6TUiqi5op0pjl78EN-GSxVt2hCOxyRb8vkKhZ--dtwjM5kguDwDG9o3eP_xaCNg170A9xH1jo2Q0hOnbMo9j8xUXhut4yO1CYEToT06ez9LxnWQi75qMX7SbIqwaS-7g_hjAxAs_Ixz-OULsi5R_3SLBBylUaKuttWthofKWLvIGv5CjBEzV0_y5oAWppnI7_atNuSbFPe2g" 
          alt="Explore Senaru & Sembalun"
          fill
          className="object-cover brightness-75"
        />
        <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg md:text-[80px] leading-tight text-white mb-6">
            {g.title}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 lg:grid-cols-12 gap-content-gap">
        
        {/* Left Column (Overview, Highlights, Itinerary) */}
        <div className="lg:col-span-8 space-y-16">
          <section className="reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg mb-6">{g.overviewTitle}</h2>
            <p className="font-body-lg text-on-surface-variant mb-4 leading-relaxed">{g.overviewP1}</p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed">{g.overviewP2}</p>
          </section>

          <section className="reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg mb-6">{g.highlightsTitle}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {g.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 font-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg mb-8">{g.itineraryTitle}</h2>
            <div className="space-y-6 border-l-2 border-outline-variant/30 pl-6 ml-3 relative">
              {g.itinerary.map((item: any, idx: number) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface"></div>
                  <div className="bg-surface-container-lowest p-6 rounded border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-headline-sm text-headline-sm mb-3">{item.title}</h3>
                    <p className="font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Info Box) */}
        <aside className="lg:col-span-4 space-y-12">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant reveal-on-scroll sticky top-32">
            
            <div className="mb-10">
              <h3 className="font-headline-sm text-headline-sm mb-4 border-b border-secondary-container pb-2">{g.includedTitle}</h3>
              <ul className="space-y-4">
                {g.included.map((inc: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-on-surface-variant font-body-sm items-start">
                    <span className="material-symbols-outlined text-green-600 text-[20px] mt-0.5">done</span> 
                    <span className="flex-1">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="font-headline-sm text-headline-sm mb-4 border-b border-secondary-container pb-2">{g.notIncludedTitle}</h3>
              <ul className="space-y-4">
                {g.notIncluded.map((notInc: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-on-surface-variant font-body-sm items-start">
                    <span className="material-symbols-outlined text-red-500 text-[20px] mt-0.5">close</span> 
                    <span className="flex-1">{notInc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="font-headline-sm text-headline-sm mb-4 border-b border-secondary-container pb-2">{g.goodToKnowTitle}</h3>
              <ul className="space-y-3 list-disc pl-5">
                {g.goodToKnow.map((info: string, idx: number) => (
                  <li key={idx} className="text-on-surface-variant font-body-sm leading-relaxed">{info}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-headline-sm text-headline-sm mb-4 border-b border-secondary-container pb-2">{g.perfectForTitle}</h3>
              <div className="flex flex-wrap gap-2">
                {g.perfectFor.map((pf: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-secondary/10 text-secondary font-label-sm uppercase rounded-full tracking-wider">
                    {pf}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </aside>
      </main>

      {/* Atmospheric CTA */}
      <section className="bg-primary text-on-primary py-32 relative">
        <div className="container mx-auto px-margin-mobile text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg mb-6">{g.ctaTitle}</h2>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl mx-auto opacity-80 leading-relaxed">{g.ctaDesc}</p>
          <a target="_blank" rel="noopener noreferrer" href={waLink} className="px-12 py-4 border border-on-primary hover:bg-on-primary hover:text-primary transition-all duration-300 font-label-lg uppercase tracking-widest inline-block">
            {destinations.bookNow}
          </a>
        </div>
      </section>
    </>
  );
}
