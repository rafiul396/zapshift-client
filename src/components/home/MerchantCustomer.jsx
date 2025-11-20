import React from 'react';
import giftBox from '../../assets/location-merchant.png'
import bgImgMerchant from '../../assets/be-a-merchant-bg.png'

const MerchantCustomer = () => {
    return (
        <section className='bg-secondary text-base-100 flex my-20 items-center p-20 bg-no-repeat rounded-2xl'
                style={{ backgroundImage: `url(${bgImgMerchant})` }}
        >
            <div className='space-y-5'>
                <h2 className='text-3xl font-semibold'>
                    Merchant and Customer Satisfaction <br /> is Our First Priority
                </h2>
                <p className='text-xs font-light leading-5'>
                    We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.
                </p>
                <div className='space-x-2'>
                    <button className="btn bg-primary text-secondary border-2 border-primary shadow-none rounded-full">Become a Merchant</button>
                    <button className="btn border-2 border-primary shadow-none text-primary bg-secondary rounded-full">Earn with ZapShift Courier</button>
                </div>
            </div>
            <div>
                <img src={giftBox} alt="" />
            </div>
        </section>
    );
};

export default MerchantCustomer;