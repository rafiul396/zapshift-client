import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaEdit, FaUserShield } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const Users = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const createAdmin = (user) => {
        // console.log(user?._id);

        const userRole = {
            userRole: 'admin'
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to promote this user as a admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`, userRole)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "User is sccessfully promoted in admin",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            }
        });
    }

    // Demote in admin to user
    const convertInUser = (user) => {
        // console.log(user?._id);

        const userRole = {
            userRole: 'user'
        }

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to demote this admin in user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`, userRole)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Admin is sccessfully demoted in user",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
            }
        });
    }

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className='m-4 p-4 rounded-xl bg-base-100'>
            <h2>Total Users : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Serial No</th>
                            <th>Join Date</th>
                            <th>Profile Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>{new Date(user.createdAt).toLocaleDateString()}</th>
                                <td className='grid place-items-center'>
                                    <img className="size-10 rounded-box border border-secondary" src={user.userPhoto} />
                                </td>

                                <td>{user.userName}</td>
                                <td>{user.userEmail}</td>
                                <td>
                                    {
                                        user.userRole === 'user' ? <button onClick={() => createAdmin(user)} type="button" className='btn bg-primary text-secondary'>Create Admin</button> : <button onClick={() => convertInUser(user)} type="button" className='btn bg-red-500 text-secondary'>Create User</button>
                                    }
                                </td>
                                <td className='space-x-2'>
                                    <button className="btn btn-soft">
                                        <FaEdit />
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
        </div>
    );
};

export default Users;