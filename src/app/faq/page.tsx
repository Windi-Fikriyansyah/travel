import FaqAccordion from "@/components/FaqAccordion";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Frequent Q&A | Travoscape Lombok",
  description: "Frequently Asked Questions about our travel services and Lombok itineraries.",
};

export default async function FaqPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      <ScrollReveal />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrf7rv013Q5YzodMvV_P7PO9C1ouRRB37hW5-b0IlI_i7UjgLuOUGu3rgavrnHQkQveK8Wa8k1FwUyu_Y6hJ_OHrUvw_YKxOjueKd8upqssKuLcGWMyRe-cqBp0s8Eq8AcVyMkeT0myLVDWil3D1Ucv5AxtV72q2LqakxuJVb8IuARUjvNuEaQ8-b8Mzjo-FUCaLLZUAILzE8UdTyTJZhJx8jsIXpsTZJJf_pmQLF2IZ56VoNpuUNIw"
            alt="Beautiful sunset over Lombok ocean waters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-surface/50 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop">
          <span className="font-label-lg text-label-lg text-primary-container bg-primary/20 px-4 py-1 rounded-full uppercase mb-6 inline-block backdrop-blur-md">
            {dict.header.faq}
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6 leading-tight drop-shadow-md">
            {(dict as any).packages.faqTitle}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto drop-shadow-sm bg-surface/40 backdrop-blur-sm p-4 rounded-xl">
            {lang === 'id'
              ? 'Temukan jawaban lengkap atas pertanyaan yang sering diajukan mengenai layanan dan paket perjalanan kami di Lombok.'
              : 'Find comprehensive answers to frequently asked questions about our travel services and curated journeys in Lombok.'}
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <div className="mb-section-gap">
        <FaqAccordion title="" faqs={(dict as any).packages.faqs} />
      </div>

      {/* Atmospheric CTA */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="font-headline-lg text-headline-lg text-primary italic">
            {lang === 'id' ? 'Masih Punya Pertanyaan?' : 'Still Have Questions?'}
          </h3>
          <p className="font-body-lg text-on-surface-variant">
            {lang === 'id'
              ? 'Tim kami selalu siap membantu merencanakan perjalanan impian Anda di Lombok.'
              : 'Our team is always ready to help you plan your dream journey in Lombok.'}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary text-on-primary font-label-lg uppercase tracking-widest hover:bg-primary-container transition-all"
            >
              {dict.header.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
