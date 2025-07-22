"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { LiaUser } from 'react-icons/lia'

const SignUpButton = () => {
    const { data: session } = useSession()

    return (
        <>
            {
                session?.user ? <div onClick={() => signOut()} className='flex items-center gap-2 cursor-pointer text-sm'>
            <div className='border-2 border-gray-500 w-10 h-10 rounded-full'>
                <Image src={session.user.image!} alt='userImage' width={100} height={100} className='w-full h-full rounded-full object-cover'></Image>
            </div>
            <div className=''>
                <p className='text-xs'>{session?.user?.name}</p>
                <p className='font-medium'>Logout</p>
            </div>
        </div>: (<div onClick={() => signIn()} className='flex items-center gap-2 cursor-pointer text-sm'>
            <div className='border-2 border-gray-700 p-1.5 rounded-full text-xl'>
                <LiaUser></LiaUser>
            </div>
            <div className=''>
                <p className='text-xs'>Hello, Guest</p>
                <p className='font-medium'>Login / Register</p>
            </div>
        </div>)
            }
        </>
    )
}

export default SignUpButton