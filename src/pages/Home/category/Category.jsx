import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Category Image
import img2 from '../../../assets/home/pizza.jpg'
import img1 from '../../../assets/home/salad.jpg'
import img3 from '../../../assets/home/soup.jpg'
import img4 from '../../../assets/home/dessert.jpg'
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
    const categories = [
        { img: img1, name: 'Salads', description: 'Fresh & Healthy', category: 'salad' },
        { img: img2, name: 'Pizza', description: 'Hot & Delicious', category: 'pizza' },
        { img: img3, name: 'Soups', description: 'Warm & Comforting', category: 'soup' },
        { img: img4, name: 'Desserts', description: 'Sweet & Tasty', category: 'dessert' },
        { img: img1, name: 'Salads', description: 'Fresh & Healthy', category: 'salad' },
        { img: img2, name: 'Pizza', description: 'Hot & Delicious', category: 'pizza' },
        { img: img3, name: 'Soups', description: 'Warm & Comforting', category: 'soup' },
        { img: img4, name: 'Desserts', description: 'Sweet & Tasty', category: 'dessert' },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'Order Online'}
            />

            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper mb-24 px-4 md:px-8"
            >
                {categories.map((category, index) => (
                    <SwiperSlide key={index}>
                        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                            {/* Image Container */}
                            <div className="relative h-64 md:h-80 overflow-hidden">
                                <img
                                    src={category.img}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-1">
                                    {category.name}
                                </h3>
                                <p className="text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {category.description}
                                </p>

                                {/* View Button with Link */}
                                <Link to={`/shope/${category.category}`}>
                                    <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 hover:bg-yellow-400 hover:scale-105">
                                        View Menu
                                    </button>
                                </Link>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx>{`
                .mySwiper .swiper-pagination-bullet {
                    background: #facc15;
                    opacity: 0.5;
                    width: 12px;
                    height: 12px;
                    transition: all 0.3s ease;
                }
                .mySwiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 32px;
                    border-radius: 6px;
                }
            `}</style>
        </section>
    );
};

export default Category;