import React from 'react';
import { FaLinkedin ,FaInstagram,FaBehanceSquare} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {
    return (
        <div className='container mx-auto px-5 pb-10'>
            <h2 className='text-center  text-4xl font-semibold my-10'>Contact Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-5 md:gap-20'>
                <div>
                    <h3 className='text-2xl md:text-4xl font-semibold'>
                        Looking forward
                        to working with
                        You!</h3>
                </div>
                <div>
                    <div className='text-xl font-semibold'>
                        <h3>
                            Email Address
                        </h3>
                        <h3>
                            17nusratjahantamanna@gmail.com</h3>
                    </div>

                    <div className='text-xl font-semibold py-10'>
                        <h3>
                            Whats Number
                        </h3>
                        <h3>
                            +8801724521299
                        </h3>
                    </div>

                    <div className='text-xl font-semibold '>
                        <h3>
                            My Socials
                        </h3>
                        <div className='flex gap-5 text-2xl'>
                            <FaLinkedin />
                            <FaInstagram />
                            <TbBrandFiverr />
                            <FaBehanceSquare />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;