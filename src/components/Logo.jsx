import React from 'react';
import logo from '../assets/logo.png'


const Logo = () => {
    return (
        <div className='flex'>
            <img className='w-[30px] xl:w-fit' src={logo} alt="" />
            <h3 className='text-2xl xl:text-3xl font-semibold self-end -ms-2.5'>zapshift</h3>
        </div>
    );
};

export default Logo;