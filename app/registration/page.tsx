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

                <div className="mb-12 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-8 rounded-2xl shadow-xl">
                    <h2 className="text-2xl font-semibold mb-6 text-indigo-400 border-b border-indigo-500/30 pb-2">Registration Fees</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-transparent border-collapse">
                            <thead>
                                <tr className="bg-indigo-800/50 text-indigo-100">
                                    <th className="py-4 px-6 text-left rounded-tl-lg">Category</th>
                                    <th className="py-4 px-6 text-center">Early Bird<br /><span className="text-xs font-normal">(Before June 30)</span></th>
                                    <th className="py-4 px-6 text-center rounded-tr-lg">Regular<br /><span className="text-xs font-normal">(After June 30)</span></th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-200">
                                <tr className="hover:bg-indigo-700/20 transition-colors">
                                    <td className="py-4 px-6 border-t border-indigo-500/20">Indian Students</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center font-medium text-indigo-300">₹5,000</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center">₹6,000</td>
                                </tr>
                                <tr className="hover:bg-indigo-700/20 transition-colors">
                                    <td className="py-4 px-6 border-t border-indigo-500/20">Indian Academics/Scientists</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center font-medium text-indigo-300">₹10,000</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center">₹12,000</td>
                                </tr>
                                <tr className="hover:bg-indigo-700/20 transition-colors">
                                    <td className="py-4 px-6 border-t border-indigo-500/20 rounded-bl-lg">Industry Participants</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center font-medium text-indigo-300">₹15,000</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center rounded-br-lg">₹17,000</td>
                                </tr>
                                <tr className="hover:bg-indigo-700/20 transition-colors">
                                    <td className="py-4 px-6 border-t border-indigo-500/20 rounded-bl-lg">Foreign Participants</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center font-medium text-indigo-300">$700</td>
                                    <td className="py-4 px-6 border-t border-indigo-500/20 text-center rounded-br-lg">$800</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-10 font-bold text-gray-300 ">
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
