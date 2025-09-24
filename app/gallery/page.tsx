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
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1758737922/1_myojmu.jpg" alt="Gallery 1" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1758737922/2_ycucsn.jpg" alt="Gallery 2" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1758737922/3_xqrpul.jpg" alt="Gallery 3" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1758737923/4_ei52hy.jpg" alt="Gallery 4" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1758737923/5_ghic3g.jpg" alt="Gallery 5" className="object-cover w-full h-full" />
                    </div>
                    <div className="h-140 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <img src="https://res.cloudinary.com/damnmi4ya/image/upload/v1758737922/6_liiinh.jpg" alt="Gallery 6" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Gallery
