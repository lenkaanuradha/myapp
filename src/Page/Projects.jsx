import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Projects() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const projects = [
    {
      title: "MyChatterBox",
      image: "/images/chatapp.png",
      description: "MyChatterBox is a real-time chat application using React, Node.js, MongoDB, and Socket.io, featuring secure authentication and messaging.",
      link: "https://chatbox-lilac-five.vercel.app/",
      isOpen: isOpen1,
      setIsOpen: setIsOpen1,
    },
    {
      title: "NewsHub",
      image: "/images/newshub.png",
      description: "News Hub is a platform where users can post, comment, and manage news with an admin panel for moderation.",
      link: "https://news-hub-frontend.vercel.app/",
      isOpen: isOpen2,
      setIsOpen: setIsOpen2,
    },
    {
      title: "MyClassroom",
      image: "/images/classroom.png",
      description: "MyClassroom is a platform where principals manage classrooms, assign teachers, and students view timetables and classmates.",
      link: "https://myfrontend-steel.vercel.app/",
      isOpen: isOpen3,
      setIsOpen: setIsOpen3,
    },
  ];

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-wide">
        Projects
        <hr className="w-20 h-1 mx-auto my-4 border-0 rounded md:my-3 bg-blue-500"/>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              onClick={() => project.setIsOpen(!project.isOpen)}
              className="h-full flex flex-col bg-black hover:bg-black border border-blue-500 rounded-2xl overflow-hidden cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-white text-xl sm:text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-lg"
                />
                {project.isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CardDescription className="mt-4 text-white text-sm sm:text-base">
                      {project.description}
                    </CardDescription>
                  </motion.div>
                )}
              </CardContent>
              <CardFooter>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline text-sm sm:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {project.title}
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

