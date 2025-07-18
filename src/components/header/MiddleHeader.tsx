import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import {logo} from '@/assets'
import SearchInput from './SearchInput'
import Link from 'next/link'
import { LiaUser } from 'react-icons/lia'
import HeaderIcons from './HeaderIcons'
import MobileMenu from './MobileMenu'


const MiddleHeader = () => {
  return (
    <div className='border-b-[1px] border-b-gray-400'>
        <Container className='py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between'>
            <Link href={'/'}> 
                <Image src={logo } alt='logo' className='w-28'></Image>
            </Link>
            <SearchInput></SearchInput>
            <div className='hidden md:inline-flex items-center gap-3'>
                <Link href={'/signin'} className='flex items-center gap-2 cursor-pointer text-sm'>
                    <div className='border-2 border-gray-700 p-1.5 rounded-full text-xl'>
                        <LiaUser></LiaUser>
                    </div>
                    <div className=''>
                        <p className='text-xs'>Hello, Guest</p>
                        <p className='font-medium'>Login / Register</p>
                    </div>
                </Link>
                <HeaderIcons></HeaderIcons>
            </div>
            <MobileMenu></MobileMenu>
        </Container>
    </div>
  )
}

export default MiddleHeader