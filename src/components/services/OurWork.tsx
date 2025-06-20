import { useState } from 'react';
import GalleryModal from './GalleryModal';
import ServiceCard from './ServiceCard';

export default function OurWorkSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] =  useState<keyof typeof galleries | null>(null);

  const galleries = {
    paving: [
      '/assets/images/paving/paving2.jpg',//paving
      '/assets/images/paving/paving3.jpeg',//paving

    ],
    excavation: [
      '/assets/images/excavation/excavation1.jpg',
      '/assets/images/excavation/excavation2.jpg',
      '/assets/images/excavation/excavation3.jpg',
      '/assets/images/excavation/excavation4.jpg',
      '/assets/images/excavation/excavation5.jpg',
      '/assets/images/excavation/excavation6.jpg',
      '/assets/images/excavation/excavation7.jpg',
      '/assets/images/excavation/excavation8blur.jpg', 
      '/assets/images/excavation/excavation9.jpeg',
      '/assets/images/excavation/excavation10blur.jpg', 
      '/assets/images/excavation/excavation11.jpeg',
      '/assets/images/excavation/excavation12.jpeg',
      '/assets/images/excavation/excavation13.jpeg',
      '/assets/images/excavation/excavation14.jpeg',
      '/assets/images/excavation/excavation15.jpeg',
      '/assets/images/excavation/excavation16.jpeg',
      '/assets/images/excavation/excavation17.jpeg',
      '/assets/videos/video.mp4',
    ],
    concrete: [
      '/assets/images/concrete/concrete.jpg',
      '/assets/images/concrete/concrete3.jpeg',
      '/assets/images/concrete/concrete4.jpeg',
      '/assets/images/concrete/concrete5.jpeg',
      '/assets/images/concrete/concrete6.jpeg',
      '/assets/images/concrete/concrete7.jpeg',
      '/assets/images/concrete/concrete8.jpeg',
      '/assets/images/concrete/concrete9.jpeg',
      '/assets/images/concrete/concrete10.jpeg',
    ],
  };

  const openModal = (galleryKey: keyof typeof galleries) => {
    setSelectedGallery(galleryKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
  };

  return (
    <section id="our-work" className="bg-white p-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="w-full max-w-sm">
            <ServiceCard
              title="EXCAVATION"
              image="/assets/images/excavation/excavation10.jpeg"
              onClick={() => openModal('excavation')}
            />
          </div>
          <div className="w-full max-w-sm">
            <ServiceCard
              title="CONCRETE"
              image="/assets/images/concrete/concrete.jpg"
              onClick={() => openModal('concrete')}
            />
          </div>
          <div className="w-full max-w-sm">
            <ServiceCard
              title="PAVING"
              image="/assets/images/paving/paving2.jpg"
              onClick={() => openModal('paving')}
            />
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={selectedGallery ? galleries[selectedGallery] : []}
      />
    </section>
  );
}
