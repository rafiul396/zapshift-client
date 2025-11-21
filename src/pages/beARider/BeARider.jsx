import React from 'react';
import agentPendingImg from '../../assets/agent-pending.png'

const BeARider = () => {
    return (
            <section className="bg-base-100 my-10 p-5 rounded-xl">

                {/* Title Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-green-900">Be a Rider</h1>
                    <p className="text-gray-600 mt-2 w-full md:w-3/4">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                        From personal <br /> packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                <hr className="mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Left Form */}
                    <div className="space-y-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Your age"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                            <select className="border rounded-lg px-4 py-2 w-full">
                                <option>Select your District</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="NID No"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Contact"
                                className="border rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        <select className="border rounded-lg px-4 py-2 w-full">
                            <option>Select wire-house</option>
                        </select>

                        <button className="w-full bg-lime-400 text-gray-900 font-semibold rounded-lg py-2">
                            Submit
                        </button>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={agentPendingImg}
                            alt="Rider"
                            className="w-80"
                        />
                    </div>

                </div>
            </section>
    );
};

export default BeARider;