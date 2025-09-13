import React from 'react'
import PageLayout from '@/components/PageLayout'
import TeamCard from '@/components/TeamCard'
import organizers from '@/data/organizors'
import technicalCoordinators from '@/data/technicalcoordinator'


const Organizors = () => {
   


    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-4 text-center">Conference Organizers</h1>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Meet the dedicated team of professionals from IIT Kharagpur&apos;s Department of Metallurgical and Materials Engineering who are organizing this prestigious conference on Advanced Materials for Sustainable Energy.
                </p>
                <div className="flex flex-wrap -mx-4 mb-12">
                    {organizers.map((organizer, index) => (
                        <TeamCard key={index} {...organizer} />
                    ))}
                </div>

                {/* Technical Coordinator Section */}
                <h2 className="text-3xl font-bold mb-8 text-center">Technical Coordinator</h2>
                <div className="flex flex-wrap -mx-4 justify-center">
                    {technicalCoordinators.map((coordinator, index) => (
                        <TeamCard key={index} {...coordinator} />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Organizors
