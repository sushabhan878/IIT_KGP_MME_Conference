import React from 'react';

const AboutConference = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About The Conference</h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              The International Conference on Frontiers in Surface Engineering and Additive Manufacturing (FSEAM 2026) will be held from January 21–23, 2026 at IIT Kharagpur. The event will bring together experts from academia, industry, and research to discuss the latest developments in surface engineering and additive manufacturing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Key themes include advanced coatings, surface modification, additive manufacturing, hybrid processes, and material applications across sectors such as energy, aerospace, automotive, and biomedical engineering. The conference will focus on how these technologies are driving innovation, efficiency, and sustainability.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              FSEAM 2026 aims to foster collaboration and knowledge exchange, highlighting the transformative role of surface engineering and additive manufacturing in shaping the future of materials and manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">Industry Insights</h3>
              <p className="text-gray-700">Connect with industry leaders and gain valuable insights into the latest trends and technologies.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">Research Innovations</h3>
              <p className="text-gray-700">Discover cutting-edge research and innovations in materials science and engineering.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">Networking</h3>
              <p className="text-gray-700">Build valuable connections with peers, researchers, and industry professionals.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-800 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-500">Academic Excellence</h3>
              <p className="text-gray-700">Engage with leading academic institutions and their groundbreaking research.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;