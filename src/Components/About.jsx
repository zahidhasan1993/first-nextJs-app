import React from 'react';
import Image from 'next/image';
const About = () => {
    return (
        <div className='bg-green-700 md:flex'>
            <div className='py-20 pl-40'>
                <Image
                src='/Images/premium_photo-1661567408466-27899e8a4a2f.jpeg'
                alt='child image'
                width={300}
                height={300}
                className='rounded-lg'
                ></Image>
            </div>
            <div className='p-20'>
            <button className='btn btn-outline text-white btn-xs rounded-2xl'>Caring is always here</button>
            <h1 className='text-5xl mt-5 text-white font-semibold'>We help you to <br /><span className='text-amber-700'>grow confidence</span> <br />at any age</h1>
            </div>
        </div>
    );
};

export default About;