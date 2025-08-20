import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutConference from '@/components/AboutConference'
import ImportantDates from '@/components/ImportantDates'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutConference />
        <ImportantDates />
      </main>
      <Footer />
    </div>
  )
}

export default Home
