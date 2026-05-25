"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial text fade-in
      gsap.fromTo(
        ".hero-text-line",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 2, stagger: 0.3, ease: "power3.out", delay: 1 }
      );

      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 2.5 }
      );

      // Pulse animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });

      // Scroll interaction
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        pinSpacing: true,
        animation: gsap.to([textRef.current, scrollIndicatorRef.current], {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "none"
        }),
        scrub: 1,
      });
      
      // Video scale down effect on scroll
      gsap.to(videoRef.current, {
        scale: 0.8,
        opacity: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/Assets/Nova Ring video.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

      <div 
        ref={textRef} 
        className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center"
      >
        <div className="hero-text-line text-xs md:text-sm tracking-[0.5em] font-mono text-silver mb-6 uppercase">
          01 // The Universal Key
        </div>
        <h1 className="hero-text-line text-5xl md:text-8xl lg:text-9xl font-extralight tracking-widest text-white text-glow uppercase">
          NOVA
        </h1>
      </div>

      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/50">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
