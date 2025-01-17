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

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center tracking-wide">
        Skills
        <hr className="w-16 h-1 mx-auto my-4 border-0 rounded bg-blue-500"/>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {skills.map((skill, index) => (
          <Card key={index} className="bg-gray-800 text-blue-500 hover:bg-gray-700 transition-colors duration-200">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-sm sm:text-base md:text-lg text-center">{skill}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

