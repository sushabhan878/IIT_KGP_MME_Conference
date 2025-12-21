import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="https://res.cloudinary.com/damnmi4ya/video/upload/v1755942647/iitkgp_1_tmoyb9.mp4"
        >
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div>
        <div className="relative z-10 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          {/* Download Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 z-20">
            <a
              href="/FSEAM 2026 Brochure Updated 20-12-2025.pdf"
              download
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 transform"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>FSEAM 2026 Brchure</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
            <a
              href="/FSEAM 2026 PPT FORMAT.pptx"
              download
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-600 transform"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>FSEAM 2026 PPT Format</span>
              <div className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>
          <div className='text-6xl z-20 font-bold justify-center align-middle flex-center pb-6'>Join Us at <span className='text-7xl text-blue-400'>IIT Kharagpur</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className='z-20'>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-100 to-blue-600 text-transparent bg-clip-text">
                International Conference on Frontiers in Surface Engineering and Additive Manufacturing
              </h1>
              <p className="text-xl mb-6">
                Exploring Advanced Materials and Critical Minerals for Sustainable Energy Transformation
              </p>
              <p className="text-lg mb-8 italic">
                January 21-23, 2026 | IIT Kharagpur, India
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/registration"
                  className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  Register Now
                </Link>
                <Link
                  href="/about-event"
                  className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-md font-medium transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default Hero;