import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const HeaderIcons = () => {
  return (
    <div className='flex justify-between items-center gap-3'>
        <Link href={'/favorite'} className='text-xl relative'>
            <MdFavoriteBorder></MdFavoriteBorder>
            <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-[#0C55AA] text-white rounded-full flex items-center justify-center'>0</span>
        </Link>
        <Link href={'/shopping'} className='text-xl relative'>
            <BiShoppingBag></BiShoppingBag>
            <span className='absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-[#0C55AA] text-white rounded-full flex items-center justify-center'>0</span>
        </Link>
    </div>
  )
}

export default HeaderIcons