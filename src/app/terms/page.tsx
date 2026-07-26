import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Terms, Conditions & Privacy Policy | Travoscape Lombok",
  description: "Read the Terms & Conditions and Privacy Policy for travel bookings, reservations, and services with Travoscape Lombok.",
};

type TermItem = string | { main: string; subItems: string[] };

interface TermSection {
  title: string;
  intro?: string;
  items: TermItem[];
  outro?: string;
}

export default async function TermsPage() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  const isId = lang === 'id';

  const termsSections: TermSection[] = [
    {
      title: isId ? "1. Pemesanan & Pembayaran" : "1. Booking & Payment",
      items: isId ? [
        "Semua pemesanan bergantung pada ketersediaan.",
        "Pemesanan dikonfirmasi hanya setelah pembayaran atau deposit diterima (jika berlaku).",
        "Sisa pembayaran, jika ada, harus dilunasi sebelum tur dimulai."
      ] : [
        "All bookings are subject to availability.",
        "A booking is confirmed only after payment or deposit has been received (if applicable).",
        "The remaining balance, if any, must be settled before the tour begins."
      ]
    },
    {
      title: isId ? "2. Jadwal Tur" : "2. Tour Schedule",
      items: isId ? [
        "Rencana perjalanan tur (itinerary) disediakan sebagai panduan dan dapat disesuaikan karena kondisi cuaca, lalu lintas, acara lokal, kebutuhan operasional, atau keadaan yang tidak terduga.",
        "Travoscape akan selalu berusaha memberikan pengalaman yang setara dengan rencana perjalanan semula apabila penyesuaian diperlukan."
      ] : [
        "Tour itineraries are provided as a guide and may be adjusted due to weather conditions, traffic, local events, operational requirements, or unforeseen circumstances.",
        "Travoscape will always strive to provide an experience equivalent to the original itinerary whenever adjustments are necessary."
      ]
    },
    {
      title: isId ? "3. Penjemputan Hotel" : "3. Hotel Pickup",
      items: isId ? [
        "Layanan antar-jemput hotel gratis tersedia di dalam area layanan yang telah ditentukan.",
        "Biaya tambahan mungkin berlaku untuk penjemputan di luar area jangkauan standar."
      ] : [
        "Complimentary hotel pickup and drop-off are available within designated service areas.",
        "Additional charges may apply for pickups outside the standard coverage area."
      ]
    },
    {
      title: isId ? "4. Tanggung Jawab Tamu" : "4. Guest Responsibility",
      items: isId ? [
        "Tamu bertanggung jawab untuk memberikan informasi pemesanan yang akurat.",
        "Tamu harus bersiap di lokasi penjemputan yang telah disepakati tepat waktu.",
        "Tamu diharapkan mengikuti semua instruksi yang diberikan oleh pengemudi, pemandu wisata, dan kru kapal.",
        "Travoscape tidak bertanggung jawab atas barang pribadi yang hilang, dicuri, atau rusak."
      ] : [
        "Guests are responsible for providing accurate booking information.",
        "Guests must be ready at the agreed pickup location on time.",
        "Guests are expected to follow all instructions provided by the driver, guide, and boat crew.",
        "Travoscape is not responsible for lost, stolen, or damaged personal belongings."
      ]
    },
    {
      title: isId ? "5. Cuaca & Keadaan Kahar (Force Majeure)" : "5. Weather & Force Majeure",
      items: isId ? [
        "Tur dapat dimodifikasi, ditunda, atau dibatalkan karena cuaca buruk, bencana alam, peraturan pemerintah, pembatasan otoritas pelabuhan, atau keadaan lain di luar kendali Travoscape.",
        "Keselamatan tamu akan selalu menjadi prioritas utama kami."
      ] : [
        "Tours may be modified, postponed, or cancelled due to severe weather, natural disasters, government regulations, port authority restrictions, or other circumstances beyond Travoscape’s control.",
        "Guest safety will always be our highest priority."
      ]
    },
    {
      title: isId ? "6. Transportasi Kapal & Aktivitas Bahari" : "6. Boat Transportation & Marine Activities",
      items: isId ? [
        "Untuk tur yang melibatkan transportasi kapal, jelajah pulau, snorkeling, atau aktivitas bahari lainnya, keputusan keselamatan diambil oleh Kapten Kapal (Nahkoda).",
        "Kapten Kapal memiliki wewenang penuh untuk menentukan apakah kondisi laut aman untuk navigasi dan aktivitas air.",
        {
          main: "Jika cuaca atau kondisi laut dianggap tidak aman—termasuk gelombang tinggi, arus kuat, jarak pandang buruk, atau pasang surut yang tidak menguntungkan—Kapten Kapal dapat memutuskan untuk:",
          subItems: [
            "Melewati satu atau lebih destinasi atau pulau.",
            "Memodifikasi rute kapal.",
            "Menunda atau menjadwalkan ulang keberangkatan.",
            "Membatalkan snorkeling atau aktivitas air lainnya.",
            "Kembali ke pelabuhan lebih awal dari yang direncanakan."
          ]
        },
        "Semua keputusan yang dibuat oleh Kapten Kapal bersifat final dan harus dihormati oleh semua tamu.",
        "Tidak ada pengembalian dana yang akan diberikan untuk perubahan rencana perjalanan yang diakibatkan oleh kondisi cuaca atau pertimbangan keselamatan di luar kendali Travoscape.",
        "Sebisa mungkin, Travoscape akan menyediakan destinasi atau aktivitas alternatif yang wajar untuk memastikan pengalaman terbaik."
      ] : [
        "For tours involving boat transportation, island hopping, snorkeling, or other marine activities, safety decisions are made by the Boat Captain (Boat Master).",
        "The Boat Captain has full authority to determine whether sea conditions are safe for navigation and water activities.",
        {
          main: "If weather or sea conditions are considered unsafe—including high waves, strong currents, poor visibility, or unfavorable tides—the Boat Captain may decide to:",
          subItems: [
            "Skip one or more destinations or islands.",
            "Modify the boat route.",
            "Delay or reschedule the departure.",
            "Cancel snorkeling or other water activities.",
            "Return to the harbor earlier than planned."
          ]
        },
        "All decisions made by the Boat Captain are final and must be respected by all guests.",
        "No refunds will be provided for itinerary changes resulting from weather conditions or safety considerations beyond Travoscape’s control.",
        "Whenever possible, Travoscape will provide reasonable alternative destinations or activities to ensure the best possible experience."
      ]
    },
    {
      title: isId ? "7. Kesehatan & Keselamatan" : "7. Health & Safety",
      items: isId ? [
        "Tamu harus memastikan bahwa mereka dalam kondisi fisik yang bugar untuk berpartisipasi dalam aktivitas yang dipilih.",
        "Harap informasikan kepada Travoscape sebelumnya mengenai kondisi medis, alergi, kehamilan, keterbatasan mobilitas, atau kebutuhan khusus apa pun."
      ] : [
        "Guests should ensure they are physically fit to participate in the selected activities.",
        "Please inform Travoscape in advance of any medical conditions, allergies, pregnancy, mobility limitations, or special requirements."
      ]
    },
    {
      title: isId ? "8. Tanggung Jawab Hukum" : "8. Liability",
      items: isId ? [
        "Travoscape bekerja sama dengan penyedia transportasi lokal, operator kapal, dan mitra aktivitas yang terpercaya.",
        "Meskipun setiap upaya yang wajar dilakukan untuk memastikan keselamatan tamu, Travoscape tidak bertanggung jawab atas cedera, penyakit, keterlambatan, biaya tambahan, kehilangan, atau kerusakan yang diakibatkan oleh keadaan di luar kendali wajar kami."
      ] : [
        "Travoscape works with trusted local transportation providers, boat operators, and activity partners.",
        "While every reasonable effort is made to ensure guest safety, Travoscape shall not be held liable for injury, illness, delays, additional expenses, loss, or damage resulting from circumstances beyond our reasonable control."
      ]
    },
    {
      title: isId ? "9. Perubahan oleh Tamu" : "9. Changes by Guests",
      items: isId ? [
        "Permintaan untuk memodifikasi pemesanan yang telah dikonfirmasi bergantung pada ketersediaan.",
        "Biaya tambahan mungkin berlaku tergantung pada perubahan yang diminta."
      ] : [
        "Requests to modify confirmed bookings are subject to availability.",
        "Additional charges may apply depending on the requested changes."
      ]
    },
    {
      title: isId ? "10. Persetujuan" : "10. Acceptance",
      items: isId ? [
        "Dengan mengonfirmasi pemesanan kepada Travoscape, tamu mengakui bahwa mereka telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini."
      ] : [
        "By confirming a booking with Travoscape, guests acknowledge that they have read, understood, and agreed to these Terms & Conditions."
      ]
    }
  ];

  const privacySections: TermSection[] = [
    {
      title: isId ? "1. Informasi yang Kami Kumpulkan" : "1. Information We Collect",
      items: isId ? [
        "Nama lengkap",
        "Alamat email",
        "Nomor telepon atau nomor WhatsApp",
        "Kewarganegaraan",
        "Hotel atau lokasi penjemputan",
        "Preferensi tur dan detail pemesanan",
        "Informasi tambahan apa pun yang Anda berikan secara sukarela"
      ] : [
        "Full name",
        "Email address",
        "Phone number or WhatsApp number",
        "Nationality",
        "Hotel or pickup location",
        "Tour preferences and booking details",
        "Any additional information you voluntarily provide"
      ]
    },
    {
      title: isId ? "2. Bagaimana Kami Menggunakan Informasi Anda" : "2. How We Use Your Information",
      intro: isId ? "Kami menggunakan informasi Anda untuk:" : "We use your information to:",
      items: isId ? [
        "Memproses dan mengelola pemesanan Anda.",
        "Mengatur transportasi, pemandu wisata, dan aktivitas tur.",
        "Menghubungi Anda terkait reservasi Anda.",
        "Menanggapi pertanyaan dan permintaan dukungan pelanggan.",
        "Meningkatkan layanan dan pengalaman pelanggan kami.",
        "Mematuhi kewajiban hukum yang berlaku."
      ] : [
        "Process and manage your bookings.",
        "Arrange transportation, guides, and tour activities.",
        "Contact you regarding your reservation.",
        "Respond to inquiries and customer support requests.",
        "Improve our services and customer experience.",
        "Comply with applicable legal obligations."
      ]
    },
    {
      title: isId ? "3. Berbagi Informasi Anda" : "3. Sharing Your Information",
      items: isId ? [
        "Kami hanya membagikan informasi pribadi Anda apabila diperlukan untuk memberikan layanan kami.",
        "Informasi Anda dapat dibagikan kepada mitra lokal terpercaya seperti pengemudi, pemandu wisata, operator kapal, dan penyedia aktivitas semata-mata untuk tujuan mengoperasikan tur yang Anda pesan.",
        "Kami tidak menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran."
      ] : [
        "We only share your personal information when necessary to deliver our services.",
        "Your information may be shared with trusted local partners such as drivers, tour guides, boat operators, and activity providers solely for the purpose of operating your booked tour.",
        "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
      ]
    },
    {
      title: isId ? "4. Informasi Pembayaran" : "4. Payment Information",
      items: isId ? [
        "Travoscape tidak menyimpan informasi kartu pembayaran Anda.",
        "Pembayaran diproses melalui penyedia layanan pembayaran pihak ketiga yang aman apabila berlaku."
      ] : [
        "Travoscape does not store your payment card information.",
        "Payments are processed through secure third-party payment providers when applicable."
      ]
    },
    {
      title: isId ? "5. Keamanan Data" : "5. Data Security",
      items: isId ? [
        "Kami mengambil langkah-langkah administratif dan teknis yang wajar untuk melindungi informasi pribadi Anda dari akses yang tidak sah, penyalahgunaan, pengungkapan, atau kehilangan.",
        "Meskipun kami berusaha keras untuk melindungi data Anda, tidak ada metode transmisi internet atau penyimpanan elektronik yang sepenuhnya aman."
      ] : [
        "We take reasonable administrative and technical measures to protect your personal information from unauthorized access, misuse, disclosure, or loss.",
        "While we strive to protect your data, no method of internet transmission or electronic storage is completely secure."
      ]
    },
    {
      title: isId ? "6. Cookie" : "6. Cookies",
      items: isId ? [
        "Website kami dapat menggunakan cookie dan teknologi serupa untuk meningkatkan kinerja website, menganalisis perilaku pengunjung, dan meningkatkan pengalaman penelusuran Anda.",
        "Anda dapat menonaktifkan cookie melalui pengaturan browser Anda, meskipun beberapa fitur website mungkin tidak berfungsi sebagaimana mestinya."
      ] : [
        "Our website may use cookies and similar technologies to improve website performance, analyze visitor behavior, and enhance your browsing experience.",
        "You may disable cookies through your browser settings, although some website features may not function properly."
      ]
    },
    {
      title: isId ? "7. Layanan Pihak Ketiga" : "7. Third-Party Services",
      items: isId ? [
        "Website kami dapat memuat tautan ke website pihak ketiga atau platform pemesanan.",
        "Travoscape tidak bertanggung jawab atas praktik privasi atau konten dari website eksternal."
      ] : [
        "Our website may contain links to third-party websites or booking platforms.",
        "Travoscape is not responsible for the privacy practices or content of external websites."
      ]
    },
    {
      title: isId ? "8. Retensi Data" : "8. Data Retention",
      items: isId ? [
        "Kami menyimpan informasi pribadi hanya selama diperlukan untuk memenuhi layanan pemesanan, mematuhi kewajiban hukum, menyelesaikan sengketa, dan meningkatkan operasional kami.",
        "Ketika tidak lagi diperlukan, informasi Anda akan dihapus secara aman atau dianonimkan sejauh yang dapat dilakukan secara wajar."
      ] : [
        "We retain personal information only for as long as necessary to fulfill booking services, comply with legal obligations, resolve disputes, and improve our operations.",
        "When no longer required, your information will be securely deleted or anonymized where reasonably practicable."
      ]
    },
    {
      title: isId ? "9. Hak-Hak Anda" : "9. Your Rights",
      intro: isId ? "Anda memiliki hak untuk:" : "You have the right to:",
      items: isId ? [
        "Meminta akses ke informasi pribadi Anda.",
        "Meminta koreksi atas informasi yang tidak akurat.",
        "Meminta penghapusan informasi pribadi Anda sejauh diizinkan oleh hukum.",
        "Menarik persetujuan untuk komunikasi di masa mendatang."
      ] : [
        "Request access to your personal information.",
        "Request corrections to inaccurate information.",
        "Request deletion of your personal information where legally permitted.",
        "Withdraw consent for future communications."
      ],
      outro: isId
        ? "Untuk menggunakan hak-hak ini, silakan hubungi kami menggunakan detail di bawah ini."
        : "To exercise these rights, please contact us using the details below."
    },
    {
      title: isId ? "10. Perubahan Kebijakan Privasi Ini" : "10. Changes to This Privacy Policy",
      items: isId ? [
        "Travoscape dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.",
        "Perubahan apa pun akan berlaku efektif setelah dipublikasikan di website kami."
      ] : [
        "Travoscape may update this Privacy Policy from time to time.",
        "Any changes will become effective once published on our website."
      ]
    },
    {
      title: isId ? "11. Hubungi Kami" : "11. Contact Us",
      intro: isId
        ? "Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini atau bagaimana informasi pribadi Anda ditangani, silakan hubungi kami:\n\nTravoscape"
        : "If you have any questions regarding this Privacy Policy or how your personal information is handled, please contact us:\n\nTravoscape",
      items: [
        "Email: info@travoscape.com",
        "WhatsApp: +62 851 10520 266"
      ]
    }
  ];

  return (
    <>
      <ScrollReveal />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqrf7rv013Q5YzodMvV_P7PO9C1ouRRB37hW5-b0IlI_i7UjgLuOUGu3rgavrnHQkQveK8Wa8k1FwUyu_Y6hJ_OHrUvw_YKxOjueKd8upqssKuLcGWMyRe-cqBp0s8Eq8AcVyMkeT0myLVDWil3D1Ucv5AxtV72q2LqakxuJVb8IuARUjvNuEaQ8-b8Mzjo-FUCaLLZUAILzE8UdTyTJZhJx8jsIXpsTZJJf_pmQLF2IZ56VoNpuUNIw"
            alt="Lombok serene travel background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-surface/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <span className="font-label-lg text-label-lg text-primary-container bg-primary/20 px-4 py-1 rounded-full uppercase mb-6 inline-block backdrop-blur-md">
            {isId ? "Syarat, Ketentuan & Privasi" : "Terms & Privacy"}
          </span>
          <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6 leading-tight drop-shadow-md">
            {isId ? "Syarat & Ketentuan serta Kebijakan Privasi" : "Terms & Conditions & Privacy Policy"}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto drop-shadow-sm bg-surface/50 backdrop-blur-sm p-4 rounded-xl">
            {isId
              ? "Harap pelajari kebijakan pemesanan dan privasi data kami sebelum menjelajahi keindahan Lombok bersama Travoscape."
              : "Please review our booking policies and data privacy commitments before exploring Lombok with Travoscape."}
          </p>
        </div>
      </section>

      {/* Anchor Navigation */}
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mb-12 flex flex-wrap justify-center gap-4">
        <a
          href="#terms-section"
          className="px-8 py-3 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-lg uppercase tracking-wider rounded-full transition-all shadow-sm"
        >
          {isId ? "Syarat & Ketentuan" : "Terms & Conditions"}
        </a>
        <a
          href="#privacy-section"
          className="px-8 py-3 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-lg uppercase tracking-wider rounded-full transition-all shadow-sm"
        >
          {isId ? "Kebijakan Privasi" : "Privacy Policy"}
        </a>
      </div>

      {/* Terms Content Section */}
      <section id="terms-section" className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mb-16 scroll-mt-28">
        <div className="mb-8 border-l-4 border-primary pl-4">
          <h2 className="font-display-md text-3xl text-on-surface font-bold">
            {isId ? "Syarat & Ketentuan" : "Terms & Conditions"}
          </h2>
          <p className="font-body-md text-on-surface-variant mt-1">
            {isId
              ? "Dengan melakukan pemesanan tur bersama Travoscape, Anda menyetujui Syarat & Ketentuan berikut:"
              : "By booking a tour with Travoscape, you agree to the following Terms & Conditions:"}
          </p>
        </div>
        <div className="space-y-8">
          {termsSections.map((sec, idx) => (
            <div key={idx} className="bg-surface-container-lowest border border-secondary-container p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-headline-md text-2xl text-primary font-bold mb-4 flex items-center gap-3 border-b border-secondary-container/50 pb-3">
                {sec.title}
              </h3>
              {sec.intro && (
                <p className="font-body-md text-on-surface-variant mb-3 leading-relaxed whitespace-pre-line">
                  {sec.intro}
                </p>
              )}
              <ul className="space-y-3 font-body-md text-on-surface-variant leading-relaxed list-disc list-outside pl-5">
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <>
                        <span>{item.main}</span>
                        <ul className="list-disc list-outside pl-6 mt-2 space-y-2 text-on-surface-variant/90">
                          {item.subItems.map((sub, sIdx) => (
                            <li key={sIdx}>{sub}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {sec.outro && (
                <p className="font-body-md text-on-surface-variant mt-3 leading-relaxed whitespace-pre-line">
                  {sec.outro}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-section" className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap scroll-mt-28">
        <div className="mb-8 border-l-4 border-primary pl-4">
          <h2 className="font-display-md text-3xl text-on-surface font-bold">
            {isId ? "Kebijakan Privasi" : "Privacy Policy"}
          </h2>
          <p className="font-body-md text-on-surface-variant mt-1">
            {isId
              ? "Di Travoscape, kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda."
              : "At Travoscape, we value your privacy and are committed to protecting your personal information."}
          </p>
        </div>
        <div className="space-y-8">
          {privacySections.map((sec, idx) => (
            <div key={idx} className="bg-surface-container-lowest border border-secondary-container p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-headline-md text-2xl text-primary font-bold mb-4 flex items-center gap-3 border-b border-secondary-container/50 pb-3">
                {sec.title}
              </h3>
              {sec.intro && (
                <p className="font-body-md text-on-surface-variant mb-3 leading-relaxed whitespace-pre-line">
                  {sec.intro}
                </p>
              )}
              <ul className="space-y-3 font-body-md text-on-surface-variant leading-relaxed list-disc list-outside pl-5">
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx}>
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <>
                        <span>{item.main}</span>
                        <ul className="list-disc list-outside pl-6 mt-2 space-y-2 text-on-surface-variant/90">
                          {item.subItems.map((sub, sIdx) => (
                            <li key={sIdx}>{sub}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              {sec.outro && (
                <p className="font-body-md text-on-surface-variant mt-3 leading-relaxed whitespace-pre-line">
                  {sec.outro}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Need Clarification CTA */}
      <section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="font-headline-lg text-headline-lg text-primary italic">
            {isId ? "Punya Pertanyaan Seputar Kebijakan Kami?" : "Have Questions About Our Policies?"}
          </h3>
          <p className="font-body-lg text-on-surface-variant">
            {isId
              ? "Tim konsultan kami siap memberikan penjelasan detail agar Anda dapat merencanakan liburan tanpa keraguan."
              : "Our travel curators are happy to provide complete details so you can plan your journey with total peace of mind."}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary text-on-primary font-label-lg uppercase tracking-widest hover:bg-primary-container transition-all"
            >
              {dict.header.contact}
            </Link>
            <Link
              href="/faq"
              className="inline-block px-10 py-4 border border-secondary text-secondary font-label-lg uppercase tracking-widest hover:bg-secondary/5 transition-all"
            >
              {dict.header.faq}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
