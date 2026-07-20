"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Dictionary } from '@/dictionaries';

export default function Header({ dict, lang }: { dict: Dictionary['header'], lang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    <>
      <header className="bg-surface/90 backdrop-blur-md w-full sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 md:py-8 max-w-[1440px] mx-auto relative z-50 bg-surface/90 md:bg-transparent">
          <div className="flex gap-6 items-center flex-1 md:flex-none">
            <nav className="hidden md:flex gap-8">
              <Link href="#" className={getLinkClass("/blog")}>{dict.blog}</Link>
              <Link href="/destinations" className={getLinkClass("/destinations")}>{dict.destinations}</Link>
              <Link href="#" className={getLinkClass("/services")}>{dict.services}</Link>
            </nav>
          </div>
          <Link href="/" className="font-headline-sm text-headline-sm text-primary dark:text-primary-fixed italic tracking-tight">{dict.logo}</Link>
          <div className="flex gap-6 items-center flex-1 md:flex-none justify-end">
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
            <button className="md:hidden flex items-center justify-center p-2 -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              <span className="material-symbols-outlined text-primary text-3xl">{isMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay - Outside Header to avoid backdrop-blur containing block issue */}
      <div className={`fixed inset-0 bg-surface z-40 flex flex-col md:hidden overflow-y-auto px-margin-mobile pt-32 pb-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col gap-8 items-center justify-center min-h-[60vh]">
          <Link onClick={() => setIsMenuOpen(false)} href="/destinations" className="text-on-surface font-headline-sm text-2xl hover:text-primary transition-colors">{dict.destinations}</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/about" className="text-on-surface font-headline-sm text-2xl hover:text-primary transition-colors">{dict.about}</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="text-on-surface font-headline-sm text-2xl hover:text-primary transition-colors">{dict.contact}</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="#" className="text-on-surface font-headline-sm text-2xl hover:text-primary transition-colors">{dict.services}</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="#" className="text-on-surface font-headline-sm text-2xl hover:text-primary transition-colors">{dict.blog}</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="#" className="text-on-surface font-headline-sm text-2xl hover:text-primary transition-colors">{dict.faq}</Link>
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-outline-variant/30 w-full justify-center">
            <button 
              onClick={() => { switchLanguage('en'); setIsMenuOpen(false); }} 
              className={`font-label-lg transition-colors text-xl ${lang === 'en' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
            >
              English
            </button>
            <span className="text-on-surface-variant/50">|</span>
            <button 
              onClick={() => { switchLanguage('id'); setIsMenuOpen(false); }} 
              className={`font-label-lg transition-colors text-xl ${lang === 'id' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}
            >
              Indonesia
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
