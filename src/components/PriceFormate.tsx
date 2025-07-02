import React from 'react'
import { twMerge } from 'tailwind-merge';

interface Props{
    amount: number;
    className: string;
}

const PriceFormate = ({amount, className}: Props) => {
    const formatePrice = new Number(amount).toLocaleString('en-US', {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    })
  return (
    <span className={twMerge('font-medium', className)}>
        {formatePrice}
    </span>
  )
}

export default PriceFormate