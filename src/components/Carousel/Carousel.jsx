import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Image Imports
import a1 from '../../assets/Carousel-01/1.jpg';
import a2 from '../../assets/Carousel-01/2.jpg';
import a3 from '../../assets/Carousel-01/3.jpg';
import a4 from '../../assets/Carousel-01/4.jpg';
import a5 from '../../assets/Carousel-01/5.jpg';
import a6 from '../../assets/Carousel-01/6.jpg';
import a7 from '../../assets/Carousel-01/7.jpg';

import b1 from '../../assets/Carousel-02/1.jpg';
import b2 from '../../assets/Carousel-02/2.jpg';
import b3 from '../../assets/Carousel-02/3.jpg';
import b4 from '../../assets/Carousel-02/4.jpg';
import b5 from '../../assets/Carousel-02/5.jpg';
import b6 from '../../assets/Carousel-02/6.jpg';
import b7 from '../../assets/Carousel-02/7.jpg';
import b8 from '../../assets/Carousel-02/8.jpg';

import c1 from '../../assets/Carousel-03/1.jpg';
import c2 from '../../assets/Carousel-03/2.jpg';
import c3 from '../../assets/Carousel-03/3.jpg';
import c4 from '../../assets/Carousel-03/4.jpg';
import c5 from '../../assets/Carousel-03/5.jpg';
import c6 from '../../assets/Carousel-03/6.jpg';
import c7 from '../../assets/Carousel-03/7.jpg';
import c8 from '../../assets/Carousel-03/8.jpg';

const Carousel = () => {
    return (
        <section className='container mx-auto my-10 px-3 '>
            <h2 className='text-4xl text-center mb-5 font-semibold'>Carousel Design</h2>
            {/* Carousel 1 */}
            <div className='mb-10 ps-3  md:ps-0'>
                <Swiper
                    spaceBetween={0}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                    
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // Mobile
                        },
                        768: {
                            slidesPerView: 3, // Tablet
                        },
                        1024: {
                            slidesPerView: 5, // Small Desktop
                        },
                        1280: {
                            slidesPerView: 8, // Large Desktop
                        },
                    }}
                >
                    <SwiperSlide><img src={b1} alt="Carousel 1 Image 1" className='object-fill ' /></SwiperSlide>
                    <SwiperSlide><img src={b2} alt="Carousel 1 Image 2" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={b3} alt="Carousel 1 Image 3" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={b4} alt="Carousel 1 Image 4" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={b5} alt="Carousel 1 Image 5" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={b6} alt="Carousel 1 Image 6" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={b7} alt="Carousel 1 Image 7" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={b8} alt="Carousel 1 Image 8" className='object-fill' /></SwiperSlide>
                </Swiper>
            </div>

            {/* Carousel 2 */}
            <div className='grid grid-cols-12 gap-5 my-10'>
                <div className='col-span-12 md:col-span-3 xl:col-span-2 mb-4 md:mb-0'>
                    <h3 className='text-2xl md:text-4xl lg:text-4xl font-semibold text-center md:text-left text-blue-600'>
                        Here's a showcase of Carousel Design
                    </h3>
                </div>
                <div className='col-span-12 md:col-span-9 ps-3 xl:col-span-10  md:ps-0'>
                    <Swiper
                        spaceBetween={0}
                        autoplay={{ delay: 2000 }}
                        modules={[Autoplay, Navigation]}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // Mobile
                            },
                            768: {
                                slidesPerView: 2, // Tablet
                            },
                            1024: {
                                slidesPerView: 5, // Small Desktop
                            },
                            1280: {
                                slidesPerView: 7, // Large Desktop
                            },
                        }}
                    >
                        <SwiperSlide><img src={a1} alt="Carousel 2 Image 1" className='object-fill' /></SwiperSlide>
                        <SwiperSlide><img src={a2} alt="Carousel 2 Image 2" className='object-fill' /></SwiperSlide>
                        <SwiperSlide><img src={a3} alt="Carousel 2 Image 3" className='object-fill' /></SwiperSlide>
                        <SwiperSlide><img src={a4} alt="Carousel 2 Image 4" className='object-fill' /></SwiperSlide>
                        <SwiperSlide><img src={a5} alt="Carousel 2 Image 5" className='object-fill' /></SwiperSlide>
                        <SwiperSlide><img src={a6} alt="Carousel 2 Image 6" className='object-fill' /></SwiperSlide>
                        <SwiperSlide><img src={a7} alt="Carousel 2 Image 7" className='object-fill' /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Carousel 3 */}
            <div className='ps-3 md:ps-0'>
                <Swiper
                    spaceBetween={0}
                    autoplay={{ delay: 2000 }}
                    modules={[Autoplay, Navigation]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // Mobile
                        },
                        768: {
                            slidesPerView: 3, // Tablet
                        },
                        1024: {
                            slidesPerView: 5, // Small Desktop
                        },
                        1280: {
                            slidesPerView: 8, // Large Desktop
                        },
                    }}
                >
                    <SwiperSlide><img src={c1} alt="Carousel 3 Image 1" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c2} alt="Carousel 3 Image 2" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c3} alt="Carousel 3 Image 3" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c4} alt="Carousel 3 Image 4" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c5} alt="Carousel 3 Image 5" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c6} alt="Carousel 3 Image 6" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c7} alt="Carousel 3 Image 7" className='object-fill' /></SwiperSlide>
                    <SwiperSlide><img src={c8} alt="Carousel 3 Image 8" className='object-fill' /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Carousel;
