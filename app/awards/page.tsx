import React from 'react'
import PageLayout from '@/components/PageLayout'

const Awards = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold mb-6">Awards</h1>
                <div className="prose max-w-none">
                    <p className="mb-4">The International Conference on Advanced Materials for Sustainable Energy Systems recognizes outstanding contributions in the field through the following awards:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Best Paper Award</h3>
                            <p>Recognizing exceptional research contributions presented at the conference.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">Young Researcher Award</h3>
                            <p>Honoring promising early-career researchers making significant contributions to the field.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Awards
