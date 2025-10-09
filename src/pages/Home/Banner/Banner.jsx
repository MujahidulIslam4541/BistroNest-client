
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/home/01.jpg'
import bannerImg2 from '../../../assets/home/02.jpg'
import bannerImg3 from '../../../assets/home/03.png'
import bannerImg4 from '../../../assets/home/04.jpg'
import bannerImg5 from '../../../assets/home/05.png'
import bannerImg6 from '../../../assets/home/06.png'
const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={bannerImg5} />
                </div>
                <div>
                    <img src={bannerImg2} />
                </div>
                <div>
                    <img src={bannerImg3} />
                </div>
                <div>
                    <img src={bannerImg1} />
                </div>
                <div>
                    <img src={bannerImg4} />
                </div>
                <div>
                    <img src={bannerImg6} />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner


// import { useState, useEffect } from 'react';

// const Banner = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const menuCategories = [
//         {
//             title: "Gourmet Pizza",
//             description: "Handcrafted pizzas with premium toppings",
//             icon: "🍕",
//             gradient: "from-red-500 to-orange-500"
//         },
//         {
//             title: "Decadent Desserts",
//             description: "Sweet endings to perfect your meal",
//             icon: "🍰",
//             gradient: "from-pink-500 to-rose-500"
//         },
//         {
//             title: "Fresh Salads",
//             description: "Garden-fresh ingredients, perfectly tossed",
//             icon: "🥗",
//             gradient: "from-green-500 to-emerald-500"
//         },
//         {
//             title: "Hearty Soups",
//             description: "Comfort in every spoonful",
//             icon: "🍲",
//             gradient: "from-amber-500 to-yellow-500"
//         },
//         {
//             title: "Refreshing Drinks",
//             description: "Quench your thirst with our special beverages",
//             icon: "🍹",
//             gradient: "from-cyan-500 to-blue-500"
//         }
//     ];

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev + 1) % menuCategories.length);
//         }, 4000);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
//             {/* Animated Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//                 <div className="absolute top-20 left-20 w-72 h-72 bg-[#D1A054] rounded-full filter blur-3xl animate-pulse"></div>
//                 <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D1A054] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
//             </div>

//             {/* Main Hero Section */}
//             <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

//                     {/* Left Content */}
//                     <div className="text-white space-y-8">
//                         <div className="space-y-4">
//                             <div className="inline-block">
//                                 <span className="px-4 py-2 bg-[#D1A054] bg-opacity-20 border border-[#D1A054] rounded-full text-[#D1A054] text-sm font-semibold tracking-wider">
//                                     WELCOME TO BISTRONEST
//                                 </span>
//                             </div>

//                             <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
//                                 Where Every
//                                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D1A054] to-[#f4c97e]">
//                                     Bite Tells
//                                 </span>
//                                 a Story
//                             </h1>

//                             <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
//                                 Experience culinary excellence with our exquisite selection of pizzas, desserts, salads, soups, and refreshing drinks. Crafted with passion, served with love.
//                             </p>
//                         </div>

//                         <div className="flex flex-wrap gap-4">
//                             <button className="px-8 py-4 bg-[#D1A054] hover:bg-[#b8954a] text-white font-semibold rounded-full transition transform hover:scale-105 shadow-lg hover:shadow-[#D1A054]/50">
//                                 Explore Menu
//                             </button>
//                             <button className="px-8 py-4 bg-transparent border-2 border-[#D1A054] text-[#D1A054] hover:bg-[#D1A054] hover:text-white font-semibold rounded-full transition transform hover:scale-105">
//                                 Reserve Table
//                             </button>
//                         </div>

//                         {/* Stats */}
//                         <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
//                             <div>
//                                 <div className="text-3xl font-bold text-[#D1A054]">500+</div>
//                                 <div className="text-sm text-gray-400">Menu Items</div>
//                             </div>
//                             <div>
//                                 <div className="text-3xl font-bold text-[#D1A054]">15K+</div>
//                                 <div className="text-sm text-gray-400">Happy Customers</div>
//                             </div>
//                             <div>
//                                 <div className="text-3xl font-bold text-[#D1A054]">4.9★</div>
//                                 <div className="text-sm text-gray-400">Avg Rating</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right - Animated Menu Cards */}
//                     <div className="relative h-[600px]">
//                         {menuCategories.map((category, index) => (
//                             <div
//                                 key={index}
//                                 className={`absolute inset-0 transition-all duration-700 transform ${currentSlide === index
//                                         ? 'opacity-100 translate-x-0 scale-100'
//                                         : currentSlide === (index - 1 + menuCategories.length) % menuCategories.length
//                                             ? 'opacity-0 -translate-x-full scale-95'
//                                             : 'opacity-0 translate-x-full scale-95'
//                                     }`}
//                             >
//                                 <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white border-opacity-20 h-full flex flex-col justify-center items-center text-center space-y-6">
//                                     <div className={`text-9xl animate-bounce`}>
//                                         {category.icon}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-4xl font-bold text-white mb-3">
//                                             {category.title}
//                                         </h3>
//                                         <p className="text-xl text-gray-300">
//                                             {category.description}
//                                         </p>
//                                     </div>
//                                     <button className="px-6 py-3 bg-[#D1A054] hover:bg-[#b8954a] text-white font-semibold rounded-full transition transform hover:scale-110 shadow-lg">
//                                         View {category.title.split(' ')[category.title.split(' ').length - 1]}
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Slide Indicators */}
//                         <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex gap-3">
//                             {menuCategories.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => setCurrentSlide(index)}
//                                     className={`h-2 rounded-full transition-all ${currentSlide === index
//                                             ? 'w-12 bg-[#D1A054]'
//                                             : 'w-2 bg-gray-500 hover:bg-gray-400'
//                                         }`}
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Floating Food Icons */}
//             <div className="absolute top-1/4 left-10 text-6xl opacity-20 animate-bounce delay-500">🍕</div>
//             <div className="absolute top-1/3 right-20 text-5xl opacity-20 animate-bounce delay-700">🍰</div>
//             <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-20 animate-bounce delay-1000">🥗</div>

//             {/* Scroll Indicator */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//                 <svg className="w-6 h-6 text-[#D1A054]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//                 </svg>
//             </div>
//         </div>
//     );
// };

// export default Banner;



// import React, { useState, useEffect } from "react";
// import bannerImg1 from "../../../assets/home/01.jpg";
// import bannerImg2 from "../../../assets/home/02.jpg";
// import bannerImg3 from "../../../assets/home/03.png";
// import bannerImg4 from "../../../assets/home/04.jpg";
// import bannerImg5 from "../../../assets/home/05.png";
// import bannerImg6 from "../../../assets/home/06.png";

// const primary = "#D1A054";

// const categories = [
//   { id: 1, name: "Pizza", img: bannerImg1, icon: "🍕", color: "from-orange-500 to-red-500" },
//   { id: 2, name: "Dessert", img: bannerImg5, icon: "🍰", color: "from-pink-500 to-purple-500" },
//   { id: 3, name: "Salad", img: bannerImg3, icon: "🥗", color: "from-green-500 to-emerald-500" },
//   { id: 4, name: "Soup", img: bannerImg2, icon: "🍲", color: "from-amber-500 to-orange-500" },
//   { id: 5, name: "Drinks", img: bannerImg6, icon: "🍹", color: "from-blue-500 to-cyan-500" },
// ];

// const Banner = () => {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveCategory((prev) => (prev + 1) % categories.length);
//     }, 4000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full overflow-hidden">
//       {/* HERO SECTION */}
//       <div className="relative w-full min-h-screen flex items-center overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div
//             className="absolute inset-0 transition-transform duration-700"
//             style={{
//               backgroundImage: `url(${bannerImg4})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               transform: `scale(${1 + scrollY * 0.0002})`,
//             }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
//           <div
//             className="absolute inset-0"
//             style={{
//               background: `linear-gradient(135deg, ${primary}30 0%, transparent 50%, ${primary}20 100%)`,
//             }}
//           />
//         </div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(20)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full opacity-20"
//               style={{
//                 width: Math.random() * 100 + 50 + "px",
//                 height: Math.random() * 100 + 50 + "px",
//                 background: primary,
//                 left: Math.random() * 100 + "%",
//                 top: Math.random() * 100 + "%",
//                 filter: "blur(60px)",
//                 animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left: Enhanced Text Content */}
//             <div className="text-white space-y-6">
//               {/* Animated Badge */}
//               <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-xl border-2 animate-pulse"
//                 style={{
//                   background: "rgba(209, 160, 84, 0.15)",
//                   borderColor: primary,
//                   boxShadow: `0 0 30px ${primary}40`,
//                 }}
//               >
//                 <span className="w-2 h-2 rounded-full animate-ping" style={{ background: primary }} />
//                 <span className="font-bold text-sm tracking-wider" style={{ color: primary }}>
//                   WELCOME TO BISTRONEST
//                 </span>
//               </div>

//               {/* Main Headline with Animation */}
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
//                 <span className="block animate-[slideUp_0.8s_ease-out]">
//                   Experience
//                 </span>
//                 <span
//                   className="block text-transparent bg-clip-text animate-[slideUp_0.8s_ease-out_0.2s] bg-gradient-to-r"
//                   style={{
//                     backgroundImage: `linear-gradient(135deg, ${primary}, #f4c97e)`,
//                     filter: "drop-shadow(0 0 30px rgba(209,160,84,0.5))",
//                   }}
//                 >
//                   Culinary Magic
//                 </span>
//               </h1>

//               <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl animate-[fadeIn_1s_ease-out_0.4s] opacity-0 fill-mode-forwards">
//                 Handcrafted pizzas, divine desserts, fresh salads, warming soups & refreshing drinks — 
//                 all prepared with passion and served with love.
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap gap-4 pt-4 animate-[fadeIn_1s_ease-out_0.6s] opacity-0 fill-mode-forwards">
//                 <a
//                   href="/menu"
//                   className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all hover:scale-105 shadow-2xl"
//                   style={{
//                     background: primary,
//                     boxShadow: `0 10px 40px ${primary}60`,
//                   }}
//                 >
//                   <span className="relative z-10 flex items-center gap-2">
//                     Order Now
//                     <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </svg>
//                   </span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#b8954a] to-[#D1A054] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
//                 </a>

//                 <a
//                   href="/booking"
//                   className="px-8 py-4 rounded-full font-bold text-white border-2 hover:bg-white hover:text-black transition-all hover:scale-105 shadow-xl backdrop-blur-md"
//                   style={{ borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)" }}
//                 >
//                   Reserve Table
//                 </a>
//               </div>

//               {/* Stats Grid */}
//               <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-[fadeIn_1s_ease-out_0.8s] opacity-0 fill-mode-forwards">
//                 <div>
//                   <div className="text-4xl font-black" style={{ color: primary }}>500+</div>
//                   <div className="text-sm text-gray-300 font-medium">Menu Items</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-black" style={{ color: primary }}>20K+</div>
//                   <div className="text-sm text-gray-300 font-medium">Happy Customers</div>
//                 </div>
//                 <div>
//                   <div className="text-4xl font-black" style={{ color: primary }}>4.9★</div>
//                   <div className="text-sm text-gray-300 font-medium">Average Rating</div>
//                 </div>
//               </div>

//               {/* Trust Badges */}
//               <div className="flex flex-wrap gap-6 pt-6 text-sm text-white/80 animate-[fadeIn_1s_ease-out_1s] opacity-0 fill-mode-forwards">
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${primary}30` }}>
//                     ⚡
//                   </div>
//                   <div>
//                     <div className="font-semibold text-white">Fast Delivery</div>
//                     <div className="text-xs">30-45 mins</div>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${primary}30` }}>
//                     🏆
//                   </div>
//                   <div>
//                     <div className="font-semibold text-white">Award Winning</div>
//                     <div className="text-xs">Best Restaurant 2024</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Interactive Image Collage */}
//             <div className="relative hidden lg:block">
//               {/* Main Grid */}
//               <div className="relative w-full aspect-square">
//                 {/* Center Large Image */}
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div
//                     className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 border-4"
//                     style={{
//                       borderColor: primary,
//                       boxShadow: `0 20px 60px ${primary}40`,
//                     }}
//                   >
//                     <img
//                       src={categories[activeCategory].img}
//                       alt={categories[activeCategory].name}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                     <div className="absolute bottom-6 left-6 right-6 text-white">
//                       <div className="text-6xl mb-2">{categories[activeCategory].icon}</div>
//                       <div className="text-3xl font-bold">{categories[activeCategory].name}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Orbiting Small Images */}
//                 {categories.map((cat, idx) => {
//                   const angle = (idx * 360) / categories.length;
//                   const radius = 280;
//                   const x = Math.cos((angle * Math.PI) / 180) * radius;
//                   const y = Math.sin((angle * Math.PI) / 180) * radius;

//                   return (
//                     <div
//                       key={cat.id}
//                       className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500"
//                       style={{
//                         transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${
//                           activeCategory === idx ? 1.2 : 0.8
//                         })`,
//                         opacity: activeCategory === idx ? 0 : 1,
//                       }}
//                       onClick={() => setActiveCategory(idx)}
//                     >
//                       <div
//                         className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border-3 hover:scale-110 transition-transform"
//                         style={{
//                           borderColor: primary,
//                           boxShadow: `0 10px 30px ${primary}30`,
//                         }}
//                       >
//                         <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="flex flex-col items-center gap-2 text-white/70">
//             <span className="text-xs font-semibold tracking-widest">SCROLL DOWN</span>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* ENHANCED CATEGORIES STRIP */}
//       <div className="container mx-auto px-4 md:px-8 lg:px-16 -mt-20 relative z-20 pb-16">
//         <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
//           <div className="flex items-center justify-between mb-6">
//             <div>
//               <h3 className="text-2xl font-bold text-gray-800">Explore Our Menu</h3>
//               <p className="text-gray-500 text-sm mt-1">Discover delicious categories</p>
//             </div>
//             <div className="flex gap-2">
//               {categories.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setActiveCategory(idx)}
//                   className="w-2 h-2 rounded-full transition-all"
//                   style={{
//                     background: activeCategory === idx ? primary : "#e5e7eb",
//                     width: activeCategory === idx ? "24px" : "8px",
//                   }}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {categories.map((cat, idx) => (
//               <div
//                 key={cat.id}
//                 className="group relative rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
//                 onClick={() => setActiveCategory(idx)}
//                 style={{
//                   background: `linear-gradient(135deg, ${cat.color.split(" ")[1]}, ${cat.color.split(" ")[3]})`,
//                 }}
//               >
//                 <img
//                   src={cat.img}
//                   alt={cat.name}
//                   className="w-full h-48 object-cover opacity-70 group-hover:opacity-90 transition-opacity"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
//                   <div className="text-5xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</div>
//                   <div className="text-xl font-bold mb-1">{cat.name}</div>
//                   <div className="text-xs opacity-80 mb-3">Fresh & Tasty</div>
//                   <button
//                     className="px-4 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all"
//                     style={{ background: primary, color: "white" }}
//                   >
//                     Explore →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translate(0, 0); }
//           25% { transform: translate(10px, -10px); }
//           50% { transform: translate(-5px, 5px); }
//           75% { transform: translate(-10px, -5px); }
//         }
        
//         .fill-mode-forwards {
//           animation-fill-mode: forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Banner;


