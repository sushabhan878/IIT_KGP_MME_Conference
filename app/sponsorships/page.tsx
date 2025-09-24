"use client"
import React from 'react'
import PageLayout from '@/components/PageLayout'

const Sponsorships = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold mb-6">Sponsorships</h1>

                <div className="prose max-w-none mb-8">
                    <p className="mb-4">Sponsorship at FSEAM 2026 offers a unique opportunity to showcase your brand to leading researchers, industry professionals, and academicians in the fields of surface engineering and additive manufacturing. By partnering with us, your organization will gain visibility, connect with potential collaborators, and demonstrate its commitment to advancing sustainable technologies and innovations.</p>
                    <p className='mb-4'>Join us as a valued sponsor at FSEAM 2026 and showcase your brand to a global audience of researchers, industry leaders, and academicians. Explore our sponsorship opportunities and be part of advancing innovations in surface engineering and additive manufacturing.</p>
                    <p className='mb-8 font-extrabold text-blue-500 cursor-pointer' onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScfx65HP5ivkCaE6Cm1AKobg__EfytaRMMydLcZROrgLjqxYw/viewform', '_blank')}>[Click here to fill the Sponsorship Form]</p>
                    <p className="mb-4">We offer various sponsorship packages to suit your organization needs and budget.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    
                    <div className="border-2 border-white rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Platinum Sponsor</h3>
                            <p className="text-2xl font-bold mt-2">₹2,00,000 + Tax</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> Four delegates can attend the symposium.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span>  Two Keynote speakers can deliver a talk.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span>  No registration fee.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Local hospitality, including accommodation at the Technology Guest House.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 3 A space to set up an Exhibition Stall.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 3 Full page (colour) souvenir advertisement.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 3  Display of sponsorship in the Poster, Websites, Kit etc.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-2 border-white rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Gold Sponsor</h3>
                            <p className="text-2xl font-bold mt-2">₹100,000 + Tax</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> Two delegates can attend the symposium.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span>  One keynote speaker can deliver a talk.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> No registration fee.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Local hospitality, including accommodation at the Technology Guest House</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 2 Full page (colour) souvenir advertisement.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> 2 Display of sponsorship in the Poster, Websites, Kit etc.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-2 border-white rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-gray-400 to-gray-600 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Silver Sponsor</h3>
                            <p className="text-2xl font-bold mt-2">₹50,000</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> One delegate can attend the symposium.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span>  No registration fee.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Local hospitality, including accommodation at the Technology Guest
 House.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span>  Full page (colour) souvenir advertisement.</li>
                                <li className="flex items-center"><span className="mr-2">✓</span>   A space to set up an Exhibition Stall.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-2 border-white rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 text-center">
                            <h3 className="text-xl font-bold">Exhibitor advertisement</h3>
                            <p className="text-2xl font-bold mt-2">₹20,000 - ₹25,000</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-2">
                                <li className="flex items-center"><span className="mr-2">✓</span> Full Page (colour) : ₹25,000 + Tax</li>
                                <li className="flex items-center"><span className="mr-2">✓</span> Half Page (colour) : ₹20,000 + Tax</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg">
                    <h2 className="text-3xl font-bold mb-4">Contact for Sponsorship</h2>
                    <p className="mb-4">For more information about sponsorship opportunities, please contact:</p>
                    <div className='pb-6'>
                        <p className="font-medium">Tapas Bera | RS, IIT Kharagpur</p>
                        <p>Email: tapasbera6382@gmail.com</p>
                    </div>
                    <div>
                        <p className="font-medium">Kishan Kumar | RS, IIT Kharagpur</p>
                        <p>Email: kishan.knarayan@gmail.com</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Sponsorships
