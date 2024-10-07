import React from 'react';
import effects from '../assets/experience/effects.png';
import illustrator from '../assets/experience/illustrator.png';
import indesign from '../assets/experience/indesign.png';
import photoshop from '../assets/experience/photoshop.png';
import pro from '../assets/experience/pro.png';
import canva from '../assets/experience/canva.png';
import figma from '../assets/experience/figma.png';
import sketch from '../assets/experience/sketch.png';

const Expertise = () => {
    const skills = [
        { name: 'After Effects', icon: effects },
        { name: 'Illustrator', icon: illustrator },
        { name: 'InDesign', icon: indesign },
        { name: 'Photoshop', icon: photoshop },
        { name: 'Premiere Pro', icon: pro },
        { name: 'Canva', icon: canva },
        { name: 'Figma', icon: figma },
        { name: 'Sketch', icon: sketch },
    ];

    return (
        <section className='bg-blue-50'>
            <div className="container mx-auto py-12" id='expertise'>
                <h2 className="text-3xl md:text-5xl font-semibold text-center">My Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mt-8 p-2">
                    {skills.map((skill) => (
                        <div key={skill.name} className="border-2 border-blue-500 rounded w-full shadow-lg flex flex-col items-center p-10">
                            <img src={skill.icon} width={90} alt="" />
                            <p className="mt-2 text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
