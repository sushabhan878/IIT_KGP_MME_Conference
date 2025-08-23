import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutConference from '@/components/AboutConference'
import ImportantDates from '@/components/ImportantDates'
import ConferenceTopics from '@/components/ConferenceTopics'
import VenueInfo from '@/components/VenueInfo'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutConference />
        <ConferenceTopics />
        <ImportantDates />
        <VenueInfo />
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us at IIT Kharagpur</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Be part of this collaborative platform that will shape the future of energy through innovation of materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/registration"
                className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Register Now
              </a>
              <a
                href="/sponsorships"
                className="border border-white text-white hover:bg-white hover:text-blue-800 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Become a Sponsor
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
