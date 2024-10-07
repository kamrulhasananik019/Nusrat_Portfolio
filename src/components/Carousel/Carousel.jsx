import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
        <section className='bg-blue-100'>
            <div className='container mx-auto p-5 px-3 '>
                <h2 className='text-3xl md:text-5xl text-center mb-5 font-semibold'>Carousel Design</h2>
                <div className='py-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {/* Carousel 1 */}
                    <div className=''>
                        <Swiper
                            spaceBetween={20}
                            autoplay={{ delay: 3000 }}
                            pagination={{ clickable: true }}
                            modules={[Autoplay, Navigation, Pagination]}
                            slidesPerView={1}
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

                    <div className=''>
                        <Swiper
                            spaceBetween={20}
                            autoplay={{ delay: 3000 }}
                            modules={[Autoplay, Navigation, Pagination]}
                            pagination={{ clickable: true }}
                            slidesPerView={1}

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

                    {/* Carousel 3 */}
                    <div >
                        <Swiper
                            spaceBetween={20}
                            autoplay={{ delay: 3000 }}
                            modules={[Autoplay, Navigation, Pagination]}
                            pagination={{ clickable: true }}
                            slidesPerView={1}
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
                </div>
            </div>
        </section>
    );
};

export default Carousel;
