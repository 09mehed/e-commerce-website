import React, { useEffect, useState } from 'react'
import Title from '../Title'
import PriceFormate from '../PriceFormate'
import { ProductType } from '../../../type'
import Button from '../Button';
import toast from 'react-hot-toast';

interface Props {
  cart: ProductType[];
}

const CartSummary = ({cart}: Props) => {

  const [totalAmount, setTotalAmount] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)

  useEffect(() => {
    let amount = 0;
    let discount = 0;

    cart.map((item) => {
      amount += item?.price * item.quantity!;
      discount += ((item?.price * item.quantity!)  / 100 * item.quantity)
    })
    setTotalAmount(amount)
    setDiscountAmount(discount)
  },[cart])

  const handleCheckOut = () => {
    toast.success("checkout is coming soon")
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