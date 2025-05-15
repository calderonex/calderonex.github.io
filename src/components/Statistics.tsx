"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useScroll } from "framer-motion";
import Image from "next/image";

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clientsCount = useMotionValue(0);
  const projectsCount = useMotionValue(0);

  const roundedClientsCount = useTransform(clientsCount, (value) => `${Math.round(value)}`);
  const roundedProjectsCount = useTransform(projectsCount, (value) => `${Math.round(value)}`);

  // Scroll local al componente
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Que el fondo se mueva bastante: cuanto más negativo, más se nota
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animate(clientsCount, 783, { duration: 2, ease: "circOut", delay: 0.5 });
      animate(projectsCount, 1188, { duration: 2, ease: "circOut", delay: 0.5 });
    }
  }, [isVisible]);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="relative overflow-hidden min-h-[90vh] pt-24"
    >
      {/* Fondo Parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[150%] z-0"
        style={{ y: yBackground }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/images/home-bg-middle-1.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority // opcional: carga prioritaria si es visible al cargar
          />
        </div>
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-end text-white pb-32 pt-12 px-10 md:px-32">
        <div className="w-full md:w-1/2 text-right">
          <h2 className="text-5xl font-bold mb-6">CALDERON SPECIALISTS</h2>
          <div className="flex flex-row justify-end items-end space-x-12">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-semibold flex items-center">
                <motion.span>{roundedClientsCount}</motion.span>
                <span className="text-orange-500 text-5xl font-bold">+</span>
              </div>
              <span className="text-lg">SATISFIED CLIENTS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-semibold flex items-center">
                <motion.span>{roundedProjectsCount}</motion.span>
                <span className="text-orange-500 text-5xl font-bold">+</span>
              </div>
              <span className="text-lg">PROJECTS COMPLETED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Curva blanca bien visible */}
      <svg
        className="absolute -bottom-0.5 left-0 w-full z-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,256 C480,320 960,160 1440,256 L1440,320 L0,320 Z"
        />
      </svg>
    </section>
  );
}
