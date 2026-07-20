import Link from 'next/link';
import { Dictionary } from '@/dictionaries';

export default function Footer({ dict, lang }: { dict: Dictionary['footer'], lang: string }) {
  return (
    <footer className="bg-surface-container-low border-t border-secondary-container w-full">
      <div className="w-full px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row justify-between items-start max-w-[1440px] mx-auto gap-12">
        <div className="space-y-6 max-w-xs">
          <Link href="/" className="font-headline-sm text-headline-sm text-primary block">{dict.logo}</Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {dict.copyright}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8">
          <div className="flex flex-col gap-4">
            <p className="font-label-lg text-label-lg text-on-surface">{dict.explore}</p>
            <Link href="/destinations" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.destinations}</Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.experiences}</Link>
            <Link href="/about" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.ourStory}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-label-lg text-label-lg text-on-surface">{dict.support}</p>
            <Link href="#" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.privacyPolicy}</Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.termsOfService}</Link>
            <Link href="#" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.sustainability}</Link>
            <Link href="/contact" className="text-on-surface-variant hover:text-secondary font-label-md transition-all">{dict.contactUs}</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-end w-full md:w-auto">
          <p className="font-label-lg text-label-lg text-on-surface">{dict.newsletter}</p>
          <div className="flex border-b border-outline w-full max-w-sm focus-within:border-primary transition-colors">
            <input 
              className="bg-transparent border-none focus:outline-none focus:ring-0 font-body-sm py-2 w-full text-on-surface" 
              placeholder={dict.emailPlaceholder}
              type="email"
            />
            <button className="text-primary hover:text-primary-container p-2 transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
