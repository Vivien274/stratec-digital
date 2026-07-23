"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const trades = [
  "serrurier",
  "plombier",
  "paysagiste",
  "électricien",
  "photographe",
  "coiffeuse",
  "esthéticienne",
  "plaquiste",
  "menuisier",
];

export default function TradeRotater() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % trades.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="block relative h-[1.15em] w-full overflow-hidden text-slate-950 font-black">
      <AnimatePresence mode="wait">
        <motion.span
          key={trades[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute left-0 top-0 text-slate-950 font-black"
        >
          {trades[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
