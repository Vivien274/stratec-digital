"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Consultante en digitalisation",
  "Hauts-de-France & partout en France",
  "Pour les artisans et créateurs",
];

export default function TradeRotater() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-block relative h-9 sm:h-10 md:h-11 w-full overflow-hidden align-middle">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute left-0 top-0 text-[#562C2C] font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl leading-normal py-0.5"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
