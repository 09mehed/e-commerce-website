'use client'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props{
    children: React.ReactNode;
    className?: string;
    href?: string;
}

const Button = ({children, className, href, ...rest}: Props) => {
  return (
    <>
       {href ?  <Link href={href} className={twMerge('bg-[#0C55AA]/80, text-white py-2 px-2 hover:bg-[#0C55AA] cursor-pointer duration-200', className)}>{children}</Link> :  <button {...rest} className={twMerge('bg-[#0C55AA]/80, text-white py-2 px-6 hover:bg-[#0C55AA] cursor-pointer duration-200', className)}>{children}</button>} 
       
    </>
  )
}

export default Button