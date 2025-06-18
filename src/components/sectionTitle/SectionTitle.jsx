import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-10/12 md:w-4/12 mx-auto text-center my-10'>
            <p className='text-[#DB9F12] p-2'>--- {subHeading} ---</p>
            <h2 className='text-3xl font-semibold  border-y-4 py-2 border-[#E8E8E8] uppercase'>{heading}</h2>
        </div>
    )
}

export default SectionTitle
