import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/assets'
import SocialLinks from '../SocialLinks'
import Title from '../Title'
import { navigation } from '@/constants'
import { GoDotFill } from 'react-icons/go'
import { BsEnvelopeAt } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#f4f7f9] py-10 lg:py-20'>
      <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <div className='flex flex-col gap-y-3'>
            <Link href={'/'}>
              <Image src={logo} alt='logo'></Image>
            </Link>
            <p>We are a team a designer and developers that create high quality wordpress</p>
            <SocialLinks iconStyle='bg-[#ffffff] border border-[#0C55AA] shadow-md text-black p-3 text-lg hover:bg-[#0C55AA] hover:text-[#ffffff] cursor-pointer duration-200 rounded-md'></SocialLinks>
          </div> 
          <div>
            <Title>My Account</Title>
            {navigation?.map((item) => (
              <Link key={item?.title} href={item?.href} className='flex items-center gap-x-2 gap-y-3 text-gray-700 hover:text-[#0C55AA] duration-200 font-medium'>
                <GoDotFill size={10}></GoDotFill>
                {item?.title}
              </Link>
            ))}  
          </div>
          <div>
            <Title>Information</Title>
            {navigation?.map((item) => (
              <Link key={item?.title} href={item?.href} className='flex items-center gap-x-2 gap-y-3 text-gray-700 hover:text-[#0C55AA] duration-200 font-medium'>
                <GoDotFill size={10}></GoDotFill>
                {item?.title}
              </Link>
            ))}  
          </div> 
          <div>
            <Title>Talk to Us</Title>  
            <div className='mt-3'>
              <div>
                <p className='text-sm'>Got Question? Call us</p>
                <Title>+880161-9388873</Title>
              </div>
              <div className='mt-3'>
                <p className='text-base flex items-center gap-x-3 text-gray-600'>
                  <BsEnvelopeAt></BsEnvelopeAt> shofy@support.com
                </p>
              </div>
            </div>
          </div>         
      </Container>
    </div>
  )
}

export default Footer