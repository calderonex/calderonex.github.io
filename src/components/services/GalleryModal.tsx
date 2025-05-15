"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { prefix } from '@/utils/utils';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

export default function GalleryModal({ isOpen, onClose, images }: GalleryModalProps) {
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleZoom = (index: number, isVideo: boolean) => {
    if (isVideo) return;
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  const isVideo = (url: string) => url.endsWith('.mp4');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-6xl mx-4 bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar con hover animado */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 text-gray-600 hover:text-primary hover:scale-110 transition-transform duration-200"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Contador en esquina superior izquierda */}
        <div className="absolute top-4 left-6 z-50 text-white text-sm font-semibold bg-black/50 px-3 py-1 rounded">
          {activeIndex + 1} / {images.length}
        </div>

        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          style={{
            '--swiper-navigation-color': 'var(--color-primary)',} as React.CSSProperties}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="relative"
          loop={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => toggleZoom(index, isVideo(src))}
                className={`relative w-full h-[80vh] transition-transform duration-300 ${
                  zoomedIndex === index ? 'scale-150' : 'scale-100'
                }`}
                style={{
                  cursor: isVideo(src) ? 'default' : 'zoom-in'
                }}
              >
                {isVideo(src) ? (
                  <video
                    src={`${prefix}${src}`}
                    controls
                    className="w-full h-full object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <Image
                    src={`${prefix}${src}`}
                    alt={`Gallery image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                )}
              </div>
            </SwiperSlide>
          ))}

          {/* Botones de navegación personalizados en naranja */}
          <div className="swiper-button-prev absolute top-1/2 -left-6 transform -translate-y-1/2 z-50 cursor-pointer">
            <ArrowLeftIcon className="w-8 h-8 text-primary hover:scale-110 transition-transform duration-200" />
          </div>
          <div className="swiper-button-next absolute top-1/2 -right-6 transform -translate-y-1/2 z-50 cursor-pointer">
            <ArrowRightIcon className="w-8 h-8 text-primary hover:scale-110 transition-transform duration-200" />
          </div>
        </Swiper>
      </motion.div>
    </div>
  );
}
