"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="text-white">
      {/* Banner Image */}
      <div className="relative w-full">
        <Image
          src="https://ik.imagekit.io/fseam/Banner/FSEAM%202026%20Banner%20.png"
          alt="FSEAM 2026 Banner"
          width={1920}
          height={600}
          layout="responsive"
          priority
        />
      </div>
      {/* <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/fseam/Banner/FSEAM%202026%20Banner%20.png)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div> */}

      {/* Content Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Download Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {/* FSEAM 2026 Brochure */}
            <a
              href="/FSEAM 2026 Brochure Updated 25-12-2025.pdf"
              download
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 transform"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>FSEAM 2026 Brochure</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
            {/* FSEAM 2026 PPT Format */}
            <a
              href="/FSEAM 2026 PPT FORMAT.pptx"
              download
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 transform"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>FSEAM 2026 PPT Format</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
            {/* FSEAM 2026 Poster Format */}
            <a
              href="/FSEAM 2026 Poster Format.pptx"
              download
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 transform"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>FSEAM 2026 poster format</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Title Section */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-center text-gray-900 mb-2 leading-tight">
              Join Us at <span className="text-blue-600">IIT Kharagpur</span>
            </h2>
          </div>

          {/* Conference Details */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-blue-600 leading-tight">
              International Conference on Frontiers in Surface Engineering and
              Additive Manufacturing
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 font-medium">
              Exploring Advanced Materials and Critical Minerals for Sustainable
              Energy Transformation
            </p>
            <p className="text-xl font-bold text-blue-600 mb-10">
              January 21-23, 2026 | IIT Kharagpur, India
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                href="/registration"
                className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
              >
                Register Now
              </Link>
              <Link
                href="/about-event"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 transform"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
