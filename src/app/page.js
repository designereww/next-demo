"use client";
import React, { useState } from 'react';
import CircularProgressBar from '@/components/CircularProgressBar/CircularProgressBar';
import CircularBar from '@/components/CircularBar/CircularBar';
import CircularStaticBar from '@/components/CircularStaticBar/CircularStaticBar';
import Homes from './Home';

export default function Home() {
  // const [percentage, setPercentage] = useState(4000);
  // const [mainprice, setMainprice] = useState(4000);

  // const handleChange = (e) => {
  //   let value = parseInt(e.target.value, 10);
  //   if (isNaN(value)) {
  //     value = 0;
  //   }
  //   if (value > 100) value = 100;
  //   if (value < 0) value = 0;
  //   setPercentage(value);
  // };
  // const mainhandleChange = (e) => {
  //   let value = parseInt(e.target.value, 10);
  //   if (isNaN(value)) {
  //     value = 0;
  //   }
  //   setMainprice(value);
  // }

  return (
    <div className='flex items-center justify-center h-screen gap-10'>
      {/* <CircularBar percentage={mainprice} onChange={mainhandleChange} strokeColor={'transparent'} />
      <div className='flex items-center gap-10'>
        <img src="assets/images/arrow-right-short.png" />
        <CircularProgressBar percentage={percentage} onChange={handleChange} />
      </div>
      <CircularProgressBar percentage={percentage} onChange={handleChange} strokeColor={'green'} />
      <div className='flex items-center gap-10'>
        <img src="assets/images/arrow-right-short.png" />
        <CircularStaticBar percentage={100} strokeColor={'green'} />
      </div> */}
      <Homes />
    </div>
  );
}
