import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://travel-example.com'),
  title: {
    default: "Palmer Travel | Curated Journeys",
    template: "%s | Palmer Travel"
  },
  description: "Curated Journeys",
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
