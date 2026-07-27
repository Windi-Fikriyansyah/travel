import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollReveal />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[870px] overflow-hidden flex items-center justify-center px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full scale-105 transform transition-transform duration-[10s] hover:scale-100 relative">
            <Image src="/hero.jpeg" alt="A breathtaking, cinematic wide shot of crystal-clear turquoise ocean waves crashing gently onto a pristine white sand beach." fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl fade-in flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-white drop-shadow-lg leading-tight italic mb-6">
            {dict.home.heroTitle1} <br className="hidden md:block" /> {dict.home.heroTitle2}
          </h1>
          <p className="text-white text-body-lg md:text-title-lg mb-8 max-w-2xl drop-shadow-md">
            {dict.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/destinations" className="px-8 py-3 bg-white text-primary font-label-lg hover:bg-white/90 transition-all duration-300 uppercase tracking-widest text-center">
              {dict.home.exploreBtn}
            </Link>
            <Link href="/customize-trip" className="px-8 py-3 border border-white text-white font-label-lg hover:bg-white/10 transition-all duration-300 uppercase tracking-widest text-center">
              {dict.home.planBtn}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
        <div className="space-y-8">
          <p className="text-label-md font-label-md text-secondary uppercase tracking-[0.2em]">{dict.home.aboutLabel}</p>
          <h2 className="font-headline-lg text-headline-lg text-primary italic leading-snug">
            {dict.home.aboutTitle}
          </h2>
          <div className="space-y-4 text-on-surface-variant font-body-md">
            <p>{dict.home.aboutP1}</p>
            <p>{dict.home.aboutP2}</p>
            <p>{dict.home.aboutP3}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="font-title-lg text-primary mb-2">{dict.home.missionTitle}</h4>
              <p className="text-body-sm text-on-surface-variant">{dict.home.missionDesc}</p>
            </div>
            <div>
              <h4 className="font-title-lg text-primary mb-2">{dict.home.visionTitle}</h4>
              <p className="text-body-sm text-on-surface-variant">{dict.home.visionDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wide Image Section */}
      <section className="w-full px-0 md:px-margin-desktop py-base">
        <div className="w-full h-[300px] md:h-[600px] overflow-hidden relative">
          <Image src="/pulau.jpg" fill className="object-cover" alt="Lombok Island" sizes="100vw" />
        </div>
      </section>

      {/* Why Choose & Core Values Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Why Choose Travoscape */}
          <div className="space-y-12">
            <h3 className="font-headline-md text-headline-md text-on-surface italic">
              {dict.home.whyTitle}
            </h3>
            <div className="space-y-8">
              {[
                { title: dict.home.why1Title, desc: dict.home.why1Desc },
                { title: dict.home.why2Title, desc: dict.home.why2Desc },
                { title: dict.home.why3Title, desc: dict.home.why3Desc },
                { title: dict.home.why4Title, desc: dict.home.why4Desc }
              ].map((item, idx) => (
                <div key={idx} className="group border-b border-secondary-container pb-6 transition-all">
                  <div className="flex items-start gap-6">
                    <span className="font-headline-sm text-secondary italic">0{idx + 1}.</span>
                    <div>
                      <h4 className="font-label-lg text-primary uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-body-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Core Values */}
          <div className="space-y-12">
            <h3 className="font-headline-md text-headline-md text-on-surface italic">
              {dict.home.valuesTitle}
            </h3>
            <div className="space-y-8">
              {[
                { title: dict.home.val1Title, desc: dict.home.val1Desc },
                { title: dict.home.val2Title, desc: dict.home.val2Desc },
                { title: dict.home.val3Title, desc: dict.home.val3Desc },
                { title: dict.home.val4Title, desc: dict.home.val4Desc },
                { title: dict.home.val5Title, desc: dict.home.val5Desc }
              ].map((item, idx) => (
                <div key={idx} className="group border-b border-secondary-container pb-6 transition-all">
                  <div className="flex items-start gap-6">
                    <span className="font-headline-sm text-secondary italic">0{idx + 1}.</span>
                    <div>
                      <h4 className="font-label-lg text-primary uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-body-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto bg-surface-container-lowest">
        <div className="text-center mb-16 space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-primary italic">{dict.home.offerTitle}</h3>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">{dict.home.offerSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: dict.home.offer1Title, desc: dict.home.offer1Desc },
            { title: dict.home.offer2Title, desc: dict.home.offer2Desc },
            { title: dict.home.offer3Title, desc: dict.home.offer3Desc },
            { title: dict.home.offer4Title, desc: dict.home.offer4Desc },
            { title: dict.home.offer5Title, desc: dict.home.offer5Desc },
            { title: dict.home.offer6Title, desc: dict.home.offer6Desc }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-secondary-container hover:bg-surface-container-low transition-colors duration-300 flex flex-col justify-between">
              <div>
                <h4 className="font-title-lg text-primary mb-4">{item.title}</h4>
                <p className="text-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise & Footer Quote */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-label-md font-label-md text-secondary uppercase tracking-[0.2em]">{dict.home.promiseLabel}</p>
          <h3 className="font-headline-md text-headline-md text-primary italic leading-relaxed">
            {dict.home.promiseQuote}
          </h3>
          <p className="text-body-lg text-on-surface-variant">
            {dict.home.promiseDesc}
          </p>
          <div className="pt-16 border-t border-secondary-container mt-16">
            <p className="font-headline-sm text-headline-sm text-secondary italic">
              {dict.home.footerQuote}
            </p>
          </div>
        </div>
      </section>
      {/* Packages Section */}
      {/* <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16"> */}

      {/* Left Content */}
      {/* <div className="lg:col-span-4 space-y-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold leading-snug">
            {dict.packages.title}
          </h2>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            {dict.packages.description}
          </p>
        </div> */}

      {/* Right Cards */}
      {/* <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { img: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&q=80&w=600&h=400", title: dict.packages.pkg1 },
            { img: "https://images.unsplash.com/photo-1540202404-b25828e08d66?auto=format&fit=crop&q=80&w=600&h=400", title: dict.packages.pkg2 },
            { img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=600&h=400", title: dict.packages.pkg3 },
            { img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600&h=400", title: dict.packages.pkg4 },
            { img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=600&h=400", title: dict.packages.pkg5 },
            { img: "https://images.unsplash.com/photo-1541604085440-77cb4841d6da?auto=format&fit=crop&q=80&w=600&h=400", title: dict.packages.pkg6 }
          ].map((pkg, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image src={pkg.img} alt={pkg.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
              </div>
              <h4 className="font-title-sm text-primary text-center font-bold px-2">{pkg.title}</h4>
            </div>
          ))}
        </div> */}
      {/* </section> */}

    </>
  );
}
