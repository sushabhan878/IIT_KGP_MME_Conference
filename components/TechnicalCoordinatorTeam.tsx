import React from 'react';
import TeamCard from '@/components/TeamCard';

const technicalCoordinators = [
  {
    image: '/organizers/tech-coordinator1.jpg',
    name: 'Dr. S. K. Singh',
    title: 'Technical Coordinator, IIT Kharagpur',
    affiliation: 'Department of Metallurgical and Materials Engineering',
  },
  {
    image: '/organizers/tech-coordinator2.jpg',
    name: 'Dr. A. B. Sharma',
    title: 'Technical Coordinator',
    affiliation: 'Department of Metallurgical and Materials Engineering',
  },
  // Add more members as needed
];

const TechnicalCoordinatorTeam = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Technical Coordinator Team</h2>
      <div className="flex flex-wrap -mx-4 justify-center">
        {technicalCoordinators.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TechnicalCoordinatorTeam;
