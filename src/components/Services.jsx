import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Website Development',
            description: 'Cultivate your digital footprint with premium WordPress website development services tailored to your objectives. From intricate e-commerce platforms to innovative membership portals, my dedication to excellence ensures unparalleled performance and user engagement.',
            bgColor: 'bg-gray-800',
        },
        {
            title: 'E-Commerce Stores',
            description: 'Transform your online presence with a keen focus on user experience and functionality. I create tailor-made solutions to showcase your products effectively. Elevate your brand and boost sales with my expertly crafted e-commerce websites.',
            bgColor: 'bg-yellow-500',
        },
        {
            title: 'Website Maintenance',
            description: 'From robust security enhancements to swift bug fixes, I ensure your website operates at peak performance. My expertise extends to proactive backup solutions and lightning-fast speed optimizations.',
            bgColor: 'bg-gray-800',
        }
    ];

    return (
        <div className="container mx-auto bg-gray-900 text-white py-12">
            <h2 className="text-3xl font-semibold text-center">My Services for Your Business</h2>
            <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
                {services.map((service) => (
                    <div key={service.title} className={`p-6 ${service.bgColor} w-96 rounded shadow-lg flex flex-col items-center text-center`}>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="mt-4">{service.description}</p>
                        <button className="mt-6 text-yellow-500 hover:underline">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
