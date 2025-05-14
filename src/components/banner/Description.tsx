"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="description" className="bg-black text-white py-16 px-8 flex flex-col justify-center items-start space-y-16">
      
      {/* Contact Us Button */}
      <motion.div
        className="self-start my-3 px-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="#contact">
          <button className="px-6 py-3  bg-primary text-white font-semibold rounded hover:bg-secondary transition duration-300">
            Contact Us
          </button>
        </Link>
      </motion.div>
      
      {/* Company Slogan */}
      <motion.h2
        className="text-5xl font-extrabold text-left w-full max-w-screen-xl mx-auto my-3 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        WELCOME TO CALDERON EXCAVATIONS INC
        <br />
        We focus on excavation, concrete and paving.
      </motion.h2>

      {/* Small Description */}
      <motion.p
        className="text-lg text-left opacity-0 w-full max-w-screen-xl mx-auto my-3 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Licensed (C12 - Earthwork and Paving) and (C8 - Concrete), bonded and insured.
      </motion.p>



    </section>
  );
}
