"use client";

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-gray-200 sticky top-0 z-50'>
      <div className='pl-36'>
        <Image 
          className='w-16' 
          src="/images/logo.png" 
          alt="eaZyLinks Logo" 
          width={64} 
          height={64} 
          priority 
        />
      </div>
      <div className='flex gap-10 text-lg font-semibold mx-36'>
        <Link href='#home' className='cursor-pointer'>Home</Link>
        <Link href='#cards' className='cursor-pointer'>Card</Link>
        <Link href='#eazy' className='cursor-pointer'>eaZyLinks</Link>
      </div>
    </div>
  );
};

export default Navbar;
