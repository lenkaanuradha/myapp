'use client'

import React from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    
    <div className="bg-gray-800 min-h-[50vh] flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12 mb-10 mt-1 rounded-3xl border border-blue-600">
      <motion.div 
        className="max-w-2xl text-center space-y-4 sm:space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold text-white text-center tracking-wide"
          variants={itemVariants}
        >
          About Me
          <motion.hr 
            className="w-10 h-1 mx-auto my-3 sm:my-4 border-0 rounded bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "2.5rem" }}
            transition={{ duration: 0.5 }}
          />
        </motion.h1>

        <motion.p 
          className="text-base sm:text-lg font-medium text-white leading-relaxed"
          variants={itemVariants}
        >
          <motion.span 
            className="font-semibold text-blue-500"
            whileHover={{ scale: 1.1 }}
          >
            Who I Am //
          </motion.span> I am
          not your average developer. Hello! My name is{" "}
          <motion.span 
            className="font-bold underline decoration-blue-500"
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
          >
            Anuradha
          </motion.span>{" "}
          and I enjoy creating things that live on the internet.
        </motion.p>

        <motion.p 
          className="text-base sm:text-lg font-medium text-white leading-relaxed"
          variants={itemVariants}
        >
          With over <motion.span 
            className="text-blue-500 font-semibold"
            whileHover={{ scale: 1.1 }}
          >2 years</motion.span>{" "}
          of experience in Web Development, I have worked on a variety of tech
          stacks. In my free time, I prefer{" "}
          <motion.span 
            className="italic text-blue-500"
            whileHover={{ scale: 1.1 }}
          >Lofi music</motion.span>
          {" "}or some documentaries.
        </motion.p>

        <motion.p 
          className="text-base sm:text-lg font-medium text-white leading-relaxed"
          variants={itemVariants}
        >
          I'm an Information Technologies undergrad at{" "}
          <motion.span 
            className="text-blue-500 font-semibold"
            whileHover={{ scale: 1.1 }}
          >
            International Institute of Information Technology (IIIT) Bhubaneswar
          </motion.span>
          .
        </motion.p>
      </motion.div>
    
    </div>
  );
}

