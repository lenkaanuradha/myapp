import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node", "Express", "MongoDB", "Computer Network",
    "Operating Systems", "Computer Networks", "C++", "Socket.io"
  ];

  // Map skill names to their corresponding image paths
  const skillImages = {
    HTML: "/images/html-icon.png",
    CSS: "/images/css-icon.png",
    JavaScript: "/images/javascript-icon.png",
    React: "/images/react-icon.png",
    Node: "/images/node-icon.png",
    Express: "/images/express-icon.jpg",
    MongoDB: "/images/mongodb-icon.png",
    "Computer Network": "/images/cn-icon.jpg",
    "Operating Systems": "/images/os-icon.png",
    "Computer Networks": "/images/cn-icon.jpg",
    "C++": "/images/c++.png",
    "Socket.io": "/images/socket.io-icon.png",
  };

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-wide">
        Skills
        <hr className="w-16 h-1 mx-auto my-4 border-blue-800 rounded bg-blue-500" />
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {skills.map((skill, index) => (
          <Card
            key={index}
            className="bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 border-blue-800"
          >
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-center">
                <img
                  src={skillImages[skill] || "/images/default-icon.png"} // Default image fallback
                  alt={`${skill}-icon`}
                  width={28}
                  className="mx-2 rounded-2xl"
                />
                <CardTitle className="text-sm sm:text-base md:text-lg text-center">
                  {skill}
                </CardTitle>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
