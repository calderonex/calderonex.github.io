import { useState } from "react";
import { motion } from "framer-motion";

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
  {
    name: "Proyecto B",
    location: "Ciudad Y",
    date: "Abril 2024",
    summary: "Pavimentación para complejo residencial.",
    coverImage: "/images/proyecto-b/portada.jpg",
    phases: [
      {
        title: "Preparación del terreno",
        description: "Se niveló el terreno y se removieron residuos.",
        image: "/images/proyecto-b/fase1.jpg",
      },
      {
        title: "Vaciado de concreto",
        description: "Colocación de la base de concreto.",
        image: "/images/proyecto-b/fase2.jpg",
      },
      {
        title: "Acabado final",
        description: "Pavimentación terminada con detalles finales.",
        image: "/images/proyecto-b/fase3.jpg",
      },
    ],
  },
];

export default function ProjectTimeline() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const project = projects[currentProjectIndex];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Carrusel de proyectos */}
      <div className="flex overflow-x-auto gap-6 mb-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-80 h-96 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition duration-300"
            onClick={() => setCurrentProjectIndex(index)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.coverImage}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detalles del proyecto seleccionado */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-center">{project.name}</h2>
        <div className="text-center text-sm text-gray-500">
          📍 {project.location} | 📆 {project.date}
          <div className="text-base text-gray-700 mt-1">{project.summary}</div>
        </div>

        {/* Timeline de fases */}
        <div className="flex flex-col gap-6 mt-6">
          {project.phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={phase.image}
                alt={phase.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
