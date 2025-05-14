// // "use client";

// // import { useEffect, useState } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';

// // export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
// //   const [isLoaded, setIsLoaded] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setIsLoaded(true);
// //       onLoaded();
// //     }, 3000); 

// //     return () => clearTimeout(timer);
// //   }, [onLoaded]);

// //   const dotVariants = {
// //     pulse: {
// //       scale: [1, 1.5, 1],
// //       transition: {
// //         duration: 1.2,
// //         repeat: Infinity,
// //         ease: "easeInOut",
// //       },
// //     },
// //   };

// //   const boxVariants = {
// //     pulse: {
// //       scale: [1, 1.5, 1],
// //       transition: {
// //         duration: 1.2,
// //         repeat: Infinity,
// //         ease: "easeInOut",
// //       },
// //     },
// //   };

// //   const bounceTransition = {
// //     y: {
// //       duration: 0.6,
// //       repeat: Infinity,
// //       repeatType: "reverse",
// //       ease: "easeInOut",
// //     },
// //   };

// //   return (
// //     <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
// //    <motion.div
// //         className="grid grid-cols-2 gap-4"
// //       >
// //         {[0, 1, 2, 3].map((i) => (
// //           <motion.div
// //             key={i}
// //             className="w-16 h-16 bg-[var(--primary-color)]"
// //             variants={boxVariants}
// //             animate="pulse"
// //           />
// //         ))}
// //       </motion.div>
// //       <motion.div
// //         className="flex items-center justify-center mb-4"
// //         initial={{ y: 20 }}
// //         animate={{ y: 0 }}
// //         transition={{
// //           duration: 0.6,
// //           repeat: Infinity,
// //           repeatType: "reverse",
// //           ease: "easeInOut",
// //         }}
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.9 }}
// //       >
// //         <Image src="/assets/images/calderon-excavation.png" alt="Logo" width={100} height={100} />
// //       </motion.div>
// //       <motion.div
// //         animate="pulse"
// //         transition={{ staggerChildren: 0.2 }}
// //         className="flex space-x-2"
// //       >
// //         {[0, 1, 2].map((i) => (
// //           <motion.div
// //             key={i}
// //             className="w-4 h-4 bg-[var(--primary-color)] rounded-full"
// //             variants={dotVariants}
// //           />
// //         ))}
// //       </motion.div>
// //       <motion.div
// //         className="flex items-center justify-center mb-4"
// //         initial={{ y: 20 }}
// //         animate={{ y: 0 }}
// //         transition={bounceTransition}
// //         whileHover={{ scale: 1.1 }}
// //         whileTap={{ scale: 0.9 }}
// //       >
// //         <Image src="/assets/images/calderon-excavation.png" alt="Logo" width={100} height={100} />
// //       </motion.div>
// //       <motion.div
// //         animate="pulse"
// //         transition={{ staggerChildren: 0.2 }}
// //         className="flex space-x-2"
// //       >
// //         {[0, 1, 2].map((i) => (
// //           <motion.div
// //             key={i}
// //             className="w-4 h-4 bg-[var(--primary-color)] rounded-full"
// //             variants={dotVariants}
// //           />
// //         ))}
// //       </motion.div>
// //     </div>
// //   );
// // }

// "use client";

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(false);
//       onLoaded();
//     }, 3000); 

//     return () => clearTimeout(timer);
//   }, [onLoaded]);

//   const transition = { duration: 3,
//     repeat: Infinity,
//     ease: "easeInOut",
//     times: [0, 0.20, 0.40, 0.60, 0.80, 1],}

//   const boxVariants = [
//     {
//       animate: {
//         scaleX: [1, 1.5, 1.5, 0.5, 0.5, 1],
//         scaleY: [1, 1, 1.5, 1.5, 0.5, 1],

//         transition,
//       },
    
//     },
//     {
//       animate: {
//         scaleX: [1, 0.5, 0.5, 1.5, 1.5, 1],
//         scaleY: [1, 1, 1.5,1.5,0.5, 1],
//         transition,
//       },
//     },
//     {
//         animate: {
//           scaleX: [1, 0.5, 0.5, 1.5, 1.5, 1],
//           scaleY: [1, 1, 0.5,0.5,1.5, 1],
//           transition,
//         },
        
//       },
//       {
//         animate: {
//           scaleX: [1, 1.5, 1.5, 0.5, 0.5, 1],
//           scaleY: [1, 1, 0.5,0.5,1.5, 1],
//           transition,
//         },
//       },
//   ];
//   const originsBox = [
//     'left top',
//     'right top',
//     'left bottom',
//     'right bottom',
//   ]
//   const backgroundPositions = [
//     '0% 0%',
//     '100% 0%',
//     '0% 100%',
//     '100% 100%',
//   ];
//   return (
//     <div className={`fixed inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}>
//       <div className="relative w-32 h-32">
//         <div className="absolute inset-0 bg-[url('/assets/images/calderon-excavation.png')] bg-cover bg-center"></div>
//         <motion.div className="grid grid-cols-2 gap-0 w-full h-full bg-white">
//           {boxVariants.map((variant, i) => (
//             <motion.div
//               key={i}
//               className="w-16 h-16 bg-transparent50 border-white border-3"
//               animate={variant.animate}
//               style={{
//                 transformOrigin: backgroundPositions[i],
//               }}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }