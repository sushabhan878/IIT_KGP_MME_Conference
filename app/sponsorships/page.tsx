"use client";
import React from "react";
import PageLayout from "@/components/PageLayout";
import SponsorCard from "@/components/SponsorCard";
const Sponsorships = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold mb-6">Sponsorships</h1>

        {/* Our Sponsors Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h2>

          {/* Platinum Sponsor (Top) */}
          <div className="flex flex-wrap gap-6 justify-center mb-7">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500 flex-1 min-w-[220px] max-w-[320px]">
              <div className="flex flex-col items-center h-full">
                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/fseam/sponsors/OIP.webp"
                    alt="SPARK Logo"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">
                  SPARC
                </h4>
                <span className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  Platinum Sponsor
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500 flex-1 min-w-[220px] max-w-[320px]">
              <div className="flex flex-col items-center h-full">
                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202025-12-18%20at%2014.41.22.jpeg"
                    alt="ANRF Logo"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">
                  ANRF
                </h4>
                <span className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  Platinum Sponsor
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500 flex-1 min-w-[220px] max-w-[320px]">
              <div className="flex flex-col items-center h-full">
                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/fseam/sponsors/Indian_Space_Research_Organisation_Logo.svg"
                    alt="ISRO Logo"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">
                  ISRO
                </h4>
                <span className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  Platinum Sponsor
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-purple-500 flex-1 min-w-[220px] max-w-[320px]">
              <div className="flex flex-col items-center h-full">
                <div className="mb-4 h-24 w-full flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202026-01-06%20at%2023.47.41.jpeg"
                    alt="ISRO Logo"
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">
                  Indian National Science Academy (INSA)
                </h4>
                <span className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  Platinum Sponsor
                </span>
              </div>
            </div>
          </div>
          {/* Sponsors Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 place-items-center">
            {/* Technical Sponsor */}

            <SponsorCard
              name="INAE"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202026-01-06%20at%2018.13.26.jpeg"
              tier="Technical Sponsor"
              border="border-blue-400"
              badge="text-blue-700 bg-blue-100"
            />

            {/* Gold Sponsor */}

            <SponsorCard
              name="Damodar Valley Corporation (DVC)"
              logo="https://ik.imagekit.io/fseam/sponsors/Damodar_Valley_Corporation_Logo.svg"
              tier="Gold Sponsor"
              border="border-yellow-400"
              badge="text-yellow-700 bg-yellow-50"
            />

            <SponsorCard
              name="International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI)"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202026-01-12%20at%2021.45.03.jpeg"
              tier="Gold Sponsor"
              border="border-yellow-400"
              badge="text-yellow-700 bg-yellow-50"
            />

            <SponsorCard
              name="Ametek India"
              logo="https://ik.imagekit.io/fseam/sponsors/Ametek.webp"
              tier="Gold Sponsor"
              border="border-yellow-400"
              badge="text-yellow-700 bg-yellow-50"
            />

            <SponsorCard
              name="KAN-THT India"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202025-12-18%20at%2010.25.00.jpeg"
              tier="Gold Sponsor"
              border="border-yellow-400"
              badge="text-yellow-700 bg-yellow-50"
            />

            {/* Silver Sponsors */}
            <SponsorCard
              name="Carl Zeiss India"
              logo="https://ik.imagekit.io/fseam/sponsors/Zeiss-Logo.png"
              tier="Silver Sponsor"
              border="border-gray-400"
              badge="text-gray-700 bg-gray-100"
              logoSize="large"
            />

            <SponsorCard
              name="Jeol India"
              logo="https://ik.imagekit.io/fseam/sponsors/1725618304141.jpg"
              tier="Silver Sponsor"
              border="border-gray-400"
              badge="text-gray-700 bg-gray-100"
              logoSize="large"
            />

            <SponsorCard
              name="Forevision Instruments (INDIA) PVT. LTD."
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202025-12-31%20at%2021.12.30.jpeg"
              tier="Silver Sponsor"
              border="border-gray-400"
              badge="text-gray-700 bg-gray-100"
            />

            <SponsorCard
              name="Rtec Instruments"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202026-01-02%20at%2012.44.16.jpeg"
              tier="Silver Sponsor"
              border="border-gray-400"
              badge="text-gray-700 bg-gray-100"
            />

            <SponsorCard
              name="IR Technology Services Pvt Ltd"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202026-01-09%20at%2015.01.49.jpeg"
              tier="Silver Sponsor"
              border="border-gray-400"
              badge="text-gray-700 bg-gray-100"
              logoSize="large"
            />

            {/* Bronze Sponsors */}

            <SponsorCard
              name="CSIR-IMMT"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202026-01-06%20at%2018.06.33.jpeg"
              tier="Bronze Sponsor"
              border="border-orange-400"
              badge="text-orange-700 bg-orange-100"
              logoSize="large"
            />
            <SponsorCard
              name="Steel Authority of India Limited"
              logo="https://ik.imagekit.io/fseam/sponsors/OIP%20(2).webp"
              tier="Bronze Sponsor"
              border="border-orange-400"
              badge="text-orange-700 bg-orange-100"
              logoSize="large"
            />
            <SponsorCard
              name="The Center of Artificial Intelligence and Environmental Sustainability (CAIES)"
              logo="https://ik.imagekit.io/fseam/sponsors/WhatsApp%20Image%202025-12-11%20at%2013.53.37.jpeg"
              tier="Bronze Sponsor"
              border="border-orange-400"
              badge="text-orange-700 bg-orange-100"
            />
            <SponsorCard
              name="Ducom Instruments"
              logo="https://ik.imagekit.io/fseam/sponsors/OIP%20(1).webp"
              tier="Bronze Sponsor"
              border="border-orange-400"
              badge="text-orange-700 bg-orange-100"
            />
            <SponsorCard
              name="Laserline Inc."
              logo="https://ik.imagekit.io/fseam/sponsors/OIP%20(3).webp"
              tier="Bronze Sponsor"
              border="border-orange-400"
              badge="text-orange-700 bg-orange-100"
              logoSize="large"
            />
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="mb-4">
            Sponsorship at FSEAM 2026 offers a unique opportunity to showcase
            your brand to leading researchers, industry professionals, and
            academicians in the fields of surface engineering and additive
            manufacturing. By partnering with us, your organization will gain
            visibility, connect with potential collaborators, and demonstrate
            its commitment to advancing sustainable technologies and
            innovations.
          </p>
          <p className="mb-4">
            Join us as a valued sponsor at FSEAM 2026 and showcase your brand to
            a global audience of researchers, industry leaders, and
            academicians. Explore our sponsorship opportunities and be part of
            advancing innovations in surface engineering and additive
            manufacturing.
          </p>
          <p
            className="mb-8 font-extrabold text-blue-500 cursor-pointer"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScfx65HP5ivkCaE6Cm1AKobg__EfytaRMMydLcZROrgLjqxYw/viewform",
                "_blank"
              )
            }
          >
            [Click here to fill the Sponsorship Form]
          </p>
          <p className="mb-4">
            We offer various sponsorship packages to suit your organization
            needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="border-2 border-white rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-4 text-center">
              <h3 className="text-xl font-bold">Platinum Sponsor</h3>
              <p className="text-2xl font-bold mt-2">₹2,00,000 + Tax</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Four delegates can attend the
                  symposium.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Two Keynote speakers can
                  deliver a talk.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> No registration fee.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Local hospitality, including
                  accommodation at the Technology Guest House.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 3 A space to set up an
                  Exhibition Stall.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 3 Full page (colour) souvenir
                  advertisement.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 3 Display of sponsorship in
                  the Poster, Websites, Kit etc.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-white rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 text-center">
              <h3 className="text-xl font-bold">Gold Sponsor</h3>
              <p className="text-2xl font-bold mt-2">₹100,000 + Tax</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Two delegates can attend the
                  symposium.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> One keynote speaker can
                  deliver a talk.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> No registration fee.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Local hospitality, including
                  accommodation at the Technology Guest House
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 2 Full page (colour) souvenir
                  advertisement.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> 2 Display of sponsorship in
                  the Poster, Websites, Kit etc.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-white rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white p-4 text-center">
              <h3 className="text-xl font-bold">Silver Sponsor</h3>
              <p className="text-2xl font-bold mt-2">₹50,000</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> One delegate can attend the
                  symposium.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> No registration fee.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Local hospitality, including
                  accommodation at the Technology Guest House.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Full page (colour) souvenir
                  advertisement.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> A space to set up an
                  Exhibition Stall.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-2 border-white rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 text-center">
              <h3 className="text-xl font-bold">Exhibitor advertisement</h3>
              <p className="text-2xl font-bold mt-2">₹20,000 - ₹25,000</p>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Full Page (colour) : ₹25,000 +
                  Tax
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Half Page (colour) : ₹20,000 +
                  Tax
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Contact for Sponsorship</h2>
          <p className="mb-4">
            For more information about sponsorship opportunities, please
            contact:
          </p>
          <div className="pb-6">
            <p className="font-medium">Tapas Bera | RS, IIT Kharagpur</p>
            <p>Email: tapasbera6382@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Kishan Kumar | RS, IIT Kharagpur</p>
            <p>Email: kishan.knarayan@gmail.com</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Sponsorships;
