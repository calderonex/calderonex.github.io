"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, ClockIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import config from "@/config/config";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      title: "Calderon Excavations",
      name: formData.get("name"),
      email: formData.get("email"),
      time: new Date().toLocaleString(),
      message: formData.get("message"),
    };

    try {
      await emailjs.send(
        config.email.serviceId,
        config.email.templateId,
        data,
        config.email.publicKey
      );

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  return (
    <section id="contact" className="flex flex-col md:flex-row">
      {/* Contact Information */}
      <div className="w-full md:w-1/2 bg-black text-white p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-6 h-6 text-primary" />
            <p>calderonexcavations@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-6 h-6 text-primary" />
            <p>(415) 261-0538</p>
          </div>
          <div className="flex items-center gap-3">
            <ClockIcon className="w-6 h-6 text-primary" />
            <p>
              Monday – Saturday: 8AM – 6PM <br />
              Sunday: Closed
            </p>
          </div>
          
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea name="message" className="w-full px-4 py-2 border rounded-lg" required></textarea>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 text-white rounded-lg flex justify-center items-center transition ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-secondary"
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0L8 4l4 4V4a8 8 0 11-8 8h2z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center relative max-w-md w-full"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro del modal
          >
            {/* Botón Cerrar (X) */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            {/* Icono de éxito */}
            {status.includes("successfully") && (
              <div className="flex justify-center">
                <CheckCircleIcon className="w-16 h-16 text-green-500" />
              </div>
            )}

            <h3 className="text-xl font-bold mt-4">
              {status.includes("successfully") ? "Success!" : "Error"}
            </h3>
            <p className="mt-2">{status}</p>

            {/* Botón de cierre */}
            <button
              className="mt-4 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
