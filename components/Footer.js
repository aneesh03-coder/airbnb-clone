import React from 'react'

const Footer = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-10 px-16 py-14 bg-gray-100 text-gray-600 max-w-7xl mx-auto'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How AirBnB Works</p>
                <p>News Room</p>
                <p>Investors</p>
                <p>AirBnB Plus</p>
                <p>AirBnB Luxe</p>
            </div>


            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is a clone</p>
                <p>And not a real website</p>
                <p>Learnt from Papa React</p>
                <p>PapaFAM</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Aneesh Kalra</p>
                <p>Presents</p>
                <p>AirBnB Clone</p>
                <p>Thousands of Visitors</p>
                <p>Subscribe Now</p>
            </div>

            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Say Hi YouTube</p>
                <p>Easter Eggs</p>
                <p>For the Win</p>
            </div>
          
        </div>
    )
}

export default Footer
