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
const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={5}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={img1} alt="" />
                <p className='text-2xl text-white -mt-20 uppercase text-center'>salads</p>
            </SwiperSlide>
            <SwiperSlide><img src={img2} alt="" />
                <p className='text-2xl text-white -mt-20 uppercase text-center'>pizza</p></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" />
                <p className='text-2xl text-white -mt-20 uppercase text-center'>soups</p></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" />
                <p className='text-2xl text-white -mt-20 uppercase text-center'>deserts</p></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" />
                <p className='text-2xl text-white -mt-20 uppercase text-center'>salads</p></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" />
                <p className='text-2xl text-white -mt-16 uppercase text-center'>pizza</p></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" />
                <p className='text-2xl text-white -mt-20 uppercase text-center'>soups</p></SwiperSlide>

        </Swiper>
    )
}

export default Category
