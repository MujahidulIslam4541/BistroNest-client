// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import bannerImg1 from '../../../assets/home/01.jpg'
// import bannerImg2 from '../../../assets/home/02.jpg'
// import bannerImg3 from '../../../assets/home/03.png'
// import bannerImg5 from '../../../assets/home/04.jpg'
// import bannerImg6 from '../../../assets/home/05.png'
// import bannerImg4 from '../../../assets/home/06.png'
// const Banner = () => {
//     return (
//         <div>
//             <Carousel>
//                 <div>
//                     <img src={bannerImg5} />
//                 </div>
//                 <div>
//                     <img src={bannerImg2} />
//                 </div>
//                 <div>
//                     <img src={bannerImg3} />
//                 </div>
//                 <div>
//                     <img src={bannerImg1} />
//                 </div>
//                 <div>
//                     <img src={bannerImg4} />
//                 </div>
//                 <div>
//                     <img src={bannerImg6} />
//                 </div>
//             </Carousel>
//         </div>
//     )
// }

// export default Banner




import { FaUtensils, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import UseContext from '../../../hooks/useContext'
import { Link } from 'react-router-dom'

export default function Banner() {
  const { user } = UseContext()
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient Overlay (Fixed: no click blocking) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-24 max-w-5xl">
          {/* Logo/Icon */}
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-2"
            style={{ backgroundColor: '#D1A054' }}
          >
            <FaUtensils className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Delicious Food
            <span className="block mt-2" style={{ color: '#D1A054' }}>
              Extraordinary Taste
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience culinary excellence with our handcrafted dishes, made from the finest ingredients by our expert chefs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to='/menu'
              className="px-10 py-4 text-lg font-semibold text-white rounded-lg transition-all hover:shadow-2xl transform hover:scale-105"
              style={{ backgroundColor: '#D1A054' }}
            >
              Explore Menu
            </Link>

            <Link to={user?.email ? '/dashboard/booking' : '/signIn'}
              className="px-10 py-4 text-lg font-semibold text-white rounded-lg border-2 transition-all hover:bg-white/10"
              style={{ borderColor: '#D1A054' }}
            >
              Book a Table
            </Link>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <FaClock className="w-8 h-8 mx-auto mb-3" style={{ color: '#D1A054' }} />
              <h3 className="text-white font-semibold text-lg mb-2">Opening Hours</h3>
              <p className="text-gray-300">Mon - Sun: 10AM - 11PM</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <FaMapMarkerAlt className="w-8 h-8 mx-auto mb-3" style={{ color: '#D1A054' }} />
              <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-300">123 Restaurant Street, City</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <FaUtensils className="w-8 h-8 mx-auto mb-3" style={{ color: '#D1A054' }} />
              <h3 className="text-white font-semibold text-lg mb-2">Cuisine</h3>
              <p className="text-gray-300">International & Local</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
