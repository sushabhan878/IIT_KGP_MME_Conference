import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutConference from "@/components/AboutConference";
import ImportantDates from "@/components/ImportantDates";
import ConferenceTopics from "@/components/ConferenceTopics";
import VenueInfo from "@/components/VenueInfo";
import Footer from "@/components/Footer";
import Link from "next/link";
import AbstructSubmission from "@/components/AbstructSubmission";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Full-width marquee highlighting abstract submission extension */}
        {/* <div className="sticky top-16 z-40 mx-[calc(50%-50vw)] w-screen border-y border-yellow-400/40 bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100">
          <div className="relative overflow-hidden marquee-viewport">
            <div className="animate-marquee-immediate whitespace-nowrap py-3 text-amber-900">
              <span className="px-10 font-semibold tracking-wider uppercase">
                Last date of abstract submission is extended till 31st December!
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-medium uppercase">
                Submit yours today
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-semibold tracking-wider uppercase">
                Last date of abstract submission is extended till 31st December!
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-medium uppercase">
                Submit yours today
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-semibold tracking-wider uppercase">
                Last date of abstract submission is extended till 31st December!
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-medium uppercase">
                Submit yours today
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-semibold tracking-wider uppercase">
                Last date of abstract submission is extended till 31st December!
              </span>
              <span className="px-6 text-amber-900/60">•</span>
              <span className="px-10 font-medium uppercase">
                Submit yours today
              </span>
            </div>
          </div>
        </div> */}

        {/* Full-width marquee highlighting publishers */}
        <div className="sticky top-16 z-40 mx-[calc(50%-50vw)] w-screen border-y border-blue-400/30 bg-gradient-to-r from-blue-500/80 via-blue-400/50 to-blue-500/80 backdrop-blur-sm">
          <div className="relative overflow-hidden marquee-viewport">
            <div className="animate-marquee-immediate whitespace-nowrap py-3 text-black">
              <span className="px-10 font-semibold tracking-wider uppercase">
                Lasers in Engineering | Old City Publishing
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-medium uppercase">
                Transactions INAE | Indian National Academy of Engineering
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-medium uppercase">
                Journal of Materials Engineering and Performance | Springer
                Nature
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-semibold tracking-wider uppercase">
                Selected papers will be published in peer-reviewed journals
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-medium uppercase">
                Lasers in Engineering | Old City Publishing
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-semibold tracking-wider uppercase">
                Transactions INAE | Indian National Academy of Engineering
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-medium uppercase">
                Journal of Materials Engineering and Performance | Springer
                Nature
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-medium uppercase">
                Selected papers will be published in peer-reviewed journals
              </span>
              <span className="px-6 text-black">•</span>
              <span className="px-10 font-semibold tracking-wider uppercase">
                Selected papers will be published in peer-reviewed journals
              </span>
              <span className="px-6 text-black">•</span>
            </div>
          </div>
        </div>

        <Hero />

        {/* Simple logos strip with no background */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h3 className="sr-only">Partner Institutes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center justify-items-center">
              <Image
                src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761728513/unnamed-removebg-preview_anhcz6.png"
                alt="IIT Kharagpur"
                width={300}
                height={140}
                className="h-20 sm:h-24 md:h-28 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
              <Image
                src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761728513/1687785782phpmmSmvn-removebg-preview_fol0dr.png"
                alt="BIT Mesra"
                width={300}
                height={140}
                className="h-20 sm:h-24 md:h-28 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
              <Image
                src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761728697/img-01-removebg-preview_iaxx2k.png"
                alt="INAE"
                width={300}
                height={140}
                className="h-20 sm:h-24 md:h-28 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
              <Image
                src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761728513/IAAM-Logo-R-2048x2031-removebg-preview_pfqhdf.png"
                alt="IAAM"
                width={300}
                height={140}
                className="h-20 sm:h-24 md:h-28 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
              <Image
                src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761728514/WAST1-removebg-preview_ufppii.png"
                alt="WAST"
                width={300}
                height={140}
                className="h-20 sm:h-24 md:h-28 w-auto opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
              />
            </div>
          </div>
        </section>

        <AboutConference />
        <ConferenceTopics />
        <ImportantDates />
        <VenueInfo />
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Us at IIT Kharagpur
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of this collaborative platform that will shape the future
              of energy through innovation of materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/registration"
                className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Register Now
              </Link>
              <Link
                href="/sponsorships"
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
