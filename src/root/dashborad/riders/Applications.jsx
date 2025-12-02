import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaEdit, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';

const Applications = () => {
    const axiosSecure = useAxiosSecure();
    const { data: riders = [] } = useQuery({
        queryKey: ['riders'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data
        }
    })

    const approveRider = (rider) => {
        console.log(rider._id);
        
    }
    const rejectRider = (rider) => {
        console.log(rider._id);
        
    }

    return (
        <div className='m-4 p-4 rounded-xl bg-base-100'>
            <h2>Total riders : {riders.length}</h2>
            <table className="table table-zebra">
                {/* head */}
                <thead className='text-center'>
                    <tr>
                        <th>Serial No</th>
                        <th>Application's Date</th>
                        <th>Profile Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {/* row 1 */}
                    {
                        riders.map((rider, index) => <tr key={rider._id}>
                            <th>{index + 1}</th>
                            <th>{new Date(rider.applicationAt).toLocaleDateString()}</th>
                            <td className='grid place-items-center'>
                                <img className="size-10 rounded-box border border-secondary" src={rider.rider_photo} />
                            </td>

                            <td>{rider.rider_name}</td>
                            <td>{rider.rider_email}</td>
                            <td>{rider.rider_status}</td>
                            <td className='space-x-2'>
                                <button onClick={() => approveRider(rider)} className="btn btn-soft">
                                    <FaUserPlus />
                                </button>
                                <button onClick={() => rejectRider(rider)} className="btn btn-soft">
                                    <FaUserMinus />
                                </button>
                                <button className="btn btn-soft">
                                    <MdOutlineDeleteOutline />
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Applications;