import React from "react";

export default function Certification() {
  const certificates = [
    {
      title: "SQL (Basic)",
      issuer: "Hackerrank",
      link: "https://www.hackerrank.com/certificates/iframe/08538bbecde1"
    },
    {
      title: "SQL (Intermediate)",
      issuer: "Hackerrank",
      link: "https://www.hackerrank.com/certificates/iframe/a1a961d600bd"
    }
  ];

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-10">
        Certification
      </h1>
      <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
        {certificates.map((cert, index) => (
          <div key={index} className="w-full sm:w-1/2 max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-2xl shadow overflow-hidden">
            <div className="flex flex-col items-center py-6 sm:py-10 px-4">
              <h5 className="mb-1 text-lg sm:text-xl font-medium text-gray-200">
                {cert.title}
              </h5>
              <span className="text-sm text-gray-400">
                {cert.issuer}
              </span>
              <div className="flex mt-4 md:mt-6">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-2xl text-blue-500 hover:bg-white hover:text-blue-700 transition-colors duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <div className="w-1/2 h-1 bg-blue-500 rounded-full"></div>
        <div className="w-1/2 h-1 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}

