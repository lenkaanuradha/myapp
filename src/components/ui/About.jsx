import React from "react";

export default function About() {
  return (
    <div className="bg-gray-800 min-h-50vh flex items-center justify-center px-8 py-12 mb-10 mt-1 rounded-3xl border border-blue-600">
      <div className="max-w-2xl text-center space-y-6 animate-fadeIn">
        <h1 className="text-3xl font-bold text-white text-center  tracking-wide">
          About Me
          <hr className="w-10 h-1 mx-auto my-4 border-0 rounded md:my-3 bg-blue-500"/>
        </h1>
       

        <p className="text-lg font-medium text-white-800 leading-relaxed">
          <span className="font-semibold text-blue-500">Who I Am //</span> I am
          not your average developer. Hello! My name is{" "}
          <span className="font-bold underline decoration-blue-500">
            Anuradha
          </span>{" "}
          and I enjoy creating things that live on the internet.
        </p>
        <p className="text-lg font-medium text-white-800 leading-relaxed">
          With over <span className="text-blue-500 font-semibold">2 years</span>{" "}
          of experience in Web Development, I have worked on a variety of tech
          stacks. In my free time, I prefer{" "}
          <span className="italic text-blue-500">Lofi music</span>
          or some documentaries.
        </p>
        <p className="text-lg font-medium text-white-800 leading-relaxed">
          I'm an Information Technologies undergrad at{" "}
          <span className="text-blue-500 font-semibold">
            International Institute of Information Technology (IIIT) Bhubaneswar
          </span>
          .
        </p>
        <div>
          
        </div>
      </div>
    </div>
  );
}
