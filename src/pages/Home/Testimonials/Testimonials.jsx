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
        fetch('reviws.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <section>
            <SectionTitle heading='testimonials' subHeading="What Our Client Say's"></SectionTitle>



            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className=' flex flex-col space-y-3.5  items-center mx-24 my-8'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                />

                                <div className='flex gap-2'>
                                    <svg width="40.152340" height="70.615234" viewBox="0 0 46.1523 84.6152" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M42.78 41.82C40.54 39.58 37.82 38.46 34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.77 15.38L34.61 15.38C35.65 15.38 36.55 15 37.32 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.32 1.14C36.56 0.38 35.65 0 34.61 0L30.77 0C26.6 0 22.62 0.81 18.83 2.43C15.05 4.05 11.78 6.25 9.01 9.01C6.25 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82Z" fill="#151515" fill-opacity="1.000000" fill-rule="nonzero" />
                                    </svg>
                                    <svg width="40.152340" height="70.615234" viewBox="0 0 46.1523 84.6152" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <desc>
                                            Created with Pixso.
                                        </desc>
                                        <defs />
                                        <path id="Vector" d="M42.78 41.82C40.54 39.58 37.82 38.46 34.61 38.46L21.15 38.46C19.55 38.46 18.18 37.9 17.06 36.77C15.94 35.65 15.38 34.29 15.38 32.69L15.38 30.77C15.38 26.52 16.88 22.89 19.89 19.89C22.89 16.88 26.52 15.38 30.77 15.38L34.61 15.38C35.65 15.38 36.55 15 37.32 14.24C38.08 13.48 38.46 12.58 38.46 11.53L38.46 3.84C38.46 2.8 38.08 1.9 37.32 1.14C36.56 0.38 35.65 0 34.61 0L30.77 0C26.6 0 22.62 0.81 18.83 2.43C15.05 4.05 11.78 6.25 9.01 9.01C6.25 11.77 4.05 15.05 2.43 18.84C0.81 22.62 0 26.6 0 30.76L0 73.07C0 76.28 1.12 79 3.36 81.25C5.6 83.49 8.33 84.61 11.53 84.61L34.61 84.61C37.82 84.61 40.54 83.49 42.78 81.25C45.03 79 46.15 76.28 46.15 73.07L46.15 50C46.15 46.79 45.03 44.07 42.78 41.82Z" fill="#151515" fill-opacity="1.000000" fill-rule="nonzero" />
                                    </svg>
                                </div>
                                <p>{review?.details}</p>
                                <h2 className="text-2xl text-orange-500 text-center">{review?.name}</h2>
                            </div>

                        </SwiperSlide>)
                }

            </Swiper>
        </section>
    )
}

export default Testimonials
