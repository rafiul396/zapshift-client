import React from 'react';
import agentPendingImg from '../../assets/agent-pending.png'
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const BeARider = () => {
    const { handleSubmit, register, watch } = useForm();

    const axiosSecure = useAxiosSecure();
    const {users} = useAuth();

    const wareHouseData = useLoaderData();
    const wareHouseRegions = wareHouseData.map(region => region.region)
    const regions = [...new Set(wareHouseRegions)]
    const seviceDis = watch("rider_region")

    const serviceArea = (region) => {
        const filteredArea = wareHouseData.filter(center => center.region === region);
        const districts = filteredArea.map(dis => dis.district)
        return districts;
    }


    const handleRiderData = (data, e) => {
        data.applicationAt = new Date();
        data.rider_photo = users?.photoURL;
        data.status = 'Pending';

        axiosSecure.post('/riders', data)
        .then((res) => {
            console.log(res.data);
            toast.error(res.data.message)
            if(res.data.insertedId){
                e.target.reset()
            }
            
        })
        .catch(err => {
            console.log(err);
            
        })

    }

    return (
        <section className="bg-base-100 my-10 p-10 rounded-xl">

            {/* Title Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#03373D]">Be a Rider</h1>
                <p className="text-gray-600 mt-2 w-full md:w-3/4">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal <br /> packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            <hr className="mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Left Form */}
                <div className="max-w-xl mx-auto px-6 py-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Tell us about yourself
                    </h2>

                    <form onSubmit={handleSubmit(handleRiderData)} className="space-y-4">

                        <input
                            {...register("rider_name")}
                            type="text"
                            placeholder="Your Name"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <input
                            {...register("rider_license_number")}
                            type="text"
                            placeholder="Driving License Number"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <input
                            {...register("rider_email")}
                            value={users?.email}
                            type="email"
                            placeholder="Your Email"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <select
                            {...register("rider_region")}
                            className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
                        >
                            <option value="">Select your Region</option>
                            {
                                regions.map((region, index) => <option key={index} value={region} >{region}</option>)
                            }
                        </select>

                        <select
                            {...register("rider_district")}
                            className="w-full border rounded-lg px-4 py-3 text-sm text-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
                        >
                            <option value="">Select your District</option>
                            {
                                serviceArea(seviceDis).map((region, index) => <option key={index} value={region} >{region}</option>)
                            }
                        </select>

                        <input
                            {...register("rider_nid_number")}
                            type="text"
                            placeholder="NID"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <input
                            {...register("rider_phone_number")}
                            type="text"
                            placeholder="Phone Number"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <input
                            {...register("rider_bike_model")}
                            type="text"
                            placeholder="Bike Brand Model and Year"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <input
                            {...register("bike_registration_number")}
                            type="text"
                            placeholder="Bike Registration Number"
                            className="w-full border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-green-400 outline-none"
                        />

                        <textarea
                            {...register("rider_description")}
                            placeholder="Tell Us About Yourself"
                            className="w-full border rounded-lg px-4 py-3 text-sm h-24 focus:ring-2 focus:ring-green-400 outline-none"
                        ></textarea>

                        <button
                            className="w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium rounded-lg py-3 mt-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Side Image */}
                <div className="flex justify-center items-start">
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