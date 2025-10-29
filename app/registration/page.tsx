import React from 'react'
import PageLayout from '@/components/PageLayout'

const Registration = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-3 text-indigo-800">Registration</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Register for the IIT Kharagpur Conference on Advanced Materials for Sustainable Energy
                    </p>
                </div>

                {/* Full-width highlighted waiver banner */}
                <div className="mx-[calc(50%-50vw)] w-screen mb-10">
                    <div className="bg-blue-100 text-blue-900 border-y border-blue-300/60 text-center py-3">
                        <span className="font-semibold tracking-wide uppercase">
                            50% waiver of registration fee would be exempted for all the Speakers of IIT Kharagpur, BIT Mesra and Members of INAE, IAAM, WAST
                        </span>
                    </div>
                </div>

                <div className="mb-12 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-xl ring-1 ring-indigo-200">
                    <h2 className="text-3xl font-semibold mb-6 text-indigo-900 border-b border-indigo-300 pb-3">Registration Fees</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-transparent border-collapse text-lg">
                            <thead>
                                <tr className="bg-indigo-100 text-indigo-900">
                                    <th className="py-5 px-6 text-left rounded-tl-xl font-semibold">Category</th>
                                    <th className="py-5 px-6 text-center font-semibold">
                                        Early Bird
                                        <br />
                                        <span className="inline-block mt-2 text-xs font-medium bg-indigo-50 text-indigo-900 px-2.5 py-1 rounded-full">
                                            Before Nov 15
                                        </span>
                                    </th>
                                    <th className="py-5 px-6 text-center rounded-tr-xl font-semibold">
                                        Regular
                                        <br />
                                        <span className="inline-block mt-2 text-xs font-medium bg-indigo-50 text-indigo-900 px-2.5 py-1 rounded-full">
                                            After Nov 15
                                        </span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-indigo-900">
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-5 px-6 border-t border-indigo-200">Indian Students</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center font-bold text-blue-800">₹5,000</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center">₹6,000</td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-5 px-6 border-t border-indigo-200">Indian Academics/Scientists</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center font-bold text-blue-800">₹10,000</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center">₹12,000</td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-5 px-6 border-t border-indigo-200 rounded-bl-xl">Industry Participants</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center font-bold text-blue-800">₹15,000</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center rounded-br-xl">₹17,000</td>
                                </tr>
                                <tr className="hover:bg-blue-50 transition-colors">
                                    <td className="py-5 px-6 border-t border-indigo-200 rounded-bl-xl">Foreign Participants</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center font-bold text-blue-800">$700</td>
                                    <td className="py-5 px-6 border-t border-indigo-200 text-center rounded-br-xl">$800</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-10 font-semibold text-indigo-800 text-base">
                        This Registration Fee is inclusive of GST.
                    </p>
                </div>


                

                {/* <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 p-8 rounded-2xl shadow-xl mb-8">
                    <h2 className="text-2xl font-semibold mb-6 text-purple-400 border-b border-purple-500/30 pb-2">Registration Form</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-purple-300" htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-full px-4 py-3 bg-indigo-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-purple-300" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 bg-indigo-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-purple-300" htmlFor="affiliation">Affiliation</label>
                                <input
                                    type="text"
                                    id="affiliation"
                                    className="w-full px-4 py-3 bg-indigo-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                    placeholder="Enter your institution/organization"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-purple-300" htmlFor="category">Category</label>
                                <select
                                    id="category"
                                    className="w-full px-4 py-3 bg-indigo-900/30 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white appearance-none"
                                >
                                    <option value="" className="bg-indigo-900">Select Category</option>
                                    <option value="student" className="bg-indigo-900">Student</option>
                                    <option value="academic" className="bg-indigo-900">Academic</option>
                                    <option value="industry" className="bg-indigo-900">Industry Professional</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Register Now
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </PageLayout>
    )
}

export default Registration
