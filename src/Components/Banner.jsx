import React from 'react';
import Image from 'next/image';
import { FaArrowRight, FaYoutube, IconName } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='md:flex md:justify-between mt-10'>
            <div>
                <button className='btn btn-outline text-black btn-xs rounded-2xl'>MENTAL HEALTH AT 30s</button>
                <h1 className='text-5xl mt-5 font-semibold'>Beat your <br /> anxiety with <br /> therapy</h1>
                <p className='mt-5'>To live your life to the fullest,we are <br />continuing to find ways</p>
                <div className='mt-5'>
                    <button className='btn bg-black text-white rounded-3xl hover:text-black'>Get Help <FaArrowRight></FaArrowRight></button>
                    <button className='btn bg-none border-none ml-5'><FaYoutube className='text-yellow-500 w-5 h-5'></FaYoutube> Play Reviews</button>
                </div>
            </div>
          <div>
          <Image
           src='/Images/Web-assignment-fotor-2023061814593.png'
           alt='banner image'
           width={500}
           height={300}
           ></Image>
          </div>
        </div>
    );
};

export default Banner;