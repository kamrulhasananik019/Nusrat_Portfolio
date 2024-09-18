import React from 'react';
import projects1 from '../assets/portfolio/1.jpg';
import projects2 from '../assets/portfolio/2.jpg';
import projects3 from '../assets/portfolio/3.jpg';
import projects4 from '../assets/portfolio/4.jpg';
import projects5 from '../assets/portfolio/5.jpg';
import projects9 from '../assets/portfolio/9.jpg';
import projects10 from '../assets/portfolio/10.jpg';
import projects11 from '../assets/portfolio/11.jpg';
import projects12 from '../assets/portfolio/12.jpg';
import projects13 from '../assets/portfolio/13.jpg';
import projects14 from '../assets/portfolio/14.jpg';


const Portfolio = () => {
    const projects = [
        {
            image: projects1,
            title: 'Nexion',
            category: 'Brand Identity'
        },
        {
            image: projects2,
            title: 'TechLaunch',
            category: 'Web Development'
        },
        {
            image: projects3,
            title: 'Creative Corp',
            category: 'Graphic Design'
        },
        {
            image: projects4,
            title: 'Startup Hub',
            category: 'Mobile App Design'
        },
        {
            image: projects5,
            title: 'Global Ventures',
            category: 'Brand Strategy'
        },
        {
            image: projects9,
            title: 'UI Mastery',
            category: 'UI/UX Design'
        },
        {
            image: projects10,
            title: 'E-Commerce Blast',
            category: 'E-Commerce Development'
        },
        {
            image: projects11,
            title: 'The Branders',
            category: 'Logo Design'
        },
        {
            image: projects12,
            title: 'Appify',
            category: 'App Development'
        },
        {
            image: projects13,
            title: 'Fashion Trend',
            category: 'Social Media Campaign'
        },
        {
            image: projects14,
            title: 'Visionary',
            category: 'Marketing Strategy'
        }
    ];

    return (
        <section className='bg-blue-100 p-5'>
            <div className="container mx-auto py-12 " id='portfolio'>
                <h2 className="text-3xl font-semibold text-center">My Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 ">
                    {projects.map((project, index) => (
                        <div key={index} className="rounded shadow-lg">
                            <img src={project.image} alt={project.title} className="w-full h-auto rounded" />
                            <div className='p-4'>
                                <p className="my-2">{project.category}</p>
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
