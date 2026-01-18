import React from "react";

const ConferenceTopics = () => {
  const topics = [
    {
      title: "Additive Manufacturing",
      description:
        "Advanced layer-by-layer fabrication technologies enabling the creation of complex geometries and customized components with enhanced material efficiency.",
      subtopics: [
        "Metal 3D Printing and Laser-based Technologies",
        "Polymer and Composite AM Systems",
        "Process Monitoring and Quality Control",
        "Post-Processing and Surface Finishing",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      title: "Surface Engineering",
      description:
        "Cutting-edge techniques for modifying surface properties to enhance wear resistance, corrosion protection, and functional performance across diverse applications.",
      subtopics: [
        "Hard Coatings and Wear-Resistant Surfaces",
        "Corrosion Protection and Anti-fouling Coatings",
        "Biocompatible and Medical Surface Treatments",
        "Nanoscale Surface Modification",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Thermal Spraying",
      description:
        "High-performance coating deposition processes utilizing thermal energy to create protective and functional layers for industrial and aerospace applications.",
      subtopics: [
        "Plasma Spray and HVOF Technologies",
        "Cold Spray and Kinetic Coating Methods",
        "Ceramic and Metallic Coating Systems",
        "Thermal Barrier and Oxidation-Resistant Coatings",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Conference Topics
          </h2>
          <div className="w-24 h-1 bg-blue-800 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explore these key areas that will be covered during the conference
            sessions and presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-800"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 mr-4 text-blue-800 bg-blue-50 p-2 rounded-full">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {topic.title}
                </h3>
              </div>
              <div className="mb-4">
                <p className="text-gray-700">{topic.description}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  Key Focus Areas:
                </h4>
                <ul className="space-y-2">
                  {topic.subtopics.map((subtopic, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{subtopic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceTopics;
