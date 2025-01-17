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
  return (
    <div className="my-10 ">
     <h1 class="text-3xl font-bold text-white text-center  tracking-wide">Projects  <hr className="w-20 h-1 mx-auto my-4 border-0 rounded md:my-3 bg-blue-500"/></h1>
      <div className="flex flex-row justify-between space-x-6">
        <motion.Card
          onClick={() => setIsOpen1(!isOpen1)}
          className="mt-10 w-1/3 h-full transform transition duration-300 hover:scale-105 bg-black hover:bg-blue-100 rounded-3x border border-blue-500 rounded-2xl"
        >
          <CardHeader>
            <CardTitle className="text-black">MyChatterBox</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/images/chatapp.png"
              alt="chat-app"
              className="h-35 w-30"
            />
          </CardContent>
          {isOpen1 && (
            <motion.CardDescription>
              MyChatterBox is a real-time chat application using React, Node.js,
              MongoDB, and Socket.io, featuring secure authentication and
              messaging.
            </motion.CardDescription>
          )}
          <CardFooter>
            <a
              href="https://chatbox-lilac-five.vercel.app/"
              className="text-blue-500 hover:underline  "
            >
              Visit MyChatterBox
            </a>
          </CardFooter>
        </motion.Card >
        <motion.Card   onClick={() => setIsOpen2(!isOpen2)} className="mt-10 w-1/3 h-full transform transition duration-300 bg-black border border-blue-500  hover:scale-105 hover:bg-blue-100 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-black">NewsHub</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/images/newshub.png"
              alt="chat-app"
              className="h-35 w-30"
            />
          </CardContent>
          {isOpen2 && (
            <motion.CardDescription>
              News Hub is a platform where users can post, comment, and manage news with an admin panel for moderation.
            </motion.CardDescription>
          )}
          <CardFooter>
            <a
              href="https://news-hub-frontend.vercel.app/"
              className="text-blue-500 hover:underline  "
            >
              Visit NewsHub
            </a>
          </CardFooter>
        </motion.Card>
        <motion.Card  onClick={() => setIsOpen3(!isOpen3)}  className="mt-10  border border-blue-500 w-1/3 h-full transform transition duration-300 hover:scale-105 bg-black hover:bg-blue-100 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-black">MyClassroom</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/images/classroom.png"
              alt="chat-app"
              className="h-35 w-30"
            />
          </CardContent>
          {isOpen3 && (
            <motion.CardDescription>
              MyClassroom is a platform where principals manage classrooms, assign teachers, and students view timetables and classmates.
            </motion.CardDescription>
          )}
          <CardFooter>
            <a
              href="https://myfrontend-steel.vercel.app/"
              className="text-blue-500 hover:underline"
            >
              Visit MyClassroom
            </a>
          </CardFooter>
        </motion.Card>
      </div>
    </div>
  );
}
