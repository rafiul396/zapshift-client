import React from 'react';
import FeaturesCard from './FeaturesCard';
import liveTrackeingImg from '../../../assets/live-tracking.png'
import safeDeliImg from '../../../assets/safe-delivery.png'


const Featuers = () => {
    return (
        <div>
            <FeaturesCard liveTrackeingImg={liveTrackeingImg} safeDeliImg={safeDeliImg} />
        </div>
    );
};

export default Featuers;