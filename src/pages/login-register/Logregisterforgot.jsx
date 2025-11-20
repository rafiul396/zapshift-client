import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../../components/Logo';
import logInBanner from '../../assets/authImage.png'

const Logregisterforgot = () => {
    return (
        <div className='max-w-7xl mx-auto flex gap-10'>
            <div className='flex-1 flex items-center'>
                <div className='self-start mt-5 xl:mt-20'>
                    <a href='/'>
                        <Logo />
                    </a>
                </div>
                <div className='w-full '>
                    <Outlet />   
                </div>
            </div>
            <div className='flex-1 bg-accent h-screen flex justify-center items-center'>
                <img src={logInBanner} alt="" />
            </div>
        </div>
    );
};

export default Logregisterforgot;