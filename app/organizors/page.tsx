import React from 'react'
import PageLayout from '@/components/PageLayout'
import TeamCard from '@/components/TeamCard'


const Organizors = () => {
    const organizers = [
        {
            image: "/organizers/vikram-roy.jpg",
            name: "Dr. Vikram Roy",
            title: "Local Arrangements Chair",
            socials: [
                { icon: "fas fa-envelope", link: "mailto:vikram.roy@metal.iitkgp.ac.in" },
                { icon: "fab fa-linkedin", link: "https://www.linkedin.com/" },
            ],
        },
    ];

    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-4 text-center">Conference Organizers</h1>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Meet the dedicated team of professionals from IIT Kharagpur's Department of Metallurgical and Materials Engineering who are organizing this prestigious conference on Advanced Materials for Sustainable Energy.
                </p>
                <div className="flex flex-wrap -mx-4">
                    {organizers.map((organizer, index) => (
                        <TeamCard key={index} {...organizer} />
                    ))}
                </div>
            </div>
        </PageLayout>
    )
}

export default Organizors
