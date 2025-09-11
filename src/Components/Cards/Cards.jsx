"use client";
import React from 'react'
import Link from 'next/link'

const Cards = () => {
     React.useEffect(() => {
    fetch('/api/metrics', {
      method: 'POST',
      body: JSON.stringify({ action: 'usage' }),
      headers: { 'Content-Type': 'application/json' },
    });
  }, []);


  const handleOrderClick = async () => {
    try {
      await fetch('/api/metrics', {
        method: 'POST',
        body: JSON.stringify({ action: 'adoption' }),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {


      await fetch('/api/metrics', {
        method: 'POST',
        body: JSON.stringify({ action: 'error' }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
  };

  return (
    <div id='cards' className=' mt-10 bg-gray-200 scroll-mt-20'>
      <div className='flex justify-between px-36 pt-10 items-center'>
        <h1 className='text-2xl font-bold'>Link card</h1>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={1}
    stroke="currentColor"
    className="w-12 h-12 text-white bg-black rounded-full p-2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
      </div>
      <div className=' mt-10 flex justify-between items-center mx-36'>
        <img src="/images/card-1.jpg" alt="" className='rounded-4xl w-2/4 h-72' />
        <p className='w-2/5 text-3xl'>Link all your bank cards in one place — quick, simple, hassle-free.</p>
      </div>
      <Link  href="/form" >
      <button onClick={handleOrderClick} className='bg-black text-white mx-36 w-36 mt-12 mb-12 rounded-2xl h-12 cursor-pointer'>Link your card</button>
        </Link>
    </div>
  )
}

export default Cards
