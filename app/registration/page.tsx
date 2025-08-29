import React from 'react'
import PageLayout from '@/components/PageLayout'

const Registration = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold mb-6">Registration</h1>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full rounded-lg overflow-hidden shadow-lg bg-white">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                                    <th className="py-3 px-4 font-semibold text-left">Category</th>
                                    <th className="py-3 px-4 font-semibold text-left">Early Bird (Before 31 Nov 2025)</th>
                                    <th className="py-3 px-4 font-semibold text-left">Regular (After 31 Nov 2025)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="even:bg-blue-50 odd:bg-white hover:bg-blue-100 transition-colors">
                                    <td className="py-3 px-4 border-b border-blue-100">Indian Students</td>
                                    <td className="py-3 px-4 border-b border-blue-100">₹ 5,000</td>
                                    <td className="py-3 px-4 border-b border-blue-100">₹ 6,000</td>
                                </tr>
                                <tr className="even:bg-blue-50 odd:bg-white hover:bg-blue-100 transition-colors">
                                    <td className="py-3 px-4 border-b border-blue-100">Indian Academics/Scientists</td>
                                    <td className="py-3 px-4 border-b border-blue-100">₹ 10,000</td>
                                    <td className="py-3 px-4 border-b border-blue-100">₹ 12,000</td>
                                </tr>
                                <tr className="even:bg-blue-50 odd:bg-white hover:bg-blue-100 transition-colors">
                                    <td className="py-3 px-4 border-b border-blue-100">Industry Participants</td>
                                    <td className="py-3 px-4 border-b border-blue-100">₹ 15,000</td>
                                    <td className="py-3 px-4 border-b border-blue-100">₹ 17,000</td>
                                </tr>
                                <tr className="even:bg-blue-50 odd:bg-white hover:bg-blue-100 transition-colors">
                                    <td className="py-3 px-4 border-b border-blue-100">Foreign Participants</td>
                                    <td className="py-3 px-4 border-b border-blue-100">$ 700</td>
                                    <td className="py-3 px-4 border-b border-blue-100">$ 800</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-600 mt-4"><span className='font-bold text-gray-500'>Note:</span> Registration fees are inclusive of taxes and non-refundable.</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 font-bold p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-1" htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1" htmlFor="affiliation">Affiliation</label>
                                <input type="text" id="affiliation" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm mb-1" htmlFor="category">Category</label>
                                <select id="category" className="w-full px-3 py-2 border rounded-md text-white">
                                    <option className='text-gray-700 bg-blue-200 font-semibold' value="">Select Category</option>
                                    <option className='text-gray-700 bg-blue-200 font-semibold' value="student">Student</option>
                                    <option className='text-gray-700 bg-blue-200 font-semibold' value="academic">Academic</option>
                                    <option className='text-gray-700 bg-blue-200 font-semibold' value="industry">Industry Professional</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PageLayout>
    )
}

export default Registration
