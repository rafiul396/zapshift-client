import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { users } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: role = 'user', isLoading, refetch } = useQuery({
        queryKey: ['users', users?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${users?.email}/role`)
            // console.log(res.data);
            return res.data
        }
    })
    return {role, isLoading, refetch}
};

export default useRole;