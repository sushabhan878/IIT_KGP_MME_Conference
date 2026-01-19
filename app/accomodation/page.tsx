"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import Image from "next/image";

const Accomodation = () => {
  const guestHouses = [
    {
      id: 1,
      name: "TGH (Technology Guest House)",
      description:
        "A premier accommodation facility offering comfortable and well-maintained rooms with modern amenities, high-speed WiFi, and excellent service. Located centrally on campus for easy access to all conference venues.",
      image:
        "https://ik.imagekit.io/fseam/c9323c_d8596828fab64fb5bc9d1222bfaaa9da.avif",
      latitude: 22.31557,
      longitude: 87.3038,
      locationName: "Technology Guest House, IIT Kharagpur",
    },
    {
      id: 2,
      name: "BRH (BR Ambedkar Hall Guest House)",
      description:
        "Spacious residential accommodation with air conditioning, attached bathrooms, and multi-cuisine dining facility. Perfect for both short and extended stays with 24/7 support services.",
      image: "https://ik.imagekit.io/fseam/OIP%20(1).webp",
      latitude: 22.316785551393192,
      longitude: 87.29608044047738,
      locationName: "BR Ambedkar Hall Guest House, IIT Kharagpur",
    },
    {
      id: 3,
      name: "SAM (Shyama Prasad Mukherjee Guest House)",
      description:
        "Modern accommodation facility with conference-ready infrastructure, room service, and dedicated reception area. Ideal for conference participants seeking premium comfort and convenience.",
      image: "https://ik.imagekit.io/fseam/OIP.webp",
      latitude: 22.3118,
      longitude: 87.3065,
      locationName: "Shyama Prasad Mukherjee Guest House, IIT Kharagpur",
    },
  ];

  const openGoogleMaps = (latitude: number, longitude: number) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4 max-w-8xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3 text-indigo-800">
            Accommodation
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto"></div>
        </div>

        {/* Important Notice Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 mb-8 border-2 border-blue-200">
          <div className="flex items-start mb-6">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Greetings from IIT Kharagpur
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-base leading-relaxed">
                  On behalf of the Organizing Committee, we kindly request you
                  to fill in the following Google Form so that we can make the
                  necessary arrangements for your accommodation and schedule
                  your talk as per your convenience. Please submit your response{" "}
                  <strong className="text-blue-900">
                    on or before 31 December 2025
                  </strong>
                  .
                </p>
                <p className="text-base leading-relaxed">
                  Your input will greatly help us plan accommodation, logistics,
                  travel support, and other arrangements smoothly.
                </p>
              </div>
            </div>
          </div>

          {/* Google Form Link Section */}
          <div className="mt-8 pt-6 border-t-2 border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Google Form Link:
            </h3>
            <div className="bg-white rounded-lg p-4 border-2 border-blue-300 hover:border-blue-500 transition-colors">
              <a
                href="https://forms.gle/H8xEK5d3c215ycrX7"
                className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Access Google Form
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="text-sm text-gray-600 mt-3 text-center">
                Click the button above to access the accommodation and talk
                scheduling form
              </p>
            </div>
          </div>
        </div>

        {/* Stay Details Section */}
        <section className="mt-12 border-t pt-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-800">
            Available Guest Houses
          </h2>

          <p className="mb-6 text-gray-700">
            Plan your stay at IIT KGP with comfortable and convenient guest
            houses. We offer a range of accommodation options to suit your needs
            during the conference. Download detailed stay information and
            contact details below.
          </p>

          <a
            href="/stay-details.pdf"
            download
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold mb-8 transition-colors"
          >
            📥 Download Stay Details & Contact Info
          </a>

          {/* Guest Houses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {guestHouses.map((house) => (
              <div
                key={house.id}
                className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Guest House Image */}
                <div className="relative w-full h-56 bg-gray-300">
                  <Image
                    src={house.image}
                    alt={house.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Guest House Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-indigo-700">
                    {house.name}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    {house.description}
                  </p>

                  {/* Locate Button */}
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps?q=${encodeURIComponent(house.locationName)}`,
                        "_blank",
                      )
                    }
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors font-semibold"
                  >
                    📍 View Location on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Accomodation;
