"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function TechnicalSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal text
      gsap.fromTo(
        ".tech-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      // Parallax images
      gsap.utils.toArray(".parallax-img").forEach((img: any, i: number) => {
        gsap.fromTo(
          img,
          { y: 100, opacity: 0 },
          {
            y: -50,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top 90%",
              end: "bottom top",
              scrub: 1,
            }
          }
        );
      });
      
      // Hardware specs fade
      gsap.fromTo(
        ".spec-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".specs-container",
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="specs" ref={sectionRef} className="relative w-full bg-black py-32 px-6 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 md:mb-48 tech-text">
          <h2 className="text-sm tracking-[0.4em] font-mono text-silver uppercase mb-4">02 // Technical Precision</h2>
          <div className="text-4xl md:text-6xl font-light text-white tracking-widest max-w-3xl leading-tight">
            ENGINEERED WITH AEROSPACE-GRADE TITANIUM
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 relative">
          
          <div className="md:col-span-5 h-[60vh] relative rounded-2xl overflow-hidden glass-panel">
            <Image 
              src="/Assets/shot 3.png" 
              alt="Macro detail" 
              fill 
              className="object-cover object-center parallax-img opacity-80"
            />
          </div>

          <div className="md:col-span-1" />

          <div className="md:col-span-6 flex flex-col justify-center specs-container">
            <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden group hover:border-gold/30 transition-colors duration-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] group-hover:bg-gold/10 transition-colors duration-700 rounded-full" />
              
              <h3 className="text-2xl font-light tracking-widest text-white mb-10 tech-text">MACRO DETAILS</h3>
              
              <div className="space-y-8">
                {[
                  { label: "Material", value: "Grade 5 Titanium" },
                  { label: "Thickness", value: "2.4 mm" },
                  { label: "Sensors", value: "Optical HR, Temp, NFC" },
                  { label: "Water Resistance", value: "100m / 10 ATM" },
                ].map((spec, i) => (
                  <div key={i} className="spec-item flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-sm font-mono text-silver tracking-widest uppercase">{spec.label}</span>
                    <span className="text-base text-gold tracking-wider gold-glow">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
