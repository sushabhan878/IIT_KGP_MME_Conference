import React from 'react'
import PageLayout from '@/components/PageLayout'

const Gallery = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6">Gallery</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Placeholder images - replace with actual conference images */}
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 1</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 2</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 3</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 4</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 5</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 6</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 7</div>
                    </div>
                    <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-gray-500">Image 8</div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default Gallery
