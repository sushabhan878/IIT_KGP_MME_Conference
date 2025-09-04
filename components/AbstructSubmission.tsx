import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AbstructSubmission = () => {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
        Abstract Submission
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
        <p className="text-lg mb-4 text-gray-700">
          We invite researchers, academicians, industry professionals, and students to submit abstracts for oral and poster presentations at FSEAM 2026. All submissions should present original research, case studies, or innovative practices relevant to the conference themes.
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Abstracts must be written in English and should not exceed 300 words.</li>
          <li>Include the title, author(s) name(s), affiliation(s), and contact email.</li>
          <li>Clearly state the objectives, methodology, results, and conclusions.</li>
          <li>All abstracts will be peer-reviewed by the scientific committee.</li>
        </ul>
        <p className="mb-4 text-gray-700">
          Accepted abstracts will be notified via email. Selected abstracts may be invited for full paper submission or special sessions.
        </p>
        <div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <strong className='text-black'>Submission Deadline:</strong> <span className="text-blue-700">September 30, 2025</span>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <strong className='text-black'>Abstract Template:</strong> <span className="text-blue-700">https://shorturl.at/Wxuoq</span>
          </div>
        </div>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeMzx1lrdk2zbNZLX19_3G0AyqmJkTgPxTS_bZaUJeRA2S5ow/viewform?usp=header" 
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow hover:from-blue-600 hover:to-blue-800 transition-colors mb-8"
          
        >
          Submit Your Abstract
        </Link>

        {/* QR Code Section */}
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Scan to submit your abstract</h2>
          <div className="bg-white p-4 rounded-lg shadow border border-blue-200 flex flex-col items-center">
            <Image
              src="/qr.png"
              alt="QR code for abstract submission"
              className="w-40 h-40 object-contain mb-2"
              width={160}
              height={160}
            />
            <span className="text-xs text-gray-500">Scan this QR code to access the abstract submission portal on your mobile device.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AbstructSubmission
