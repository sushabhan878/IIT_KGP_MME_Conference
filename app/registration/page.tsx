import React from 'react'
import PageLayout from '@/components/PageLayout'

const Registration = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold mb-6">Registration</h1>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Registration Fees</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border">
                            <thead>
                                <tr>
                                    <th className="py-3 px-4 border-b">Category</th>
                                    <th className="py-3 px-4 border-b">Early Bird (Before June 30)</th>
                                    <th className="py-3 px-4 border-b">Regular (After June 30)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-3 px-4 border-b">Students</td>
                                    <td className="py-3 px-4 border-b">₹3,000</td>
                                    <td className="py-3 px-4 border-b">₹4,000</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 border-b">Academics</td>
                                    <td className="py-3 px-4 border-b">₹5,000</td>
                                    <td className="py-3 px-4 border-b">₹6,000</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 border-b">Industry Professionals</td>
                                    <td className="py-3 px-4 border-b">₹8,000</td>
                                    <td className="py-3 px-4 border-b">₹10,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Registration Form</h2>
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="affiliation">Affiliation</label>
                                <input type="text" id="affiliation" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                                <select id="category" className="w-full px-3 py-2 border rounded-md">
                                    <option value="">Select Category</option>
                                    <option value="student">Student</option>
                                    <option value="academic">Academic</option>
                                    <option value="industry">Industry Professional</option>
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
