import DestinationsClient from "./DestinationsClient";
import { getDictionary, Locale } from "@/dictionaries";
import { cookies } from "next/headers";

export default async function Destinations() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get('locale')?.value || 'en') as Locale;
  const dict = await getDictionary(lang);
  
  return <DestinationsClient dict={dict.destinations} lang={lang} />;
}
