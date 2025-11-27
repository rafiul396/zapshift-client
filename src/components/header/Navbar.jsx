import React, { use } from 'react';
import Logo from '../Logo';
import { Link, NavLink } from 'react-router';
import AuthProvider from '../../context/provider/AuthProvider';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { users, logOut, loader } = useAuth();
    // console.log(users.photoURL);

    const links = <>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Pricing</NavLink></li>
        {
            users && (
                <>
                    <li><NavLink to="/parcel">Send Parcel</NavLink></li>
                    <li><NavLink to="/rider">Be a Rider</NavLink></li>
                    <li><NavLink to="/dashboard/my-parcels">My Parcel</NavLink></li>
                </>
            )
        }
    </>
    if (loader) {
        return
    }
    return (
        <div className="navbar bg-base-100 rounded-xl px-8 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="">
                    <Logo />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {
                    users ? (<>
                        <Link className="btn bg-primary" onClick={logOut}>Logout</Link>
                        <img className='w-10 h-10 rounded-full border-2 border-primary' src={users?.photoURL} alt="user's profile" />
                    </>) : (
                        <>
                            <Link className="btn bg-primary" to="/user/login">Login</Link>
                            <Link className="btn border-2 border-primary" to="/user/register">Register</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;