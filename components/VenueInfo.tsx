import Image from 'next/image';
import React from 'react';

const VenueInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Venue</h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/iitkgpvectornobg.png"
              alt="IIT Kharagpur Campus"
              className="w-full h-auto"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IIT Kharagpur</h3>
            <p className="text-lg text-gray-700 mb-6">
              IIT Kharagpur is located in the town of Kharagpur, in the state of West Bengal, India. It is approximately 116 km west of Kolkata and is well connected by road and rail.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-semibold text-blue-800 mb-3">How to Reach</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>By Air:</strong> Nearest airport is Netaji Subhas Chandra Bose International Airport, Kolkata (116 km)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>By Train:</strong> Kharagpur Junction Railway Station (5 km from campus)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>By Road:</strong> Well-connected by National Highway 16</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.google.com/maps/place/IIT+Kharagpur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
            >
              View on Map
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueInfo;