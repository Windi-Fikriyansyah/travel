"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ title, faqs }: { title: string, faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1024px] mx-auto fade-in">
      <h2 className="font-headline-lg text-headline-lg text-primary italic text-center mb-12">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-secondary-container rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors text-left"
            >
              <h3 className="font-headline-sm text-headline-sm text-on-surface pr-8">{faq.q}</h3>
              <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary' : 'text-on-surface-variant'}`}>
                expand_more
              </span>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 pt-0 text-body-lg text-on-surface-variant bg-surface-container-lowest">
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
