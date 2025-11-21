import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { FaUserPlus } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/authcontext/AuthContext';
import userImg from '../../assets/image-upload-icon.png'

const Register = () => {
    const [fileName, setFileName] = useState('')
    const { registerUser } = use(AuthContext)

    const { handleSubmit,
        register,
        formState: { errors } } = useForm();

    const handleRegister = (data) => {
        console.log(data);

        registerUser(data.email, data.password)
            .then(res => {
                console.log(res.user);

            })

    }
    return (
        <div className='w-2/3 xl:space-y-5'>
            <form onSubmit={handleSubmit(handleRegister)} className='xl:space-y-2'>
                <div>
                    <h2 className='text-black font-bold text-2xl xl:text-5xl'>Create an Account</h2>
                    <p className='text-xs xl:text-base'>Register with Zapshift</p>
                </div>

                <fieldset className="fieldset">
                    {/* <FaUserPlus className='text-4xl bg-gray-200 p-1 rounded-full cursor-pointer' /> */}
                    {/* <input type="file" className="file-input file-input-sm" /> */}
                    <label className="w-full h-10 space-x-3 rounded-lg 
                  flex items-center justify-center cursor-pointer">
                        <img src={userImg} className="h-full object-contain" alt="" />

                        <input
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                                setFileName('')
                                const file = e.target.files[0];
                                setFileName(file)
                            }}
                        />
                        {
                            fileName && <p className='w-full'>{fileName.name}</p>
                        }
                    </label>
                    {
                        // fileName && <p>{fileName}</p>
                    }
                    {/* <input type="file" {...register('photo', { required : true })} className="file-input file-input-sm" placeholder="Name" /> */}
                    <label className="label xl:text-base text-black font-semibold">Name</label>
                    <input type="name" {...register('name', { required: true })} className="p-2 border border-gray-200 rounded-md w-full text-xs xl:text-lg" placeholder="Name" />
                    {
                        errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>
                    }
                    <label className="label xl:text-base text-black font-semibold">Email</label>
                    <input type="email" {...register('email')} className="p-2 border border-gray-200 rounded-md w-full text-xs xl:text-lg" placeholder="Email" />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                    }
                    <label className="label xl:text-base text-black font-semibold">Password</label>
                    <input type="password" {...register('password', {
                        required: true,
                        minLength: 6,
                        validate: {
                            upperCase: (value) => /[A-Z]/.test(value) || 'At lest One UPPERCASE letter required',
                            lowerCase: (value) => /[a-z]/.test(value) || 'At least One lowercase letter required'
                        }
                    })} className="p-2 border border-gray-200 rounded-md w-full text-xs xl:text-lg" placeholder="Password" />
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>password will be 6 charaters</p>
                    }
                    {
                        errors.password?.type === 'upperCase' && <p className='text-red-500'>At lest One UPPERCASE letter required</p>
                    }
                    {
                        errors.password?.type === 'lowerCase' && <p className='text-red-500'>At lest One lowercase letter required</p>
                    }
                    <button className="p-2 xl:mt-2 bg-primary border-0 shadow-none text-black">Register</button>
                    <div><p className="xl:text-lg text-info">Already have an account? <Link to="/user/login" className="link link-hover text-[#8FA748] xl:text-lg font-semibold">Login</Link></p></div>
                </fieldset>
            </form>
            <div className="divider"><span className='text-xs xl:text-xl'>Or</span></div>
            <button className="p-2 btn w-full bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Register with Google
            </button>
        </div>
    );
};

export default Register;