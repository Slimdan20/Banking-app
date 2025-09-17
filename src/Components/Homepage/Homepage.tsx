"use client";

import Link from "next/link";
import Image from "next/image";

const Homepage = () => {
  return (
    <div id='home' className='scroll-mt-24'>
      <div className='flex pl-36 pt-10 gap-5 items-center'>
        <div>
          <Image
            src="/images/user.jpg"
            alt="User profile" 
            className='w-16 h-16 rounded-4xl'
            width={64} 
            height={64} 
            priority 
          />
        </div>
        <div>
          <h1 className='text-gray-500'>Good morning</h1>
          <h1 className='text-2xl font-bold'>Joe Dawson</h1>
        </div>
      </div>
      <div className='text-center mt-20'>
        <h1 className='text-2xl text-gray-500 pb-1.5'>Total Balance</h1>
        <h1 className='text-6xl font-bold'>$50,000.00</h1>
      </div>
      <div className='text-center mt-7'>
        <Link href="/form">
          <button className='bg-black text-white mx-36 w-36 mt-12 rounded-2xl h-12 cursor-pointer'>Send money</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
