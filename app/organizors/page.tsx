import React from 'react'
import PageLayout from '@/components/PageLayout'

const Organizors = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6">Organizers</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Photo</span>
                        </div>
                        <h3 className="text-xl font-semibold">Prof. Amit Kumar</h3>
                        <p className="text-gray-600">Conference Chair</p>
                        <p className="text-sm mt-2">Department of Metallurgical and Materials Engineering</p>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Photo</span>
                        </div>
                        <h3 className="text-xl font-semibold">Dr. Priya Sharma</h3>
                        <p className="text-gray-600">Technical Program Chair</p>
                        <p className="text-sm mt-2">Department of Metallurgical and Materials Engineering</p>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                            <span className="text-gray-500">Photo</span>
                        </div>
                        <h3 className="text-xl font-semibold">Dr. Rajesh Patel</h3>
                        <p className="text-gray-600">Organizing Secretary</p>
                        <p className="text-sm mt-2">Department of Metallurgical and Materials Engineering</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Organizors
