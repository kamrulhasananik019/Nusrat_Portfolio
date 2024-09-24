import React from 'react';
import { FaLinkedin, FaInstagram, FaBehanceSquare } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {
    return (
        <div className='container mx-auto px-5 pb-10'>
            <div className='text-center my-10 '>
                <h2 className='  text-4xl font-semibold '>Let's Connect!</h2>
                <p className='pt-2 text-xl'>Let's create something unique together! Here's how you can reach out to me!</p>
                <div className='flex gap-5 text-2xl text-blue-600 justify-center py-5'>
                    <a href="https://www.linkedin.com/in/nusratjahangraphi-/"><FaLinkedin /> </a>
                    <a href="https://www.instagram.com/nusrat_graphi/?hl=en"><FaInstagram /></a>
                    <a href="https://www.fiverr.com/nusratjahan04"><TbBrandFiverr /></a>
                    <a href="https://www.behance.net/nusratjahangraphi-"><FaBehanceSquare /></a>
                </div>
                <button className='border text-xl px-5 py-3
                hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600 rounded-md'>Book a Call</button>
            </div>
        </div>
    );
};

export default Contact;