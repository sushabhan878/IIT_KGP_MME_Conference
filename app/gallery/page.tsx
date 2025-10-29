import React from 'react'
import PageLayout from '@/components/PageLayout'

const Gallery = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold mb-6">Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* 6 images, 3 per row on desktop, 2 rows; continuous on mobile */}
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729047/1_xjqyio.png" alt="Gallery 1" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729047/2_uw802r.png" alt="Gallery 2" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729047/3_snwocn.png" alt="Gallery 3" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729047/4_idngqc.png" alt="Gallery 4" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729047/5_udk4qb.png" alt="Gallery 5" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729047/6_y8i339.png" alt="Gallery 6" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1761729048/7_uyo97k.png" alt="Gallery 6" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Gallery
