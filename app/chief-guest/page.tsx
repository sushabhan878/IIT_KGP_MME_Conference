import PageLayout from "@/components/PageLayout";
import SpeakerCard from "@/components/SpeakerCard";
import React from "react";

const chiefGuests = [
  {
    name: "Prof. S. Somnath",
    affiliation: "Former Chairman, ISRO (INDIA)",
    imageUrl: "https://ik.imagekit.io/fseam/Speakers/OIP.webp",
  },
  {
    name: "Dr. Shivaji Chakraborty",
    affiliation: "President, WAST (INDIA)",
    imageUrl: "https://ik.imagekit.io/fseam/Speakers/pic52u5gso5vhxf7wem5.avif",
  },
  {
    name: "Mr. JD Patil",
    affiliation: "President, INAE (INDIA)",
    imageUrl: "https://ik.imagekit.io/fseam/Speakers/OIP%20(1).webp",
  },
  {
    name: "Prof. BS Murty",
    affiliation: "Director, IIT Hyderabad (INDIA)",
    imageUrl: "https://ik.imagekit.io/fseam/Speakers/director_murty.jpg",
  },
];

const page = () => {
  return (
    <PageLayout>
      <main className="container mx-auto px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-3">
            Chief Guests
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are honored to welcome our distinguished chief guests for FSEAM
            2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {chiefGuests.map((guest, index) => (
            <SpeakerCard
              key={index}
              name={guest.name}
              affiliation={guest.affiliation}
              image={guest.imageUrl}
            />
          ))}
        </div>
      </main>
    </PageLayout>
  );
};

export default page;
