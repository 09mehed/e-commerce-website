'use client'
import { navigation } from '@/constants'
import { Dialog, DialogPanel } from '@headlessui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { RiMenu3Fill } from 'react-icons/ri'
import SocialLinks from '../SocialLinks'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div onClick={toggleMenu} className='text-2xl md:hidden text-gray-500 hover:text-[#0C55AA] duration-200 cursor-pointer'>
                <RiMenu3Fill></RiMenu3Fill>
            </div>
            <Dialog open={isOpen} as="div" className="relative z-50 md:hidden text-white/80" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90">
                    <DialogPanel
                        transition
                        className="w-[94%] space-y-4 p-6 border border-[#55585B] rounded-md absolute top-10 m-5 bg-black"
                    >
                        <div className="flex justify-between items-center gap-5">
                            <h3 className='font-semibold text-xl'>Navigation Menu</h3>
                            <button onClick={() => setIsOpen(false)}  title="Close menu" className='text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40'>
                                <MdClose />
                            </button>
                        </div>
                        <div className='flex flex-col gap-5 pt-5'>
                            {
                                navigation?.map((item) => (
                                    <Link key={item?.title} href={item?.href} onClick={() => setIsOpen(false)} className='hover:text-[#0989ff] relative group flex items-center gap-2'>
                                        <span className='w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-[#0989ff]'></span>
                                        {item?.title}
                                        <span className='absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:border-[#0989ff] duration-200'></span>
                                    </Link>
                                ))
                            }
                        </div>
                        <SocialLinks></SocialLinks>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileMenu