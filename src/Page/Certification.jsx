import React from "react";

export default function Certification() {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-white">Certification</h1>
      <div className="flex justify-center gap-10 mt-10">
        <div className="w-1/2 bg-gray-800 border border-gray-200 rounded-2xl shadow dark:border-gray-700 relative overflow-hidden">
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white rounded-full overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="/images/hackerrank.png"
              alt="Hackerrank Badge"
            />
          </div> */}
          <div className="flex flex-col items-center pt-20 pb-10 pl-1/2">
            <h5 className="mb-1 text-xl font-medium text-gray-200 dark:text-white">
              SQL (Basic)
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Hackerrank
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="https://www.hackerrank.com/certificates/iframe/08538bbecde1"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-2xl text-blue-500 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Link to the certificate
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-gray-800 border border-gray-200 rounded-2xl shadow dark:border-gray-700 relative overflow-hidden">
          {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white rounded-full overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="/images/hackerrank.png"
              alt="Hackerrank Badge"
            />
          </div> */}
          <div className="flex flex-col items-center pt-20 pb-10 pl-1/2">
            <h5 className="mb-1 text-xl font-medium text-gray-200 dark:text-white">
              SQL (Intermediate)
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Hackerrank
            </span>
            <div className="flex mt-4 md:mt-6">
              <a
                href="https://www.hackerrank.com/certificates/iframe/a1a961d600bd"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-2xl text-blue-500 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Link to the certificate
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-10">
        <div class="w-80 h-1 bg-blue-500 rounded-3xl"></div>
        <div class="w-80 h-1 bg-gray-500 rounded-3xl"></div>
      </div>
    </div>
  );
}
