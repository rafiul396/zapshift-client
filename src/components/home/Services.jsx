import React from 'react';
import serviceLogo from '../../assets/service.png'

const Services = () => {
    return (
        <div className='bg-base-100 rounded-xl grid place-items-center p-8 py-10 space-y-2 hover:bg-primary transition-all duration-300'>
            <img src={serviceLogo} alt="" />
            <h3 className='text-2xl font-bold text-center'>
                Express  & Standard Delivery
            </h3>
            <p className='text-center'>
                We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.
            </p>
        </div>
    );
};

export default Services;