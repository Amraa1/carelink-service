import React from "react";

export default function Contact() {
    return (
        <section className="bg-[#6c84a4] py-10 px-6">
            <div className="max-w-lg mx-auto rounded-2xl shadow-md bg-white p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Contact Us
                </h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">
                            Firstname
                        </label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">
                            Lastname
                        </label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="example@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">
                            Your message
                        </label>
                        <textarea
                            className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows={4}
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
