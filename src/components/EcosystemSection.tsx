"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".ecosystem-panel");
      
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current?.offsetWidth,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Automotive Access",
      desc: "Approach and unlock. Your vehicle recognizes your unique biometric signature before you even touch the handle.",
      image: "/Assets/shot 1.png",
      tag: "01 // Proximity"
    },
    {
      title: "Biometric Sync",
      desc: "Continuous heart rate, temperature, and readiness monitoring, perfectly synced between ring and watch.",
      image: "/Assets/shot 2.png",
      tag: "02 // Harmony"
    },
    {
      title: "Zero-Gravity Payments",
      desc: "A flick of the wrist. Authenticated by your unique pulse. The world's most secure contactless transaction.",
      image: "/Assets/shot 3.png",
      tag: "03 // Commerce"
    }
  ];

  return (
    <section id="ecosystem" ref={sectionRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center">
      <div className="absolute top-12 md:top-32 left-6 md:left-24 z-10">
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] text-white">THE ECOSYSTEM</h2>
      </div>

      <div ref={containerRef} className="flex w-[300vw] h-full items-center">
        {features.map((feature, idx) => (
          <div key={idx} className="ecosystem-panel w-screen h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 gap-12 pt-24 md:pt-0">
            
            <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative glass-panel rounded-3xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <Image 
                src={feature.image} 
                alt={feature.title} 
                fill 
                className="object-cover object-center opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-[2s] ease-out"
              />
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-6">
              <div className="text-xs font-mono tracking-widest text-gold gold-glow uppercase">
                {feature.tag}
              </div>
              <h3 className="text-3xl md:text-4xl font-light tracking-wider text-white">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base font-mono text-silver leading-relaxed">
                {feature.desc}
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
