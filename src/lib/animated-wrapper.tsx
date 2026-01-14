"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedWrapper({ children, delay = 0 }: AnimatedWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.35,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
