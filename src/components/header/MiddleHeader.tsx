import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import {logo} from '@/assets'
import SearchInput from './SearchInput'
import Link from 'next/link'
import HeaderIcons from './HeaderIcons'
import MobileMenu from './MobileMenu'
import SignUpButton from '../SignUpButton'


const MiddleHeader = () => {
  return (
    <div className='border-b-[1px] border-b-gray-400'>
        <Container className='py-5 flex items-center gap-4 md:gap-6 lg:gap-20 justify-between'>
            <Link href={'/'}> 
                <Image src={logo } alt='logo' className='w-28'></Image>
            </Link>
            <SearchInput></SearchInput>
            <div className='hidden md:inline-flex items-center gap-3'>
                <SignUpButton></SignUpButton>
                <HeaderIcons></HeaderIcons>
            </div>
            <MobileMenu></MobileMenu>
        </Container>
    </div>
  )
}

export default MiddleHeader