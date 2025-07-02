import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavoriteBorder } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='absolute right-2 bottom-44 border flex flex-col text-2xl border-[#eaebed] bg-white rounded-md overflow-hidden'>
        <button aria-label="Close" className='p-2 hover:bg-[#0989ff]/5 hover:text-[#0989ff] duration-200'>
            <FiShoppingCart></FiShoppingCart>
        </button>
        <button aria-label="Close" className='p-2 hover:bg-[#0989ff]/5 hover:text-[#0989ff] duration-200'>
            <LuEye></LuEye>
        </button>
        <button aria-label="Close" className='p-2 hover:bg-[#0989ff]/5 hover:text-[#0989ff] duration-200'>
            <MdFavoriteBorder></MdFavoriteBorder>
        </button>
    </div>
  )
}

export default Sidebar