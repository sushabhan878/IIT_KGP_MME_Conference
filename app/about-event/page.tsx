import React from 'react'
import PageLayout from '@/components/PageLayout'

const AboutEvent = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6">About Event</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">Welcome to the International Conference on Advanced Materials for Sustainable Energy Systems, hosted by the Department of Metallurgical and Materials Engineering at IIT Kharagpur.</p>
                    <p className="mb-4">This conference brings together leading researchers, industry professionals, and academics to discuss the latest advancements in materials engineering for sustainable energy applications.</p>
                </div>
            </div>
        </PageLayout>
    )
}

export default AboutEvent
