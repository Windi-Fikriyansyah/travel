"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Dictionary } from '@/dictionaries';

export default function Header({ dict, lang }: { dict: Dictionary['header'], lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const getLinkClass = (path: string) => {
    if (pathname === path || (path !== '/' && pathname.startsWith(path))) {
      return "text-primary font-bold border-b border-primary pb-1 font-label-md transition-colors";
    }
    return "text-on-surface-variant font-label-md hover:text-primary transition-colors";
  };

  const switchLanguage = (newLang: string) => {
    if (lang === newLang) return;
    document.cookie = `locale=${newLang}; path=/; max-age=31536000`; // 1 year expiry
    router.refresh();
  };

  return (
    <header className="bg-surface/90 backdrop-blur-md w-full sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin-desktop py-8 max-w-[1440px] mx-auto">
        <div className="flex gap-6 items-center">
          <nav className="hidden md:flex gap-8">
            <Link href="#" className={getLinkClass("/blog")}>{dict.blog}</Link>
            <Link href="/destinations" className={getLinkClass("/destinations")}>{dict.destinations}</Link>
            <Link href="#" className={getLinkClass("/services")}>{dict.services}</Link>
          </nav>
        </div>
        <Link href="/" className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed italic tracking-tight">{dict.logo}</Link>
        <div className="flex gap-6 items-center">
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/about" className={getLinkClass("/about")}>{dict.about}</Link>
            <Link href="#" className={getLinkClass("/faq")}>{dict.faq}</Link>
            <Link href="/contact" className={getLinkClass("/contact")}>{dict.contact}</Link>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 border-l border-outline-variant/30 pl-4">
              <button 
                onClick={() => switchLanguage('en')} 
                className={`font-label-md transition-colors ${lang === 'en' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
              >
                EN
              </button>
              <span className="text-on-surface-variant/50">|</span>
              <button 
                onClick={() => switchLanguage('id')} 
                className={`font-label-md transition-colors ${lang === 'id' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'}`}
              >
                ID
              </button>
            </div>
          </nav>
          <button className="md:hidden">
            <span className="material-symbols-outlined text-primary">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
