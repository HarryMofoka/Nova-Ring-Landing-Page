"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 glass rounded-full w-[90%] max-w-2xl"
    >
      <div className="text-xl tracking-widest font-light text-white">NOVA</div>
      <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-mono text-silver">
        <a href="#ecosystem" className="hover:text-white transition-colors duration-300">Ecosystem</a>
        <a href="#specs" className="hover:text-white transition-colors duration-300">Specs</a>
        <a href="#preorder" className="hover:text-white transition-colors duration-300">Reserve</a>
      </nav>
      <button className="md:hidden text-silver hover:text-white transition-colors">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </button>
    </header>
  );
}
