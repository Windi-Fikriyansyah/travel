import Link from "next/link";
import Image from "next/image";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";
import ContactClientForm from "@/components/ContactClientForm";

export default async function Contact() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);
  const contactDict = dict.contact;

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 z-10">
            <span className="font-label-lg text-label-lg text-secondary uppercase mb-4 block">{contactDict.getInTouch}</span>
            <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-6 leading-tight">
              {contactDict.heroTitle1} <br /><span className="italic text-primary">{contactDict.heroTitle2}</span> {contactDict.heroTitle3}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8">
              {contactDict.heroSubtitle}
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="image-matting relative aspect-[4/5] w-full max-w-md mx-auto transform lg:rotate-3 transition-transform hover:rotate-0 duration-700">
              <Image
                className="object-cover"
                fill
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrf7rv013Q5YzodMvV_P7PO9C1ouRRB37hW5-b0IlI_i7UjgLuOUGu3rgavrnHQkQveK8Wa8k1FwUyu_Y6hJ_OHrUvw_YKxOjueKd8upqssKuLcGWMyRe-cqBp0s8Eq8AcVyMkeT0myLVDWil3D1Ucv5AxtV72q2LqakxuJVb8IuARUjvNuEaQ8-b8Mzjo-FUCaLLZUAILzE8UdTyTJZhJx8jsIXpsTZJJf_pmQLF2IZ56VoNpuUNIw"
                alt="A serene, high-end travel scene featuring a minimalist boutique hotel balcony overlooking a crystal-clear turquoise ocean at dawn."
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid Content */}
      <section className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-content-gap">
          {/* Left: Contact Form */}
          <ContactClientForm contactDict={contactDict} />

          {/* Right: Information */}
          <div className="lg:pl-margin-desktop space-y-section-gap">
            {/* Office Details */}
            <div>
              <h3 className="font-headline-sm text-headline-sm mb-8 border-b border-secondary-container pb-4">{contactDict.studioTitle}</h3>
              <div className="space-y-8">

                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-primary mt-1">call</span>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface uppercase mb-1">{contactDict.callUs}</p>
                    <p className="font-body-md text-on-surface-variant">+6285110520266</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-primary mt-1">mail</span>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface uppercase mb-1">{contactDict.emailUs}</p>
                    <p className="font-body-md text-on-surface-variant">travoscape@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-headline-sm text-headline-sm mb-8 border-b border-secondary-container pb-4">{contactDict.followTitle}</h3>
              <div className="flex gap-8 flex-wrap">
                <a href="https://www.instagram.com/travoscape?igsh=MWlpbnoxeHZqZW53Mw==" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="font-label-lg text-label-lg uppercase">Instagram</span>
                </a>
                <a href="https://wa.me/message/AZHNPNKH53WSJ1" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="font-label-lg text-label-lg uppercase">WhatsApp</span>
                </a>
                <a href="https://www.tiktok.com/@travoscape?_r=1&_t=ZS-98KeJskekeC" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="font-label-lg text-label-lg uppercase">TikTok</span>
                </a>
                <a href="https://www.facebook.com/share/18EusN1C8B/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="font-label-lg text-label-lg uppercase">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}

    </>
  );
}
