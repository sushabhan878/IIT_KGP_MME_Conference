import React from 'react'
import PageLayout from '@/components/PageLayout'
import Image from 'next/image'

const AboutEvent = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6">About Conference</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className="prose max-w-none">
                        <p className="mb-4">The International Conference on Frontiers in Surface Engineering and Additive Manufacturing (FSEAM 2026) will be held from 21st to 23rd January 2026 at IIT Kharagpur, jointly organized by the Department of Metallurgical and Materials Engineering, IIT Kharagpur, and the Birla Institute of Technology, Mesra.</p>
                        <p className="mb-4">Surface engineering provides innovative ways to tailor durability, performance, and functionality by modifying the surfaces of materials, while additive manufacturing revolutionizes component design and fabrication with advanced one-step processing. Together, these technologies are transforming industries by enabling smarter, sustainable, and highly efficient material solutions.</p>
                        <p className='mb-6'>FSEAM 2026 aims to serve as a global platform for academia, industry professionals, and researchers to exchange knowledge, share achievements, and foster collaborations. The conference will feature scientific talks, technical sessions, and thematic discussions across diverse domains, showcasing innovations that bridge fundamental science with industrial applications. A special session will also honor the pioneering contributions of Prof. Manna, whose remarkable work laid the foundation for surface engineering at both IIT Kharagpur and BIT Mesra.</p>
                    </div>
                    <div className="relative w-fit mx-auto bottom-25 left-30">
                        <Image
                            src="https://res.cloudinary.com/damnmi4ya/image/upload/v1756289004/iit-kgp_fxdv2y.jpg"
                            alt="IIT Kharagpur"
                            className="object-cover rounded-xl shadow-lg border-4 border-white"
                            width={300}
                            height={180}
                        />
                        <Image
                            src="https://res.cloudinary.com/damnmi4ya/image/upload/v1756289012/bits-mishra_esjwhc.webp"
                            alt="BIT Mesra"
                            className="object-cover rounded-xl shadow-lg absolute -bottom-35 -left-55 border-4 border-white"
                            width={300}
                            height={180}
                        />
                        </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default AboutEvent
