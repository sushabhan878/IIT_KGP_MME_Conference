import React from "react";
import Image from "next/image";

interface SpeakerCardProps {
  image: string;
  name: string;
  affiliation?: string;
}

const SpeakerCard = ({ image, name, affiliation }: SpeakerCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-indigo-100/70 bg-white/90 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl" aria-label={`${name} speaker card`}>
      <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl transition-opacity duration-500 group-hover:opacity-70" aria-hidden />
      <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl transition-opacity duration-500 group-hover:opacity-80" aria-hidden />

      <div className="relative flex flex-col items-center px-8 pt-10 pb-8 text-center space-y-4">
        <div className="relative w-32 h-32">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            unoptimized
            className="rounded-full object-cover w-32 h-32 border-[6px] border-white shadow-xl ring-2 ring-indigo-200/70 group-hover:ring-indigo-300"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold text-indigo-900 tracking-tight">{name}</h3>
          <p className="text-sm text-indigo-700/80">{affiliation ?? 'Affiliation to be announced'}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;

