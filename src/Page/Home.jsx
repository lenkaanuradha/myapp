'use client'

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const socialIconVariants = {
  hover: { scale: 1.2, rotate: 15, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-0 text-white px-4 overflow-hidden">
      <motion.div
        className="text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight"
          variants={itemVariants}
        >
          LET'S BUILD SOMETHING TOGETHER
        </motion.h1>
        <motion.p className="text-xl sm:text-2xl font-semibold mb-4" variants={itemVariants}>
          Hi, I'm{" "}
          <motion.span
            className="text-blue-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Anuradha Lenka
          </motion.span>
        </motion.p>
        <motion.p
          className="text-base sm:text-lg mb-6 leading-relaxed"
          variants={itemVariants}
        >
          A Web Developer focused on building{" "}
          <motion.span
            className="font-bold text-blue-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            responsive front-end
          </motion.span>{" "}
          web applications with back-end technologies.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.div
            variants={floatVariants}
            animate="float"
          >
            <Button className="bg-blue-500 text-white rounded-xl shadow-blue-500/50 hover:bg-blue-600 transition-colors duration-300">
              Explore me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center space-x-5 text-2xl text-blue-500"
          variants={itemVariants}
        >
          {[FaLinkedin, FaGithub, MdEmail, FaTwitter].map((Icon, index) => (
    <motion.a
      key={index}
      href={
        index === 0 ? 'https://www.linkedin.com/in/anuradha-lenka-531948229/' :
        index === 1 ? 'https://github.com/lenkaanuradha' :
        index === 2 ? 'mailto:b421008@iiit-bh.ac.in' :
        'https://x.com/LenkaAnura6078'
      }
      variants={socialIconVariants}
      whileHover="hover"
      className="hover:text-blue-600 transition-colors duration-300"
    >
      <Icon />
    </motion.a>
  ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

