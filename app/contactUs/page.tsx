import React from 'react'
import PageLayout from '@/components/PageLayout'

const ContactUs = () => {
    return (
        <PageLayout>
            <div className="container mx-auto py-12 px-4">
                <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="mb-4">Have questions about the conference? Feel free to reach out to us.</p>
                        <div className="mt-6">
                            <p className="mb-2"><span className="font-medium">Email:</span> fseam.iitkgp.2025@gmail.com</p>
                            <p className="mb-2"><span className="font-medium">Phone:</span> +91 8777804922 | +91 8757764641</p>
                            <p className="mb-2"><span className="font-medium">Address:</span> Department of Metallurgical and Materials Engineering, IIT Kharagpur, West Bengal, India - 721302</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg border-2 border-white">
                        <h2 className="text-xl font-bold mb-4">Contact Form</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                                <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                                <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default ContactUs
