"use client";
import React, { useState } from 'react';
import CircularProgressBar from '@/components/CircularProgressBar/CircularProgressBar';
import CircularBar from '@/components/CircularBar/CircularBar';

export default function Home() {
  const [percentage, setPercentage] = useState(40);
  const [mainprice, setMainprice] = useState(4000);

  const handleChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = 0;
    }
    if (value > 100) value = 100;
    if (value < 0) value = 0;
    setPercentage(value);
  };
  const mainhandleChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = 0;
    }
    setMainprice(value);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularBar percentage={mainprice} onChange={mainhandleChange} strokeColor={'transparent'} />
      <CircularProgressBar percentage={percentage} onChange={handleChange} />
    </div>
  );
}
