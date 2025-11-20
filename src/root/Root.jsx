import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#EAECED] w-full overflow-x-hidden py-5'>
            <div className='max-w-7xl mx-auto'>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Root;