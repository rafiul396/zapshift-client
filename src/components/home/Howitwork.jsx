import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';

const Howitwork = () => {
    return (
        <div>
            
            <div className='bg-base-100 p-4 rounded-2xl space-y-2'>
                <TbTruckDelivery className='text-5xl' />
                <h3 className='text-2xl font-semibold'>
                    Booking Pick & Drop
                </h3>
                <p>
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
        </div>
    );
};

export default Howitwork;