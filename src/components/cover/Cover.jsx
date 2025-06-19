import React from 'react'

const Cover = ({ img }) => {
    return (
        <div
            className="hero min-h-[300px] md:min-h-[400px] lg:min-h-[500px] bg-cover bg-center"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="bg-black/40 px-4 py-6 md:px-10 md:py-8 lg:px-20 lg:py-12 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-[700px] xl:w-[800px] h-auto lg:h-[300px] flex flex-col justify-center">
                    <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                        Our Menu
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl">
                        Would you like to try a dish?
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Cover
