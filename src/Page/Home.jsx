import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen  pt-0 text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-extrabold mb-6 leading-tight">
          LET'S BUILD SOMETHING TOGETHER
        </h1>
        <motion.p className="text-2xl font-semibold mb-4">
          Hi, I'm <span className="text-blue-500">Anuradha Lenka</span>
        </motion.p>
        <motion.p
          className="text-lg mb-6 leading-relaxed"
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          A Web Developer focused on building{" "}
          <span className="font-bold text-blue-500">responsive front-end</span>{" "}
          web applications with back-end technologies.
        </motion.p>

        <Button className="bg-blue-500 text-white rounded-xl shadow-blue-500/50">
          Explore me
        </Button>
        <div className="mt-10 flex justify-center space-x-5 text-2xl text-blue-500">
          <FaLinkedin />
          <FaGithub />
          <MdEmail />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
}
