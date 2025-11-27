import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PaymentSuc = () => {
    const [searchParams] = useSearchParams();
    const axiosSecure = useAxiosSecure();
    const sessionId = searchParams.get('session_id')
    console.log(sessionId);

    useEffect(() => {
        if(sessionId){
            axiosSecure.patch(`/payment-status?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data);
            })
        }
    }, [sessionId, axiosSecure])
    
    return (
        <div>
            Payment Successfully Done
        </div>
    );
};

export default PaymentSuc;