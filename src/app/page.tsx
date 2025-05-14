"use client";

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Banner from '@/components/banner/Banner';
import Services from '@/components/services/Services';
import ContactForm from '@/components/contact/ContactForm';
import Footer from '@/components/Footer';
import LetsTalk from '../components/contact/LetsTalk';
import WeCareSection from '../components/we-care-section';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={handleLoaded} />}
      {isLoaded && (
        <>
          <Navbar />
          <Banner />
      <WeCareSection />
          <Services />
          <LetsTalk />
          <ContactForm />
          <Footer />
        </>
      )}
    </>
  );
}