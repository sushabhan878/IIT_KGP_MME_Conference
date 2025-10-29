import React from 'react'

const speakers = [
  'Prof. A. K. Sharma',
  'Dr. S. Banerjee',
  'Prof. R. Kumar',
  'Dr. N. Gupta',
  'Prof. M. Iyer',
  'Dr. P. Chatterjee',
  'Prof. S. Mukherjee',
  'Dr. R. Verma',
  'Prof. T. Srinivasan',
  'Dr. K. Patel',
  'Prof. V. Rao',
  'Dr. H. Das'
]

const Speakers = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-3 text-indigo-800">Speakers</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-blue-600 mx-auto"></div>
          <p className="mt-4 text-blue-900/70 max-w-2xl mx-auto">
            Distinguished speakers from academia and industry will share insights on advanced materials for sustainable energy.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((name) => (
            <div
              key={name}
              className="group rounded-2xl bg-white ring-1 ring-indigo-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center font-semibold shadow-sm">
                  {name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-indigo-900 group-hover:text-blue-800">
                  {name}
                </h3>
                <p className="mt-1 text-sm text-blue-900/70">
                  Invited Speaker
                </p>
              </div>
              <div className="px-6 pb-6">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Speakers