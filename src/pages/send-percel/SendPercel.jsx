import React from 'react';

const SendPercel = () => {
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
            <form>
                <div className='flex gap-5'>
                    <label className='flex items-center gap-2'>
                        <input type="radio" name="radio-4" className="radio radio-primary" defaultChecked />
                        <span>Document</span>
                    </label>
                    <label className='flex items-center gap-2'>
                        <input type="radio" name="radio-4" className="radio radio-primary" />
                        Non-Document
                    </label>
                </div>
                <div className='flex gap-5 mt-5'>
                    <div className='flex-1'>
                        <label className="label text-base font-semibold">Parcel Name</label>
                        <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                    </div>
                    <div className='flex-1'>
                        <label className="label text-base font-semibold">Parcel Weight(KG)</label>
                        <input type="text" className="input w-full text-lg" placeholder="Parcel Weight(KG)" />
                    </div>
                </div>
                <hr className="my-5" />
                <div className='flex gap-5'>
                    {/* Senders Details */}
                    <div className='flex-1  space-y-5'>
                        <p className='font-bold'>
                            Senders Details
                        </p>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                    </div>
                    {/* Receivers Details */}
                    <div className='flex-1  space-y-5'>
                        <p className='font-bold'>
                            Receivers Details
                        </p>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                        <div>
                            <label className="label text-base font-semibold">Parcel Name</label>
                            <input type="text" className="input w-full text-lg" placeholder="Parcel Name" />
                        </div>
                    </div>
                </div>
                <button className="btn btn-neutral xl:mt-2 bg-primary border-0 shadow-none text-black mt-10">Proceed to Confirm Booking</button>
            </form>
        </section>
    );
};

export default SendPercel;