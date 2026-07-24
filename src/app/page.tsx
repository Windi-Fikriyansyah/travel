import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";
import FaqAccordion from "@/components/FaqAccordion";

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
            <Image src="/hero.jpg" alt="A breathtaking, cinematic wide shot of crystal-clear turquoise ocean waves crashing gently onto a pristine white sand beach." fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl fade-in flex flex-col items-center">
          <h1 className="font-headline-lg text-headline-lg md:text-display-lg text-white drop-shadow-lg leading-tight italic mb-6">
            Explore Lombok <br className="hidden md:block"/> Beyond the Ordinary
          </h1>
          <p className="text-white text-body-lg md:text-title-lg mb-8 max-w-2xl drop-shadow-md">
            Discover Lombok through authentic local experiences, private transportation, and carefully curated journeys designed for modern travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-white text-primary font-label-lg hover:bg-white/90 transition-all duration-300 uppercase tracking-widest">
              Explore Experiences
            </button>
            <button className="px-8 py-3 border border-white text-white font-label-lg hover:bg-white/10 transition-all duration-300 uppercase tracking-widest">
              Plan Your Trip
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <div className="absolute left-0 top-0 w-2/3 z-10 aspect-[3/4] relative">
            <Image className="image-matting object-cover" fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsApYPZbrUK7xZn_-hulvBbELtWI8KoFj4leyhrCMf6y7tKBboVX3xZ7PTU4IU0v3H8qYspRrbHrrsxsFCdavoKH7LEeNm0PS9YQ8QjmaarsxAbsKCw_-ef_XnyjU_C-9qUy7OV-rSHXfAe452znniXDhTM6tngVBw5NK-1EGNZM4YNhUsj9XSPc4aiBjMh0SjzPVuek3OesL4BT-fScQZp3xXBDUHmSydMqc5N8G6lgn0-3cWdcNbhw" alt="Travel design 1" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="absolute right-0 bottom-0 w-2/3 z-20 aspect-[3/4] relative">
            <Image className="image-matting object-cover" fill src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnlXTrgPuyNA8erKhUrm0-JE8aZVhbo1TQYt1lwXagoo3BUbqjVkpR2pe6lu62s_HEXq5a3Zc0KRd8Bw2mlisHDSinyTjLeSghRijCOYJuQS45nRQNZ9LREoPZlo3XjOj52sZ97E_93b8wyYCb88rDofrt2IfihL3LYUqQhRcY1V4eQT6itl8g_8uq671Ad-xyHVA5i7TxE3yZpiv4zT88miPaptI7gDc9I2-4T3uPO_Ct3qCW4_GlyA" alt="Travel design 2" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="absolute -left-12 bottom-1/4 z-30 hidden xl:block">
            <div className="w-32 h-32 rounded-full border border-primary/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-center p-4 rotate-[-15deg]">
              <span className="text-label-md font-label-md">TRAVOSCAPE LOMBOK</span>
            </div>
          </div>
        </div>
        <div className="space-y-8 lg:pl-16">
          <p className="text-label-md font-label-md text-secondary uppercase tracking-[0.2em]">About Travoscape</p>
          <h2 className="font-headline-lg text-headline-lg text-primary italic leading-snug">
            Travel Better. Explore Deeper.
          </h2>
          <div className="space-y-4 text-on-surface-variant font-body-md">
            <p>Travoscape is a travel arrangement service based in Lombok, dedicated to creating seamless and authentic travel experiences for international travelers.</p>
            <p>We specialize in private transportation, local guides, airport transfers, island adventures, and personalized itineraries—connecting visitors with the true beauty of Lombok beyond the typical tourist route.</p>
            <p>Whether you're looking for a relaxing beach escape, cultural discovery, or an unforgettable island-hopping adventure, we're here to make every journey effortless.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="font-title-lg text-primary mb-2">Our Mission</h4>
              <p className="text-body-sm text-on-surface-variant">To make exploring Lombok simple, authentic, and unforgettable by connecting travelers with trusted local experiences and personalized travel services.</p>
            </div>
            <div>
              <h4 className="font-title-lg text-primary mb-2">Our Vision</h4>
              <p className="text-body-sm text-on-surface-variant">To become the most trusted travel arrangement platform for Lombok, empowering local communities while delivering exceptional travel experiences for visitors from around the world.</p>
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
              Why Choose Travoscape?
            </h3>
            <div className="space-y-8">
              {[
                { title: "Authentic Local Experience", desc: "Work with trusted local drivers and guides who know Lombok beyond the tourist map." },
                { title: "Private & Flexible", desc: "Every journey is designed around your schedule—not ours." },
                { title: "Transparent Pricing", desc: "No hidden fees. No unnecessary upselling." },
                { title: "Reliable Support", desc: "From your arrival until departure, we're here whenever you need us." }
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
              Our Core Values
            </h3>
            <div className="space-y-8">
              {[
                { title: "Authenticity", desc: "We believe every journey should reflect the real beauty, culture, and people of Lombok." },
                { title: "Hospitality", desc: "Every traveler deserves genuine warmth, comfort, and professional service from the moment they arrive." },
                { title: "Reliability", desc: "We value punctuality, transparency, and consistency in every trip we organize." },
                { title: "Sustainability", desc: "We support local communities and promote responsible tourism that preserves Lombok's natural beauty for future generations." },
                { title: "Customer First", desc: "Every itinerary begins with your preferences. We don't just offer trips—we create experiences tailored to you." }
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
          <h3 className="font-headline-lg text-headline-lg text-primary italic">What We Offer</h3>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">Discover the perfect service for your Lombok adventure.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Airport Transfer", desc: "Comfortable airport pickup and drop-off with professional local drivers." },
            { title: "Private Driver", desc: "Explore Lombok at your own pace with a dedicated private driver." },
            { title: "Local Guide", desc: "Discover authentic culture and hidden destinations with experienced local guides." },
            { title: "Day Trips", desc: "Carefully designed one-day adventures covering Lombok's most iconic destinations." },
            { title: "Multi-Day Packages", desc: "Complete travel experiences designed for 2, 3, or more unforgettable days." },
            { title: "Personalized Itinerary", desc: "Tell us your interests, and we'll create a fully customized journey just for you." }
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
          <p className="text-label-md font-label-md text-secondary uppercase tracking-[0.2em]">Our Promise</p>
          <h3 className="font-headline-md text-headline-md text-primary italic leading-relaxed">
            "We don't believe every traveler should follow the same itinerary"
          </h3>
          <p className="text-body-lg text-on-surface-variant">
            That's why every Travoscape experience is designed with flexibility, local insight, and genuine hospitality—so you can discover Lombok in a way that feels personal, effortless, and unforgettable.
          </p>
          <div className="pt-16 border-t border-secondary-container mt-16">
            <p className="font-headline-sm text-headline-sm text-secondary italic">
              "Every destination has a story. Let Travoscape help you discover yours."
            </p>
          </div>
        </div>
      </section>
      {/* Packages Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        
        {/* Left Content */}
        <div className="lg:col-span-4 space-y-4">
          <h2 className="font-headline-md text-headline-md text-primary font-bold leading-snug">
            {dict.packages.title}
          </h2>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            {dict.packages.description}
          </p>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
        </div>
      </section>

      {/* FAQ Section */}
      <FaqAccordion title={(dict as any).packages.faqTitle} faqs={(dict as any).packages.faqs} />
    </>
  );
}
