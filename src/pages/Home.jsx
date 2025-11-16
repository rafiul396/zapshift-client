import React from 'react';
import Logo from '../components/Logo';
import Hero from '../components/home/Hero';
import Howitwork from '../components/home/Howitwork';
import Services from '../components/home/Services';
import Brands from '../components/home/Brands';
import Reviews from '../components/home/reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <main className='text-secondary'>
            <Hero />
            {/* How it Works */}
            <div className=' px-20 my-20'>
                <h3 className='text-3xl font-semibold mb-6' >How it Works</h3>
                <div className='grid grid-cols-4 gap-4'>
                    <Howitwork />
                    <Howitwork />
                    <Howitwork />
                    <Howitwork />
                </div>
            </div>
            {/* Our Services */}
            <div className='my-20 space-y-8 rounded-xl bg-secondary p-16'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-5xl font-semibold text-center text-white mb-2'>
                        Our Services
                    </h3>
                    <p className='w-1/2 text-center text-white font-light text-base'>
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                <div className=' grid grid-cols-3 gap-4'>
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                </div>
            </div>
            {/* Brands */}
            <div className='my-20'>
                <h3 className='text-3xl font-semibold text-center mb-8'>
                    We've helped thousands of sales teams
                </h3>
                <Brands />
            </div>
            {/* Reviews */}
            <div className='my-20'>
                <Reviews reviewsPromise={reviewsPromise} />
            </div>
        </main>
    );
};

export default Home;