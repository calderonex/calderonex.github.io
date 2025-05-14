"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const typingPhrases = [
  "About your project.",
  "About the details.",
  "About doing it right.",
];

export default function WeCareSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const typingInterval = useRef<NodeJS.Timeout | null>(null);
  const deletingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isInView && !typing) {
      setTyping(true);
    }
  }, [isInView, typing]);

  useEffect(() => {
    if (!typing) return;

    const currentText = typingPhrases[textIndex];
    let char = 0;

    const type = () => {
      if (char <= currentText.length) {
        setDisplayedText(currentText.slice(0, char));
        char++;
      } else {
        clearInterval(typingInterval.current!);
        deletingTimeout.current = setTimeout(() => {
          deleteText();
        }, 1500);
      }
    };

    typingInterval.current = setInterval(type, 60);

    const deleteText = () => {
      let deleteChar = currentText.length;
      typingInterval.current = setInterval(() => {
        if (deleteChar >= 0) {
          setDisplayedText(currentText.slice(0, deleteChar));
          deleteChar--;
        } else {
          clearInterval(typingInterval.current!);
          setTextIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }, 40);
    };

    return () => {
      if (typingInterval.current) clearInterval(typingInterval.current);
      if (deletingTimeout.current) clearTimeout(deletingTimeout.current);
    };
  }, [typing, textIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[90vh] flex flex-col items-center justify-center text-white text-center px-4 overflow-hidden"
    >
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={isInView ? { scale: 1.1, opacity: 1 } : {}}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/images/excavator-sunset.jpg"
          alt="We care background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[14vw] leading-none font-extrabold mb-6 text-transparent bg-clip-text bg-cover bg-center drop-shadow-lg"
          style={{
            backgroundImage: `
      linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0)),
      url('/assets/images/excavator-sunset.jpg')
    `,
          }}
        >
          WE CARE!
        </motion.h1>


        <motion.p
          className="text-xl sm:text-2xl text-white font-light min-h-[2.5rem]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.p>
      </div>
    </section>
  );
}
