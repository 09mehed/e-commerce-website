"use client"
import Container from '@/components/Container'
import { resetCart } from '@/redux/shofySlice'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

const SuccessPage = () => {
    const searchParams = useSearchParams()
    const sessionId = searchParams.get("session_id")
    const dispatch = useDispatch()

    const router = useRouter();

  useEffect(() => {
    if (!sessionId) {
      router.push('/');
      return;
    }

    dispatch(resetCart());
    toast.success("Payment received successfully");
  }, [sessionId, dispatch, router]);
  return (
    <Container className='py-10'>
        <div className='min-h-[400px] flex flex-col items-center justify-center gap-5'>
            <h2 className='text-2xl md:text-4xl font-bold text-center'>
                Your Payment Accepted by shopy.com
            </h2>
            <p>You can view your orders or continue Shopping with us</p>
            <div className='flex items-center gap-x-5'>
                <Link href={"/orders"}>
                    <button className='bg-[#0C55AA]/90 text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-[#0C55AA] duration-300'>
                        View Orders
                    </button>
                </Link>
                <Link href={"/"}>
                    <button className='bg-[#0C55AA]/90 text-slate-100 w-52 h-12 rounded-full text-base font-semibold hover:bg-[#0C55AA] duration-300'>
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    </Container>
  )
}

export default SuccessPage;