import React, { use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../context/authcontext/AuthContext';

const SendPercel = () => {
    const {users, loader} = use(AuthContext);
    const { register, handleSubmit, watch } = useForm();
    const wareHouseData = useLoaderData();
    const wareHouseRegions = wareHouseData.map(region => region.region)
    const regions = [...new Set(wareHouseRegions)]
    const seviceDis = watch("serviceRegion")
    const receivingDis = watch("receivingRegion")
    const navigate = useNavigate();
    // console.log(regions);

    const axiosSecure = useAxiosSecure();

    const serviceArea = (region) => {
        const filteredArea = wareHouseData.filter(center => center.region === region);
        const districts = filteredArea.map(dis => dis.district)
        return districts;
    }

    const receivingArea = (region) => {
        const filteredArea = wareHouseData.filter(center => center.region === region);
        const districts = filteredArea.map(dis => dis.district)
        return districts;
    }



    const handleParcel = (data) => {
        const isSameAddress = data.serviceRegion === data.receivingRegion

        let finalAmount = 0;
        if (data.parcelType === 'Document') {
            finalAmount = isSameAddress ? 60 : 80;
        }
        else {
            const solidAmount = isSameAddress ? 110 : 150;
            const parcelWeight = data.parcel_Weight
            if (parcelWeight <= 3) {
                finalAmount = solidAmount
            }
            else if (parcelWeight > 3) {
                const extraWeight = parcelWeight - 3;
                finalAmount = solidAmount + extraWeight * 40 + 40
            }
        }
        data.cost = finalAmount;
        data.date = new Date();
        data.parcel_Status = 'Pay'
        
        Swal.fire({
            title: "Are you sure?",
            text: `You have to pay ${finalAmount} TK`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cofirm it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/parcels', data)
                .then(res => {
                    navigate('/dashboard/my-parcels')
                })
            }
        });

    }
    if(loader) {
        return
    }
    
    return (
        <section className='text-secondary bg-base-100 my-10 p-10 rounded-xl'>
            <div>
                <h2 className='mb-8 text-3xl font-bold'>
                    Send A Parcel
                </h2>
                <p className='font-bold'>
                    Enter your parcel details
                </p>
            </div>
            <hr className="my-5" />
            <form onSubmit={handleSubmit(handleParcel)}>
                <div className='flex gap-5'>
                    <label className='flex items-center gap-2'>
                        <input type="radio" value="Document" {...register("parcelType")} className="radio radio-primary" defaultChecked />
                        <span>Document</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="radio" value="Non-Document" {...register("parcelType")} className="radio radio-primary" />
                        Non-Document
                    </label>
                </div>
                <div className='flex gap-5 mt-5'>
                    <fieldset className='flex-1'>
                        <label className="label text-base font-semibold">Parcel Name</label>
                        <input type="text" {...register("parcel_Name")} className="input w-full text-lg" placeholder="Parcel Name" />
                    </fieldset>
                    <fieldset className='flex-1'>
                        <label className="label text-base font-semibold">Parcel Weight(KG)</label>
                        <input type="text" {...register("parcel_Weight")} className="input w-full text-lg" placeholder="Parcel Weight(KG)" />
                    </fieldset>
                </div>
                <hr className="my-5" />
                <div className='flex gap-5'>
                    {/* Senders Details */}
                    <div className='flex-1  space-y-5'>
                        <p className='font-bold'>
                            Senders Details
                        </p>
                        <fieldset>
                            <label className="label text-base font-semibold">Sender Name</label>
                            <input type="text" {...register("sender_Name")} className="input w-full text-lg" placeholder="Sender Name" value={users?.displayName} />
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Sender Email</label>
                            <input type="email" {...register("sender_Email")} className="input w-full text-lg" placeholder="Address" value={users?.email} />
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Sender Phone No</label>
                            <input type="text" {...register("sender_Phone")} className="input w-full text-lg" placeholder="Sender Phone No" />
                        </fieldset>
                        {/* Regions */}
                        <fieldset className="fieldset">
                            <legend className="label text-base font-semibold">Select Region</legend>
                            <select defaultValue="Pick a Region" {...register("serviceRegion")} className="select w-full">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((region, index) => <option key={index} value={region} >{region}</option>)
                                }
                            </select>
                        </fieldset>
                        {/* Districts */}
                        <fieldset className="fieldset">
                            <legend className="label text-base font-semibold">Select District</legend>
                            <select defaultValue="Pick a District" className="select w-full">
                                <option disabled={true}>Pick a District</option>
                                {
                                    serviceArea(seviceDis).map((region, index) => <option key={index} value={region} >{region}</option>)
                                }
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Address</label>
                            <input type="text" {...register("sender_Address")} className="input w-full text-lg" placeholder="Address" />
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Pickup Instruction</label> <br />
                            <textarea className='w-full input h-fit' {...register("pickup_Instruction")} placeholder='Pickup Instruction' rows={3}></textarea>
                        </fieldset>
                    </div>
                    {/* Receivers Details */}
                    <div className='flex-1  space-y-5'>
                        <p className='font-bold'>
                            Receivers Details
                        </p>
                        <fieldset>
                            <label className="label text-base font-semibold">Receivers Name</label>
                            <input type="text" {...register("receivers_Name")} className="input w-full text-lg" placeholder="Receivers Name" />
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Address</label>
                            <input type="text" {...register("receviers_Address")} className="input w-full text-lg" placeholder="Address" />
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Receivers Phone No</label>
                            <input type="text" {...register("receivers_Phone")} className="input w-full text-lg" placeholder="Receivers Phone No" />
                        </fieldset>
                        {/* Regions */}
                        <fieldset className="fieldset">
                            <legend className="label text-base font-semibold">Select Region</legend>
                            <select defaultValue="Pick a Region" {...register("receivingRegion")} className="select w-full">
                                <option disabled={true}>Pick a Region</option>
                                {
                                    regions.map((region, index) => <option key={index} value={region} >{region}</option>)
                                }
                            </select>
                        </fieldset>
                        {/* Districts */}
                        <fieldset className="fieldset">
                            <legend className="label text-base font-semibold">Select District</legend>
                            <select defaultValue="Pick a District" className="select w-full">
                                <option disabled={true}>Pick a District</option>
                                {
                                    receivingArea(receivingDis).map((region, index) => <option key={index} value={region} >{region}</option>)
                                }
                            </select>
                        </fieldset>
                        <fieldset>
                            <label className="label text-base font-semibold">Delivery Instruction</label> <br />
                            <textarea className='w-full input h-fit' {...register("delivery_Instruction")} placeholder='Delivery Instruction' rows={3}></textarea>
                        </fieldset>
                    </div>
                </div>
                <button className="btn btn-neutral xl:mt-2 bg-primary border-0 shadow-none text-black mt-10">Proceed to Confirm Booking</button>
            </form>
        </section>
    );
};

export default SendPercel;