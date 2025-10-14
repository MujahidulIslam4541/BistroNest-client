import { useEffect, useState } from 'react'
import SectionTitle from '../../../components/sectionTitle/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('https://bistro-nest-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    return (
        <section className='py-12 md:py-16 bg-gradient-to-b from-white to-gray-50'>
            <div className='max-w-7xl mx-auto px-4'>
                <SectionTitle heading='testimonials' subHeading="What Our Client Say's"></SectionTitle>

                <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="mySwiper"
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review._id}>
                                <div className='flex flex-col items-center mx-4 sm:mx-12 md:mx-24 my-8 md:my-12'>
                                    {/* Rating with enhanced styling */}
                                    <div className='mb-6 transform hover:scale-105 transition-transform duration-300'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review?.rating}
                                            readOnly
                                        />
                                    </div>

                                    {/* Quote Icons with better styling */}
                                    <div className='flex gap-3 mb-6 opacity-20'>
                                        <svg width="40" height="70" viewBox="0 0 46.1523 84.6152" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M42.78 41.82C40.54 39.58 37.82 38.46 34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.77 15.38L34.61 15.38C35.65 15.38 36.55 15 37.32 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.32 1.14C36.56 0.38 35.65 0 34.61 0L30.77 0C26.6 0 22.62 0.81 18.83 2.43C15.05 4.05 11.78 6.25 9.01 9.01C6.25 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82Z" fill="#151515" fillOpacity="1" fillRule="nonzero" />
                                        </svg>
                                        <svg width="40" height="70" viewBox="0 0 46.1523 84.6152" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M42.78 41.82C40.54 39.58 37.82 38.46 34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.77 15.38L34.61 15.38C35.65 15.38 36.55 15 37.32 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.32 1.14C36.56 0.38 35.65 0 34.61 0L30.77 0C26.6 0 22.62 0.81 18.83 2.43C15.05 4.05 11.78 6.25 9.01 9.01C6.25 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82Z" fill="#151515" fillOpacity="1" fillRule="nonzero" />
                                        </svg>
                                    </div>

                                    {/* Review Details with card styling */}
                                    <div className='bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6 max-w-3xl border border-gray-100 hover:shadow-xl transition-shadow duration-300'>
                                        <p className='text-gray-700 text-base md:text-lg leading-relaxed text-center italic'>
                                            "{review?.details}"
                                        </p>
                                    </div>

                                    {/* Customer Name with enhanced styling */}
                                    <div className='text-center'>
                                        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                                            {review?.name}
                                        </h2>
                                        <div className='flex items-center justify-center gap-2 mt-2'>
                                            <div className='w-8 h-[2px] bg-orange-300'></div>
                                            <span className='text-gray-500 text-sm font-medium'>Verified Customer</span>
                                            <div className='w-8 h-[2px] bg-orange-300'></div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials