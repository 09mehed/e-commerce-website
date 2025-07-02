import { logo } from '@/assets'
import Image from 'next/image'
import React from 'react'

const MainLoader = () => {
  return (
    <div className='w-full min-h-screen absolute top-0 left-0 bg-white flex flex-col gap-2 items-center justify-center z-50'>
      <div className='w-52 p-4 rounded-lg bg-amazonBlue flex items-center justify-center relative'>
        <Image 
          src={logo}
          alt='logo'
          className='w-48 h-auto object-contain'
          priority
        ></Image>
      </div>

      <span className='w-14 h-14 inline-flex border-8 border-[#eaebed] rounded-full relative'>
        <span className='w-14 h-14 border-8 border-r-[#0989ff] border-b-[#eaebed] border-t-[#eaebed] border-1-[#eaebed] rounded-full absolute -top-2 -left-2 animate-spin'></span>
      </span>
      <p className='text-lg text-center font-semibold tracking-wide text-[#0C55AA]'>
        Loading...
      </p>
    </div>
  )
}

export default MainLoader