import React from "react";
import Image from "next/image";

interface SpeakerCardProps {
  image: string;
  name: string;
  talkTitle?: string;
  duration?: string;
  affiliation?: string;
  email?: string;
  origin?: 'foreign' | 'indian';
}

const SpeakerCard = ({ image, name, talkTitle, duration, affiliation, email, origin }: SpeakerCardProps) => {
  const badgeLabel = origin === 'foreign' ? 'Foreign Keynote Speaker' : origin === 'indian' ? 'Indian Keynote Speaker' : 'Keynote Speaker'

  return (
    <div
      className="group relative overflow-hidden rounded-3xl border border-indigo-100/70 bg-white/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      aria-label={`${name} speaker card`}
    >
      <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-200/40 blur-3xl transition-opacity duration-500 group-hover:opacity-70" aria-hidden />
      <div className="absolute -bottom-16 left-0 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl transition-opacity duration-500 group-hover:opacity-80" aria-hidden />

      <div className="relative px-8 pt-10 pb-6 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-500">
          {badgeLabel}
        </span>
        <div className="relative w-32 h-32 mt-5 mb-4">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            unoptimized
            className="rounded-full object-cover w-32 h-32 border-[6px] border-white shadow-xl ring-2 ring-indigo-200/70 group-hover:ring-indigo-300"
          />
        </div>
        <h3 className="text-2xl font-semibold text-indigo-900 tracking-tight">{name}</h3>
        <p className="text-sm text-indigo-700/80">{affiliation ?? "Affiliation to be announced"}</p>
      </div>

      <div className="relative space-y-5 px-8 pb-8">
        <div className="rounded-2xl bg-white/70 p-4 shadow-inner ring-1 ring-indigo-50/80 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-wider text-indigo-500 font-semibold">Featured Talk</p>
          <h4 className="mt-2 text-lg font-semibold text-indigo-900 leading-snug">
            {talkTitle ?? "Talk details coming soon"}
          </h4>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-500" />
            {duration ?? "Duration to be announced"}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-500/10 via-indigo-500/5 to-blue-500/10 px-4 py-3 text-sm text-indigo-700">
          <span className="font-semibold text-indigo-800">Contact</span>
          {email ? (
            <a
              className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-semibold"
              href={`mailto:${email}`}
            >
              <span className="hidden sm:inline">{email}</span>
              <span className="sm:hidden">Email</span>
            </a>
          ) : (
            <span className="text-indigo-500/80">Email to be announced</span>
          )}
        </div>

        <div className="absolute inset-x-0 -bottom-6 mx-auto h-12 w-11/12 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden />
      </div>
    </div>
  );
};

export default SpeakerCard;

