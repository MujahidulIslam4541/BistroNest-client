

const Cover = ({ img, heading, subHeading }) => {
    return (
        <div
            className="hero min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center bg-fixed relative overflow-hidden"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            {/* Animated overlay with gradient */}
            <div className="hero-overlay bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

            {/* Decorative animated elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-yellow-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-yellow-500 rounded-full animate-pulse delay-75"></div>
            </div>

            <div className="hero-content text-center text-neutral-content relative z-10">
                <div className="bg-black/50 backdrop-blur-sm border-2 border-yellow-500/30 px-4 py-6 md:px-10 md:py-8 lg:px-20 lg:py-12 rounded-2xl shadow-2xl w-11/12 md:w-3/4 lg:w-[700px] xl:w-[800px] h-auto lg:h-[300px] flex flex-col justify-center relative overflow-hidden hover:border-yellow-500/50 transition-all duration-500">

                    {/* Decorative corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-500 rounded-tl-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-500 rounded-br-2xl"></div>

                    {/* Golden glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 animate-pulse"></div>

                    <div className="relative z-10">
                        {/* Decorative line above heading */}
                        <div className="flex items-center justify-center mb-6">
                            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24"></div>
                            <div className="mx-4 w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent w-24"></div>
                        </div>

                        <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white drop-shadow-[0_0_15px_rgba(209,160,84,0.5)] hover:drop-shadow-[0_0_25px_rgba(209,160,84,0.8)] transition-all duration-300">
                            {heading}
                        </h1>

                        {/* Decorative line below heading */}
                        <div className="flex items-center justify-center mb-4">
                            <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-yellow-500/50 w-12"></div>
                            <div className="mx-2 w-1.5 h-1.5 bg-yellow-500/70 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-yellow-500/70 rounded-full"></div>
                            <div className="mx-2 w-1.5 h-1.5 bg-yellow-500/70 rounded-full"></div>
                            <div className="h-px bg-gradient-to-l from-transparent via-yellow-500/50 to-yellow-500/50 w-12"></div>
                        </div>

                        <p className="text-base md:text-lg lg:text-xl text-gray-100 font-light leading-relaxed max-w-2xl mx-auto">
                            {subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover