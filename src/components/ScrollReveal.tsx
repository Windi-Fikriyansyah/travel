"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.tagName.toLowerCase() === 'section') {
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.add('active');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    // Observe .reveal-on-scroll elements
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });

    const hero = document.querySelector('section');
    if (hero) {
      hero.classList.remove('opacity-0');
      hero.classList.add('fade-in');
    }
  }, []);

  return null;
}
