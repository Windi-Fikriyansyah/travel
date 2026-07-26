import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://travoscape.id'),
  title: {
    default: "Travoscape | Curated Journeys & Exclusive Lombok Travel",
    template: "%s | Travoscape"
  },
  description: "Experience exclusive travel journeys, luxury private tours, and hidden island adventures across Lombok, the Gili Islands, and Indonesia with Travoscape.",
  keywords: [
    "travoscape",
    "travel lombok",
    "curated journeys indonesia",
    "gili islands private tour",
    "lombok travel agency",
    "mandalika heritage tour",
    "senaru sembalun rinjani",
    "pink beach lombok",
    "luxury travel indonesia",
    "custom trip lombok",
    "wisata lombok private"
  ],
  authors: [{ name: "Travoscape Team", url: "https://travoscape.id" }],
  creator: "Travoscape",
  publisher: "Travoscape",
  openGraph: {
    title: "Travoscape | Curated Journeys & Exclusive Lombok Travel",
    description: "Discover curated travel journeys, hidden waterfalls, and private island escapes across Lombok and Indonesia.",
    url: "https://travoscape.id",
    siteName: "Travoscape",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Travoscape - Curated Journeys in Lombok & Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travoscape | Curated Journeys & Exclusive Lombok Travel",
    description: "Discover curated travel journeys, hidden waterfalls, and private island escapes across Lombok and Indonesia.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      className="light"
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-on-background bg-background min-h-full flex flex-col">
        <Header dict={dict.header} lang={lang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict.footer} lang={lang} />
      </body>
    </html>
  );
}
