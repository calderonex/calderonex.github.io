"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const texts = [
  "Preparing site...",
  "Checking machinery...",
  "Ready to dig...",
];

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const charIndex = useRef(0);

  useEffect(() => {
      onLoaded();
  }, [onLoaded]);

  useEffect(() => {
    const currentText = texts[textIndex];
    let interval: NodeJS.Timeout;

    if (typing) {
      interval = setInterval(() => {
        const nextChar = currentText[charIndex.current];
        if (nextChar !== undefined) {
          setDisplayedText((prev) => prev + nextChar);
          charIndex.current++;
        } else {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1200);
        }
      }, 80);
    } else {
      interval = setInterval(() => {
        if (charIndex.current > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          charIndex.current--;
        } else {
          clearInterval(interval);
          setTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, 40);
    }

    return () => clearInterval(interval);
  }, [typing, textIndex]);

  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      opacity: [1, 0.6, 1],
      boxShadow: [
        "0 0 0px var(--color-primary)",
        "0 0 8px var(--color-primary)",
        "0 0 0px var(--color-primary)",
      ],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fef9f7] text-foreground">
      <div className="perspective-1000">
        <motion.div
          className="flex items-center justify-center mb-6"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src="/assets/images/logo/logo.svg"
            alt="Logo"
            width={280}
            height={280}
          />
        </motion.div>
      </div>





      <motion.div
        animate="pulse"
        transition={{ staggerChildren: 0.3 }}
        className="flex space-x-3 mb-4"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-primary"
            variants={dotVariants}
          />
        ))}
      </motion.div>

      <div className="text-base font-semibold text-foreground drop-shadow-md tracking-wide min-h-[1.5rem]">
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}
