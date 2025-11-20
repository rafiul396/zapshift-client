import React from 'react';

const FeaturesCard = ({ liveTrackeingImg, safeDeliImg }) => {
    return (
        <div className="max-w-5xl mx-auto p-6 space-y-6 text-secondary  border-t-2 border-b-2 border-dashed border-secondary py-20">

            {/* Card 1 */}
            <div className="bg-white shadow-sm rounded-xl p-6 flex gap-5 items-center border border-gray-100">
                <div className="flex items-center p-5">
                    <img className='w-52' src={liveTrackeingImg} alt="Live Parcel Tracking" />
                </div>
                <div className='p-5 border-l-2 border-dashed border-secondary'>
                    <h3 className="text-xl font-semibold">
                        Live Parcel Tracking
                    </h3>
                    <p className=" text-sm mt-2">
                        Stay updated in real-time with our live parcel tracking feature. From
                        pick-up to delivery, monitor your shipment's journey and get instant
                        status updates for complete peace of mind.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-sm rounded-xl p-6 flex gap-5 items-center border border-gray-100">
                <div className="flex items-center p-5">
                    <img className='w-52' src={safeDeliImg} alt="Live Parcel Tracking" />
                </div>
                <div className='p-5 border-l-2 border-dashed border-secondary'>
                    <h3 className="text-xl font-semibold">
                        100% Safe Delivery
                    </h3>
                    <p className=" text-sm mt-2">
                        We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                    </p>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-sm rounded-xl p-6 flex gap-5 items-center border border-gray-100">
                <div className="w-52 flex items-center p-5">
                    <img className='w-full' src={safeDeliImg} alt="Live Parcel Tracking" />
                </div>
                <div className='p-5 border-l-2 border-dashed border-secondary'>
                    <h3 className="text-xl font-semibold">
                        24/7 Call Center Support
                    </h3>
                    <p className="text-sm mt-2">
                        Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FeaturesCard;