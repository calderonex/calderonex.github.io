import { CheckBadgeIcon, StarIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const items = [
  {
    icon: StarIcon,
    title: "Expertise",
    description: "We have years of experience in the industry, ensuring top-notch services.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Quality",
    description: "Our commitment to quality guarantees the best results for your projects.",
  },
  {
    icon: FaceSmileIcon,
    title: "Customer Satisfaction",
    description: "We prioritize customer satisfaction, making sure your needs are met.",
  },
];

export default function TextGrid() {
  return (
    <div className="container mx-auto pt-10 px-4 md:px-0">
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 overflow-visible"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Ícono sobresaliendo */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full">
                <item.icon className="text-primary w-16 h-16" />
              </div>

              <h3 className="text-2xl font-bold mt-10">{item.title}</h3>
              <p className="text-lg text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
