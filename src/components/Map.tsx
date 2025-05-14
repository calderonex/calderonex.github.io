import { motion } from "framer-motion";
{/* Map */}
 export default function Map() { 
 return (<motion.div
  className="overflow-hidden rounded-lg shadow-lg"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <iframe
    className="w-full h-80"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509431!2d144.95373531589698!3d-37.81627937975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a7b32e0d1b2e!2s123%20Main%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1633021476613!5m2!1sen!2sus"
    allowFullScreen={true}
    loading="lazy"
  ></iframe>
</motion.div>)
 }