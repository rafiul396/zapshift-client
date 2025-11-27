import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../components/Logo';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/authcontext/AuthContext';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loginUser, setUsers, googleLogIn } = use(AuthContext);
    const navigate = useNavigate();


    const handleGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        googleLogIn(googleProvider)
            .then(res => {
                setUsers(res.user)
                navigate('/')
            })
    }

    const handleLogin = (d) => {
        loginUser(d.email, d.password)
            .then(res => {
                setUsers(res.user)
                navigate('/')
            })
    }

    return (
        <div className='w-2/3 space-y-1.5 xl:space-y-5'>
            <form onSubmit={handleSubmit(handleLogin)} className='space-y-2'>
                <div>
                    <h2 className='text-black font-bold text-3xl xl:text-5xl'>Welcome Back</h2>
                    <p>Login with Zapshift</p>
                </div>

                <fieldset className="fieldset">
                    <label className="label text-base text-black font-semibold">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input w-full text-lg" placeholder="Email" />

                    {errors.email?.type === 'required' && <p>Email is not empty</p>}
                    <label className="label text-base text-black font-semibold">Password</label>
                    <input type="password" {...register('password')} minLength={6} className="input w-full text-lg" placeholder="Password" />

                    <div><a className="link link-hover text-lg text-info">Forgot password?</a></div>
                    <button className="btn btn-neutral xl:mt-2 bg-primary border-0 shadow-none text-black">Login</button>
                    <div><p className="text-lg text-info">Don't have any account? <Link to="/user/register" className="link link-hover text-[#8FA748] text-lg font-semibold">Register</Link></p></div>
                </fieldset>
            </form>
            <div className="divider"><span className='text-xs xl:text-xl'>Or</span></div>
            <button onClick={handleGoogleLogin} className="btn w-full bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </div>

    );
};

export default Login;