import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className='text-5xl'>International Conference</span> on Frontiers in Surface Engineering and Additive Manufacturing
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
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
              <img
                src="/iitkgpvectornobg.png"
                alt="IIT Kharagpur"
                className="w-full h-auto rounded-4xl shadow-5xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;