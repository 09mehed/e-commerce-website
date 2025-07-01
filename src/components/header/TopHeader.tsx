import React from 'react'
import Container from '../Container'
import { FaTruckMoving } from "react-icons/fa";
import { IoChevronDownSharp } from 'react-icons/io5';

const TopHeader = () => {
  return (
    <div className='bg-[#010f1c] text-gray-200'>
        <Container className='flex justify-between items-center'>
            <p className='w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1'>
                <FaTruckMoving className='text-[#ffb342] text-2xl mr-1' />Free Express shipping on orders $570+
            </p>
            <div className='hidden md:inline-flex items-center text-sm text-white'>
                <p className='headerTopMenu'>English <IoChevronDownSharp className='mt-1'></IoChevronDownSharp> </p>
                <p className='headerTopMenu'>USD <IoChevronDownSharp className='mt-1'></IoChevronDownSharp> </p>
                <p className='headerTopMenu'>Settings <IoChevronDownSharp className='mt-1'></IoChevronDownSharp> </p>
            </div>
        </Container>
    </div>
  )
}

export default TopHeader