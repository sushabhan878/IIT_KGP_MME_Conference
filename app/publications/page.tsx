import Navbar from '@/components/Navbar'
import React from 'react'

const Publication = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-4">
              Publications
            </h1>
            <p className="text-center text-slate-300 max-w-2xl mx-auto">
              The selected papers will be published in peer-reviewed journals or conference
              proceedings after thorough review.
            </p>
          </section>

          <section className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 shadow-lg shadow-slate-900/40">
              <h2 className="text-xl font-semibold mb-3 text-slate-50">
                Journal Publications
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm sm:text-base">
                <li>
                  Selected high-quality contributions will be recommended for publication in
                  reputed peer-reviewed journals in the broad area of materials and
                  metallurgical engineering.
                </li>
                <li>
                  Only papers that successfully complete the full journal review process will
                  be accepted for publication; acceptance to the conference does not guarantee
                  journal publication.
                </li>
                <li>
                  Authors may be requested to submit an extended/modified version of the paper
                  to meet journal requirements.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md p-6 shadow-lg shadow-slate-900/40">
              <h2 className="text-xl font-semibold mb-3 text-slate-50">
                Conference Proceedings
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm sm:text-base">
                <li>
                  All accepted and presented papers will be considered for inclusion in the
                  official conference proceedings (with ISBN).
                </li>
                <li>
                  Only papers presented by at least one registered author during the
                  conference will be eligible for proceedings publication.
                </li>
                <li>
                  The organizers reserve the right to screen submissions for quality,
                  technical content, and plagiarism before proceeding to publication.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-6 text-sm sm:text-base text-amber-100">
            <h2 className="text-lg font-semibold mb-2 text-amber-200">
              Important Notes
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Detailed information about partner journals, indexing, and templates will be
                announced on this page and communicated to registered authors.
              </li>
              <li>
                The decision of the technical and publication committees will be final
                regarding selection for journal or proceedings publication.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  )
}

export default Publication
