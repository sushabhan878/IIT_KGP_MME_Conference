import React from 'react'
import PageLayout from '@/components/PageLayout'

const Sponsorships = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6">Sponsorships</h1>
                
                <div className="prose max-w-none mb-8">
                    <p className="mb-4">Support the International Conference on Advanced Materials for Sustainable Energy Systems and connect with leading researchers, academics, and industry professionals in the field of materials engineering.</p>
                    <p className="mb-4">We offer various sponsorship packages to suit your organization's needs and budget.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="border rounded-lg overflow-hidden">
                        <div className="bg-blue-600 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Gold Sponsor</h3>
                            <p className="text-2xl font-bold mt-2">₹2,00,000</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> Premium logo placement</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Exhibition booth</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 5 complimentary registrations</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Full-page ad in program</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Speaking opportunity</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-700 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Silver Sponsor</h3>
                            <p className="text-2xl font-bold mt-2">₹1,00,000</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> Logo on all materials</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Exhibition space</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 3 complimentary registrations</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Half-page ad in program</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                        <div className="bg-yellow-600 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Bronze Sponsor</h3>
                            <p className="text-2xl font-bold mt-2">₹50,000</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> Logo on website</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Display space</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 1 complimentary registration</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Quarter-page ad in program</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Contact for Sponsorship</h2>
                    <p className="mb-4">For more information about sponsorship opportunities, please contact:</p>
                    <p className="font-medium">Dr. Sponsorship Coordinator</p>
                    <p>Email: sponsorship@mme.iitkgp.ac.in</p>
                    <p>Phone: +91-123-456-7890</p>
                </div>
            </div>
        </PageLayout>
    )
}

export default Sponsorships
