import React from 'react'
import SpeakerCard from '@/components/SpeakerCard'
import foreignSpeakers from '@/data/foreignSpeakers'
import indianSpeakers from '@/data/indianSpeakers'
import PageLayout from '@/components/PageLayout'

const Speakers = () => {
  return (
    <PageLayout>
      <section className="py-16 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3 text-indigo-800">Speakers</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto"></div>
          <p className="mt-4 text-blue-900/70 max-w-2xl mx-auto">
            Distinguished speakers from academia and industry will share insights on advanced materials for sustainable energy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {foreignSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
          {indianSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
    </PageLayout>
    
  )
}

export default Speakers