import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    name: "Fundación Edificio A",
    location: "Ciudad X",
    date: "Marzo 2024",
    summary: "Excavación profunda para torre residencial.",
    coverImage: "/images/proyecto-a/portada.jpg",
    phases: [
      {
        title: "Limpieza del terreno",
        description: "Se removió vegetación y desechos iniciales.",
        image: "/images/proyecto-a/fase1.jpg",
      },
      {
        title: "Excavación",
        description: "Excavación de 3 metros de profundidad.",
        image: "/images/proyecto-a/fase2.jpg",
      },
      {
        title: "Cimentación",
        description: "Vaciado de concreto y colocación de acero.",
        image: "/images/proyecto-a/fase3.jpg",
      },
      {
        title: "Obra terminada",
        description: "Terreno listo para estructura superior.",
        image: "/images/proyecto-a/fase4.jpg",
      },
    ],
  },
  // Puedes agregar más proyectos aquí
];

export default function ProjectTimeline() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);

  const project = projects[currentProjectIndex];
  const phase = project.phases[currentPhaseIndex];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header Proyecto */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setCurrentProjectIndex((prev) =>
              prev === 0 ? projects.length - 1 : prev - 1
            );
            setCurrentPhaseIndex(0);
          }}
          className="text-gray-600 hover:text-primary"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold text-center">
          {project.name}
        </h2>

        <button
          onClick={() => {
            setCurrentProjectIndex((prev) =>
              prev === projects.length - 1 ? 0 : prev + 1
            );
            setCurrentPhaseIndex(0);
          }}
          className="text-gray-600 hover:text-primary"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Datos del proyecto */}
      <div className="mb-6 text-center text-sm text-gray-500">
        📍 {project.location} | 📆 {project.date}
        <div className="text-base text-gray-700 mt-1">{project.summary}</div>
      </div>

      {/* Timeline de fases */}
      <div className="flex justify-center gap-4 mb-6">
        {project.phases.map((p, index) => (
          <button
            key={index}
            onClick={() => setCurrentPhaseIndex(index)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-medium
              ${index === currentPhaseIndex
                ? "bg-primary text-white border-primary"
                : "bg-white border-gray-300 text-gray-600 hover:bg-gray-100"}`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Imagen y descripción de la fase actual */}
      <motion.div
        key={currentPhaseIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        <img
          src={phase.image}
          alt={phase.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {phase.title}
          </h3>
          <p className="text-gray-600 text-sm">{phase.description}</p>
        </div>
      </motion.div>
    </div>
  );
}