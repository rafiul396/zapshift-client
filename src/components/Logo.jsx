import React from 'react';
import logo from '../assets/logo.png'


const Logo = () => {
    return (
        <div className='flex'>
            <img src={logo} alt="" />
            <h3 className='text-3xl font-semibold self-end -ms-2.5'>zapshift</h3>
        </div>
    );
};

export default Logo;