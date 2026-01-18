import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AbstructSubmission = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-24 pb-16">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-50">
            Abstract Submission
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            We invite researchers, academicians, industry professionals, and students to submit abstracts for oral and poster presentations.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-slate-900/40">
              <h2 className="text-2xl font-semibold mb-4 text-slate-50">
                Submission Guidelines
              </h2>
              <p className="text-slate-300 mb-6 text-base leading-relaxed">
                All submissions should present original research, case studies, or innovative practices relevant to the conference themes.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Abstracts must be written in English and should not exceed 250 words.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Include the title, author(s) name(s), affiliation(s), and contact email.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>Clearly state the objectives, methodology, results, and conclusions.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <span className="text-amber-400 mt-1">•</span>
                  <span>All abstracts will be peer-reviewed by the scientific committee.</span>
                </li>
              </ul>

              <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
                <p className="mb-0">
                  Accepted abstracts will be notified via email. Selected abstracts may be invited for full paper submission or special sessions.
                </p>
              </div>
            </div>

            {/* Important Information Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-5 shadow-lg shadow-slate-900/40">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-400 mb-1">Submission Deadline</h3>
                    <p className="text-lg font-semibold text-slate-50">December 31, 2025</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-5 shadow-lg shadow-slate-900/40">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-400 mb-1">Abstract Template</h3>
                    <Link 
                      href="https://res.cloudinary.com/damnmi4ya/raw/upload/v1759299157/Abstract_Template_FSEAM_2025_t2yqpx_1_zwfhrn.docx" 
                      download 
                      target='_blank'
                      className="text-emerald-400 hover:text-emerald-300 transition-colors break-all text-sm font-medium"
                    >
                      Download Template
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeqM4bx4wdQSFc9QXSNqrEyHyf7wyff2CqVuxAITNWcGcWAyg/viewform?usp=sharing&ouid=101205680741696444931"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Submit Your Abstract
            </Link>
          </div>

          {/* QR Code Section */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 shadow-lg shadow-slate-900/40 sticky top-24">
              <h2 className="text-xl font-semibold mb-4 text-slate-50 text-center">
                Scan to Submit
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg mb-4">
                  <Image
                    src="/qr.png"
                    alt="QR code for abstract submission"
                    className="w-40 h-40 object-contain"
                    width={160}
                    height={160}
                  />
                </div>
                <p className="text-xs text-slate-400 text-center leading-relaxed">
                  Scan this QR code to access the abstract submission portal on your mobile device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AbstructSubmission
