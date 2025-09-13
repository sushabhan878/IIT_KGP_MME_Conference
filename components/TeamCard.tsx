
import React from "react";
import Image from "next/image";

interface TeamCardProps {
    image: string;
    name: string;
    title: string;
    affiliation?: string;
}

const TeamCard = ({ image, name, title, affiliation }: TeamCardProps) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white text-center w-full relative overflow-hidden rounded-2xl shadow-xl p-8 group border-2 border-transparent hover:border-blue-400 transition-all duration-300">
                <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-700 opacity-30 scale-105 group-hover:opacity-60 transition-all duration-300"></div>
                    <Image
                        className="relative w-full h-full object-cover rounded-full border-4 border-blue-400 shadow-lg transition-transform duration-700 ease-in-out group-hover:scale-95 group-hover:shadow-[0_0_0_10px_#e0f2fe]"
                        src={image}
                        alt={name}
                        width={128}
                        height={128}
                    />
                </div>
                <div className="team-content">
                    <h3 className="text-2xl font-bold text-blue-700 mb-1 tracking-tight">{name}</h3>
                    <h4 className="text-base text-gray-700 capitalize mb-2 font-medium">{title}</h4>
                    {affiliation && <p className="text-sm text-gray-500 mt-1 italic">{affiliation}</p>}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
