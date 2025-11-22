import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyParcel = () => {
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels')
            return res.data;
        }
    })

    return (
        <div>
            My Parcels {parcels.length}
        </div>
    );
};

export default MyParcel;