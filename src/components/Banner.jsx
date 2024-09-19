"use client"
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Banner = () => (
  <>
    <div className=' mx-1 lg:mx-10'>
      <AwesomeSlider className="h-[400px] md:h-[550px] w-96 my-10 ">
        <div className='h-full w-full'><img className='h-full w-full' src="https://i.ibb.co.com/smSN6Vw/DALL-E-2024-09-19-17-59-24-A-professional-website-banner-for-a-hiring-agency-and-communication-platf.webp" alt="" height="" /></div>
        <div className='h-full w-full'><img className='h-full w-full' src="    https://i.ibb.co.com/k4VPPfL/job-3279118.jpg" alt="" height="" /></div>
        <div className='h-full w-full'><img className='h-full w-full' src=" https://i.ibb.co.com/BjhD3YW/expert-5442081-1280.jpg" alt="" height="" /></div>
       
      </AwesomeSlider>

    </div>

   
  </>




);

export default Banner;
