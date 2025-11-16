import React, { use } from 'react';
import customerTop from '../../../assets/customer-top.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)

    return (
        <div>
            <div className='grid place-items-center mb-10'>
                <img src={customerTop} alt="" />
                <h3 className='text-3xl font-semibold text-center mb-2'>
                    What our customers are sayings
                </h3>
                <p className='w-1/2 text-center font-light text-base'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
            >
                {
                    reviews.map(reviewC => <SwiperSlide key={reviewC.id}>
                        <ReviewCard reviewC={reviewC}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;