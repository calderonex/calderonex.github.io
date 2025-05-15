"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './Banner.css';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import ContactSection from './Description';

const images = [
 
  {
    src: '/assets/images/excavation/excavation3.jpg',
    title: 'Welcome to Our Company',
    description: 'We provide the best services in the industry.',//pensar en otra
  },

  {
    src: '/assets/images/paving/paving1.jpeg',
    title: 'Quality Services',
    description: 'We ensure the highest quality in all our services.', //pensar otro
  },
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  //we care
  return (
    <>
      <section id="banner" className="relative h-screen">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.navigationButtonNext',
            prevEl: '.navigationButtonPrev',
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="h-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-screen bg-cover bg-center bannerImage`}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 120px), url(${image.src})` }}
              >
                <motion.div
                  className="relative z-10 flex flex-col items-center justify-center h-full text-white p-24"
                  initial={{ y: 50, opacity: 0 }}
                  animate={activeIndex === index ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-black/30 px-3 py-4 shadow-2xl max-w-3xl text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-sm">
                      {image.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-white/90">{image.description}</p>
                  </div>

                  <Link href="#services"
                    className="transition-all duration-300 text-white hover:text-primary"
                  >
                    <button className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-secondary transition duration-300">
                      Check Our Services
                    </button>
                  </Link>
                </motion.div>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas de navegación */}
        <div className="navigationButton navigationButtonNext">
          <ChevronRightIcon className="w-8 h-8 text-white" />
        </div>
        <div className="navigationButton navigationButtonPrev">
          <ChevronLeftIcon className="w-8 h-8 text-white" />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
