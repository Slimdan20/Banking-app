import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-gray-200 sticky top-0 z-50'>
      <div className='pl-36'><img className='w-16' src="/images/logo.png" alt="" /></div>
      <div className='flex gap-10 text-lg font-semibold mx-36'>
        <a href='#home' className='cursor-pointer'>Home</a>
        <a href='#cards' className='cursor-pointer'>Card</a>
        <a href='#eazy' className='cursor-pointer'>eaZyLinks</a>
      </div>
    </div>
  )
}

export default Navbar
