"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons
import { prefix } from "@/utils/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Estado del drawer

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        let currentSection = "";
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = entry.target.id;
          }
        });
        if (currentSection) setActiveLink(currentSection);
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Función para manejar clic en enlaces
  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Cerrar drawer en móvil
  };

  return (
    <>
      {/* Navbar principal */}
      <motion.nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white text-black shadow-md py-4"
          : "bg-transparent text-white py-6"
          }`}
      >
        <div className="w-full flex items-start justify-between px-4 pt-2">
          {/* Logo dinámico con tamaño ajustable */}
          <div className={`transition-all duration-300 flex-shrink-0 ${isScrolled ? "pt-0 pl-0" : "pt-0 pl-4"
            }`}>
            <Image
              src={isScrolled ? `${prefix}/assets/images/logo/logo-alt.svg` : `${prefix}/assets/images/logo/logo.svg`}
              alt="Logo"
              width={isScrolled ? 160 : 160}  // más pequeño en ambas versiones
              height={isScrolled ? 48 : 48}
              className="object-contain"
              priority
            />
          </div>


          {/* Menú normal en pantallas grandes */}
          <ul className="hidden md:flex space-x-8 text-sm items-center">
  {[
    { name: "Home", id: "banner" },
    { name: "Our Work", id: "our-work" },
    { name: "Services", id: "services" },

    { name: "Contact", id: "contact", isButton: true },
  ].map(({ name, id, isButton }) => (
    <li key={id}>
      <Link
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          handleLinkClick(id);
        }}
        className={`transition-all duration-300 ${
          isButton
            ? `px-6 py-3 border text-lg ${
                isScrolled
                  ? "border-black text-black hover:bg-primary hover:text-white hover:border-primary"
                  : "border-white text-white hover:bg-primary hover:text-white hover:border-primary"
              }`
            : `
              relative text-base font-medium px-2 py-1
              transition-colors duration-300 
              ${isScrolled ? "text-black" : "text-white"} 
              hover:text-primary
              ${activeLink === id ? "text-primary font-semibold border-b-2 border-primary" : ""}
            `
        }`}
      >
        {name}
      </Link>
    </li>
  ))}
</ul>


          {/* Botón de menú hamburguesa en pantallas pequeñas */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon
                className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`}
              />
            ) : (
              <Bars3Icon
                className={`w-8 h-8 ${isScrolled ? "text-black" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Drawer en pantallas pequeñas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cerrar */}
              <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
                <XMarkIcon className="w-8 h-8 text-black" />
              </button>

              {/* Enlaces del menú */}
              <ul className="flex flex-col space-y-6 text-lg">
                {[
                  { name: "Home", id: "banner" },
                  { name: "Our Work", id: "our-work" },
                  { name: "Services", id: "services" },
                  { name: "Contact", id: "contact", isButton: true },
                ].map(({ name, id, isButton }) => (
                  <li key={id}>
                    <Link
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(id);
                      }}
                      className={`transition-all duration-300 ${isButton
                        ? "px-6 py-3 border border-black text-lg transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary"
                        : "hover:text-primary"
                        }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
