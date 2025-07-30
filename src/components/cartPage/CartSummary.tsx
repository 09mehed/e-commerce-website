import React, { useEffect, useState } from 'react'
import Title from '../Title'
import PriceFormate from '../PriceFormate'
import { ProductType } from '../../../type'
import Button from '../Button';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';

interface Props {
  cart: ProductType[];
}

const CartSummary =({cart}: Props) => {

  const [totalAmount, setTotalAmount] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)

  const { data:session } = useSession()

  useEffect(() => {
    let amount = 0;
    let discount = 0;

    cart.map((item) => {
      amount += item?.price * item.quantity!;
      discount += ((item?.price * item.discountPercentage)  / 100) * item.quantity!;
    })
    setTotalAmount(amount)
    setDiscountAmount(discount)
  },[cart])

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

  const handleCheckOut = async() => {
    const stripe = await stripePromise;
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        items: cart,
        email: session?.user?.email
      })
    })
    const checkOutSession = await res.json()
    await stripe ?.redirectToCheckout({
      sessionId: checkOutSession?.id,
    })
  }

  return (
    <div className='bg-gray-100 rounded-lg px-4 py-6 sm:py-10 lg:col-span-5 mt-10 lg:mt-0'>
      <Title>Cart Summary</Title>
      <div className='mt-5 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
            <Title className='text-lg font-medium'>Sub Total</Title>
            <PriceFormate className='text-base' amount={totalAmount}></PriceFormate>
        </div>
        <div className='flex items-center justify-between'>
            <Title className='text-lg font-medium'>Discount</Title>
            <PriceFormate className='text-base' amount={discountAmount}></PriceFormate>
        </div>
        <div className='flex items-center justify-between'>
            <Title className='text-lg font-medium'>Payable Amount</Title>
            <PriceFormate className='text-lg font-bold' amount={totalAmount - discountAmount}></PriceFormate>
        </div>
        <Button onClick={handleCheckOut} className='bg-[#0898ff]'>Checkout</Button>
      </div>
    </div>
  )
}

export default CartSummary