import CustomizeTripForm from "@/components/CustomizeTripForm";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function CustomizeTrip() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-section-gap overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/custom.jpeg"
            alt="Customize Your Trip in Lombok"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop">
          <span className="font-label-lg text-label-lg text-primary-container bg-primary/20 px-4 py-1 rounded-full uppercase mb-6 inline-block backdrop-blur-md">
            {dict.header.customizeTrip}
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6 leading-tight drop-shadow-md">
            {dict.customize.heroTitle1}<span className="italic text-primary drop-shadow-none">Lombok</span>{dict.customize.heroTitle2}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto drop-shadow-sm bg-surface/30 backdrop-blur-sm p-4 rounded-xl">
            {dict.customize.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <CustomizeTripForm dict={dict.customize} lang={lang} />
      </section>
    </>
  );
}
