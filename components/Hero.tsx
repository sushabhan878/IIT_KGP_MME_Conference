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
        >
          <source src="https://res.cloudinary.com/damnmi4ya/video/upload/v1755942647/iitkgp_1_tmoyb9.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div>
        <div className="relative z-10 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className='text-6xl z-20 font-bold justify-center align-middle flex-center pb-6'>Join Us at <span className='text-7xl text-blue-400'>IIT Kharagpur</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className='z-20'>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-100 to-blue-500 text-transparent bg-clip-text">
                International Conference on Frontiers in Surface Engineering and Additive Manufacturing
              </h1>
              <p className="text-xl mb-6">
                Exploring Advanced Materials and Critical Minerals for Sustainable Energy Transformation
              </p>
              <p className="text-lg mb-8 italic">
                December 3-6, 2023 | IIT Kharagpur, India
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