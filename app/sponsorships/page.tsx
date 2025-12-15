"use client"
import React from 'react'
import PageLayout from '@/components/PageLayout'

const Sponsorships = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold mb-6">Sponsorships</h1>

                {/* Our Sponsors Section */}
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h2>
                    
                    {/* Row 1: Gold and Silver Sponsors */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6">
                        {/* Gold Sponsor 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765429976/p-1290-9-ametek-logo-png-transparent-logo-591548730419_mm7efi.png" 
                                        alt="Ametek India Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">Ametek India</h4>
                                <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Gold Sponsor</span>
                            </div>
                        </div>
                        
                        {/* Gold Sponsor 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-yellow-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765429985/kan-logo-kan-letter-kan-letter-logo-design-initials-kan-logo-linked-with-circle-and-uppercase-monogram-logo-kan-typography-for-technology-busines-2RCM6X3-removebg-preview_xk81ek.png" 
                                        alt="KAN-THT India Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">KAN-THT India</h4>
                                <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">Gold Sponsor</span>
                            </div>
                        </div>
                        
                        {/* Silver Sponsor 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-gray-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765429976/Carl_Zeiss_AG-Logo.wine_p0uxrr.png" 
                                        alt="Carl Ziss India Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">Carl Ziss India</h4>
                                <span className="text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full">Silver Sponsor</span>
                            </div>
                        </div>
                        
                        {/* Silver Sponsor 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-gray-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765429984/jeol_ogp-removebg-preview_l2dowm.png" 
                                        alt="Jeol India Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">Jeol India</h4>
                                <span className="text-xs font-medium text-gray-600 bg-gray-50 px-3 py-1 rounded-full">Silver Sponsor</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Row 2: Non-Categorized Sponsors */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* Sponsor 1 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765430782/logo_ducom-removebg-preview_lzu0xr.png" 
                                        alt="Ducom Instruments Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">Ducom Instruments</h4>
                            </div>
                        </div>
                        
                        {/* Sponsor 2 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765430783/steel-authority-of-india-vector-logo-115742587135vlvf4po38-removebg-preview_wytnko.png" 
                                        alt="Steel Authority of India Limited Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">Steel Authority of India Limited</h4>
                            </div>
                        </div>
                        
                        {/* Sponsor 3 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765782093/WhatsApp_Image_2025-12-11_at_13.53.37_jrqfzw.jpg" 
                                        alt="CAIES Foundation Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-base font-semibold text-center mb-2 text-gray-900">The Center of Artificial Intelligence and Environmental Sustainability (CAIES)</h4>
                                {/* <h4 className="text-base font-semibold text-center mb-2 text-gray-900">CAIES</h4> */}
                            </div>
                        </div>
                        
                        {/* Sponsor 4 */}
                        <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-400 flex-1 min-w-[200px] max-w-[280px]">
                            <div className="flex flex-col items-center h-full">
                                <div className="mb-4 h-24 w-full flex items-center justify-center">
                                    <img 
                                        src="https://res.cloudinary.com/damnmi4ya/image/upload/v1765430790/CSIR_skfcbs.png" 
                                        alt="CSIR-CSIO Logo" 
                                        className="h-full w-full object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-center mb-2 text-gray-900">CSIR-CSIO</h4>
                            </div>
                        </div>
                    </div>
                </div>

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
