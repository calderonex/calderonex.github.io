import { prefix } from '@/utils/utils';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ServiceCardProps {
  title: string;
  image: string | StaticImageData;
  onClick: () => void;
}
export default function ServiceCard({ title, image, onClick }: ServiceCardProps) {
  return (
    <div className="w-full min-w-[280px] sm:w-1/2 lg:w-1/4 flex justify-center">
      <motion.div
        className="relative text-white shadow-lg overflow-hidden cursor-pointer w-full h-[350px] rounded-lg"
        whileHover={{ scale: 1.05 }}
        onClick={onClick}
      >
        {/* Imagen de fondo */}
        <Image
          src={`${prefix}${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        {/* Capa oscura semitransparente */}
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

        {/* Contenido de la tarjeta */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-4 py-8 px-8">
          <h3 className="text-3xl font-bold text-white">{title}</h3>
          <button
            className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            More +
          </button>
        </div>
      </motion.div>

    </div>
  );
}