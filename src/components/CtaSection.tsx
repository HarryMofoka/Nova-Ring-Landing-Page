"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="preorder" ref={sectionRef} className="relative w-full h-[80vh] flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center gap-12 cta-content text-center">
        <h2 className="text-4xl md:text-7xl font-extralight tracking-[0.2em] text-white">
          ENTER THE ECOSYSTEM
        </h2>
        
        <button className="group relative px-12 py-5 rounded-full glass hover:border-white/40 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-white group-hover:text-glow transition-all duration-500">
            Reserve Your Nova
          </span>
        </button>
      </div>
    </section>
  );
}
