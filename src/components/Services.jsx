import React from 'react';
import figma from '../assets/experience/figma.png';
const Services = () => {
    return (
        <section className='bg-blue-100'>
            <div className='container mx-auto py-10'>
                <h2 className='text-3xl md:text-5xl font-semibold text-center '>My Services</h2>
                <div className='mt-5' >
                    <div className='border-2 border-blue-600 p-5 rounded-md'>
                        <img src={figma} width={50} alt="" />
                        <h3 className='text-4xl font-semibold'>Framer Landing Page Design</h3>
                        <p className='text-xl py-5'>Need a stunning landing page designed in Framer? I'm here to help you bring any idea to life with a professionally designed landing page in Framer.</p>
                        <button className='border text-xl px-5 py-3
                hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 rounded-md'>Book a Call</button>
                    </div>
                    
                </div>

                <div className='mt-5' >
                    <div className='border-2 border-blue-600 p-5 rounded-md'>
                        <img src={figma} width={50} alt="" />
                        <h3 className='text-4xl font-semibold'>Framer Landing Page Design</h3>
                        <p className='text-xl py-5'>Need a stunning landing page designed in Framer? I'm here to help you bring any idea to life with a professionally designed landing page in Framer.</p>
                        <button className='border text-xl px-5 py-3
                hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 rounded-md'>Book a Call</button>
                    </div>
                    
                </div>

                <div className='mt-5' >
                    <div className='border-2 border-blue-600 p-5 rounded-md'>
                        <img src={figma} width={50} alt="" />
                        <h3 className='text-4xl font-semibold'>Framer Landing Page Design</h3>
                        <p className='text-xl py-5'>Need a stunning landing page designed in Framer? I'm here to help you bring any idea to life with a professionally designed landing page in Framer.</p>
                        <button className='border text-xl px-5 py-3
                hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 rounded-md'>Book a Call</button>
                    </div>
                    
                </div>

                
            </div>
        </section>
    );
};

export default Services;