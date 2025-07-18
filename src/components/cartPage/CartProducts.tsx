"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { ProductType, StateType } from '../../../type'
import Button from '../Button'
import CartProduct from './CartProduct'
import CartSummary from './CartSummary'

const CartProducts = () => {
    const { cart } = useSelector((state: StateType) => state?.shopy)
    return (
        <div>
            {
                cart?.length > 0 ? (
                    <>
                        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            Shopping Cart
                        </h1>
                        <div className='mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-1'>
                            <section className='lg:col-span-7'>
                                <div className='divide-y divide-gray-200 border-b border-t border-gray-200'>
                                    {
                                        cart.map((product:ProductType) => (
                                            <CartProduct key={product?.id} product={product}></CartProduct>
                                        ))
                                    }
                                </div>
                            </section>
                            <CartSummary></CartSummary>
                        </div>
                    </>
                ) :
                    (<div className='bg-white h-80 my-10 flex flex-col gap-4 items-center py-4 rounded-lg border border-gray-200 drop-shadow-2xl'>
                        <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                            Shopping Cart
                        </h1>
                        <p className='text-base max-w-[500px] text-center text-gray-600 tracking-wide leading-6'>
                            Your cart is empty. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ut beatae nostrum quasi quos libero ipsam ea eius non voluptatibus.
                        </p>
                        <Button href='/' className='bg-[#0989ff]/90 text-gray-100 px-8 py-4 rounded-md hover:bg-[#0989ff] duration-200 uppercase text-sm font-semibold tracking-wide'>go to shopping</Button>
                    </div>)
            }
        </div>
    )
}

export default CartProducts