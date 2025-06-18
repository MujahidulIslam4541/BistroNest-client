import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


// Import Category Image
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
const Category = () => {
    return (
        <section>

            <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'order online'}></SectionTitle>

            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>deserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className='text-2xl text-white -mt-20 uppercase text-center'>soups</p>
                </SwiperSlide>
            </Swiper>

        </section>
    )
}

export default Category
