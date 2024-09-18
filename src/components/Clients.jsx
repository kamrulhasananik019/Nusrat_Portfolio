import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Clients.css'
// import required modules
import { EffectCards } from 'swiper/modules';

import ittadi from '../assets/review/ittadimart.png';
import mdimran from '../assets/review/mdimran.png';
import mdnayemhossen from '../assets/review/mdnayemhossen.png';
import aoleebagency from '../assets/review/aoleebagency.png';
import walidhasan from '../assets/review/walidhasan.png';
import sanjidaislam from '../assets/review/Sanjidaislam.png';
import tanvirislamtarek from '../assets/review/tanvirislamtarek.png';

const Clients = () => {
    return (
        <section className='bg-blue-100 py-10'>
            <div className='container mx-auto px-2'>
                <h2 className='text-xl md:text-4xl text-center mt-10 font-semibold'>What My Clients Say</h2>
                <div className='mt-5'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="clientsSwiper h-[420px] w-[340px]"
                    >
                        <SwiperSlide><img src={ittadi} alt="Ittadi Mart Review" /></SwiperSlide>
                        <SwiperSlide><img src={mdimran} alt="Md Imran Review" /></SwiperSlide>
                        <SwiperSlide><img src={mdnayemhossen} alt="Md Nayem Hossen Review" /></SwiperSlide>
                        <SwiperSlide><img src={aoleebagency} alt="Aoleeb Agency Review" /></SwiperSlide>
                        <SwiperSlide><img src={walidhasan} alt="Walid Hasan Review" /></SwiperSlide>
                        <SwiperSlide><img src={sanjidaislam} alt="Sanjida Islam Review" /></SwiperSlide>
                        <SwiperSlide><img src={tanvirislamtarek} alt="Tanvir Islam Tarek Review" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Clients;
