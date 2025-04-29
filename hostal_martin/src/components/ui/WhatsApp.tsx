"use client";

import React from "react";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/573228803018"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img
          src="/images/WhatsApp.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </motion.div>
  );
} 