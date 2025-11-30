import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const MyParcel = () => {
    const axiosSecure = useAxiosSecure();
    // const [loader, setLoader] = useState(true);
    const { users,loader } = useAuth();



    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', users?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${users?.email}`)
                // setLoader(false)
                console.log(res.data);
                
            return res.data;
        }
    })

    if(loader){
        return <h1>Loading...</h1>
    }

    // console.log(users?.email);
    

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`parcels/${id}`)
                .then(res => {
                    refetch();
                    if(res.data.deletedCount){

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
                

            }
        });
    }

    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcel_Name: parcel.parcel_Name,
            parcelId: parcel._id,
            sender_Email: parcel.sender_Email
        }

        const res = await axiosSecure.post('/parcel-checkout-session', paymentInfo)
        // console.log(res.data.url);
        window.location.href = res.data.url; 
    }

    return (
        <div className='m-4 p-4 rounded-xl bg-base-100'>
            My Parcels {parcels.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className='text-center'>
                        <tr>
                            <th>Serial No</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Products</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Payment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {/* row 1 */}
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <th>{new Date(parcel.date).toLocaleDateString()}</th>
                                <td>{parcel.receivers_Name}</td>
                                <td>{parcel.parcel_Name}</td>
                                <td>{parcel.delivery_Instruction}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.parcel_Status === 'paid' ? <p>Paid</p> : <button onClick={() => handlePayment(parcel)}  className='btn btn-primary text-black'>Pay</button>
                                    }
                                </td>
                                <td className='space-x-2'>
                                    <button className="btn btn-soft">
                                        <FaEdit />
                                    </button>
                                    <button onClick={() => handleDelete(parcel._id)} className="btn btn-soft">
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

export default MyParcel;