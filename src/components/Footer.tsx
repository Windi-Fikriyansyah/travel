import Link from 'next/link';
import Image from 'next/image';
import { Dictionary } from '@/dictionaries';

export default function Footer({ dict, lang }: { dict: Dictionary['footer'], lang: string }) {
  return (
    <footer className="bg-surface-container-low w-full">
      {/* Main Section */}
      <div className="w-full px-margin-mobile md:px-margin-desktop py-16 flex flex-col lg:flex-row justify-between items-start max-w-[1440px] mx-auto gap-12">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6 max-w-xl">
          <Link href="/" className="block">
            <Image src="/assets/logo.png" alt={dict.logo} width={300} height={100} className="h-16 md:h-20 w-auto object-contain" />
          </Link>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            {dict.description}
          </p>
          
          {/* Reviews Badges */}
          <div className="flex flex-col gap-3 mt-2">
            <div className="border border-outline/30 rounded-md p-3 w-fit flex items-center gap-2 md:gap-4 bg-surface/50">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs md:text-sm text-on-surface">EXCELLENT</span>
                <div className="flex text-[#F4B400] text-sm">★★★★★</div>
                <span className="text-xs md:text-sm text-on-surface-variant font-medium">431 {dict.reviews}</span>
              </div>
              <Image src="/assets/google.png" alt="Google" width={120} height={40} className="h-10 md:h-12 w-auto object-contain scale-[1.2] origin-left mr-2 md:mr-4" />
            </div>
            <div className="border border-outline/30 rounded-md p-3 w-fit flex items-center gap-4 md:gap-6 bg-surface/50">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs md:text-sm text-on-surface">EXCELLENT</span>
                <div className="flex text-[#34A853] text-sm tracking-widest">●●●●●</div>
                <span className="text-xs md:text-sm text-on-surface-variant font-medium">89 {dict.reviews}</span>
              </div>
              <span className="text-on-surface font-bold text-sm flex items-center gap-2">
                <Image src="/assets/tripadvisor.png" alt="Tripadvisor" width={24} height={24} className="h-6 w-auto object-contain" /> Tripadvisor
              </span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 max-w-md w-full lg:mt-0 mt-8">
          <div className="flex gap-3 mt-4">
            {/* Social Icons */}
            {[
              { id: 'tiktok', url: '#', path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.28-1.15 4.32-2.88 5.62-1.73 1.31-3.92 1.83-6.06 1.45-2.15-.39-3.99-1.64-5.11-3.41-1.12-1.76-1.39-3.99-.78-5.96.61-1.97 2.06-3.6 3.9-4.5 1.84-.9 4.02-1.07 6.01-.52v4.21c-.84-.28-1.75-.24-2.57.11-.82.36-1.48.97-1.9 1.75-.41.78-.54 1.71-.34 2.58.2 1.05.89 1.93 1.82 2.41.93.48 2.04.53 3.01.14 1.07-.44 1.84-1.35 2.12-2.48.16-.65.2-1.33.2-2.01V.02z' },
              { id: 'facebook', url: '#', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              { id: 'x', url: '#', path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' },
              { id: 'instagram', url: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { id: 'youtube', url: '#', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
            ].map(social => (
              <a key={social.id} href={social.url} className="w-9 h-9 bg-on-surface text-surface flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="w-full bg-surface-container-high border-t border-secondary-container">
        <div className="w-full px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-4">
          <p className="text-on-surface-variant text-sm font-medium">
            {dict.copyright}
          </p>
          <div className="flex items-center gap-3 text-sm text-on-surface-variant font-medium flex-wrap justify-center">
            <Link href="#" className="hover:text-primary transition-colors">{dict.aboutUs}</Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary transition-colors">{dict.termsAndConditions}</Link>
            <span>|</span>
            <Link href="#" className="hover:text-primary transition-colors">{dict.blog}</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-primary transition-colors">{dict.contact}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
