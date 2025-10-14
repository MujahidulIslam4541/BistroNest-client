// import SectionTitle from "../../../components/sectionTitle/SectionTitle";
// import featuredImg from "../../../assets/home/featured.jpg";

// const Featured = () => {
//   return (
//     <div
//       className="bg-fixed bg-center bg-cover mt-24"
//       style={{ backgroundImage: `url(${featuredImg})` }}
//     >
//       <div className="bg-black/60 text-white py-16 px-4 md:px-28">
//         {/* Section Title */}
//         <div className="pb-8 text-center">
//           <SectionTitle heading="Featured Item" subHeading="Check it Out" />
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//           <div className="order-2 md:order-1 space-y-3">
//             <h3 className="text-sm uppercase">July 02, 2025</h3>
//             <h1 className="text-3xl md:text-4xl font-bold uppercase">
//               Where Can I Get Some?
//             </h1>
//             <p className="text-gray-200 text-sm md:text-base leading-relaxed">
//               Discover the story behind our featured dish — carefully crafted with
//               handpicked ingredients and timeless flavors. Taste the difference that
//               passion makes in every bite.
//             </p>
//             <button className="border-b-2 border-white hover:bg-white hover:text-black transition-all px-6 py-2 rounded-md mt-2">
//               Read More
//             </button>
//           </div>

//           {/* Image preview (optional) */}
//           <div className="order-1 md:order-2">
//             <img
//               src={featuredImg}
//               alt="Featured Dish"
//               className="rounded-md shadow-md"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;





import PizzaImg from "../../../assets/home/pizzabg.jpg";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover mt-24 relative overflow-hidden"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="bg-gradient-to-b from-black/70 via-black/60 to-black/70 text-white py-12 md:py-16 px-4 md:px-20">

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-5">
            {/* Date Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs md:text-sm uppercase tracking-wide font-medium">July 02, 2025</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold uppercase leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Where Can I Get Some?
            </h1>

            {/* Description */}
            <p className="text-gray-200 text-sm md:text-base leading-relaxed pr-0 md:pr-6">
              Discover the story behind our featured dish — carefully crafted with
              handpicked ingredients and timeless flavors. Taste the difference that
              passion makes in every bite.
            </p>

            {/* Enhanced Button */}
            <div className="pt-4">
              <button className="group relative inline-flex items-center gap-2 border-b-2 border-white hover:border-orange-400 bg-transparent hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 rounded-md font-semibold uppercase tracking-wide shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                <span>Read More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image with enhanced styling */}
          <div className="order-1 md:order-2 relative group">
            {/* Decorative border effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
            
            <div className="relative">
              <img
                src={PizzaImg}
                alt="Featured Dish"
                className="rounded-2xl shadow-2xl border-4 border-white/20 w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Overlay badge */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                Featured
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;