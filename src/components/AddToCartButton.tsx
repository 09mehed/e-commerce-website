import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ProductType } from '../../type'

const AddToCartButton = ({product, className}: {product: ProductType;className?: string}) => {
  return (
    <button className={twMerge('w-full bg-transparent border border-[#0989ff] text-black rounded-full py-1.5 hover:bg-[#0989ff] hover:text-white duration-300 my-2', className)}>
        Add To Cart
    </button>
  )
}

export default AddToCartButton