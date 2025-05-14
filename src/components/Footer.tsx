import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 text-center border-t border-gray-300">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Texto de Copyright */}
        <p className="text-lg font-semibold">
          &copy; 2025 Calderon Excavations. All rights reserved.
        </p>

        {/* Redes Sociales */}
        <div className="flex gap-4" hidden>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
          <a href="https://instagram.com"  target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>

        </div>
      </div>
    </footer>
  );
}
