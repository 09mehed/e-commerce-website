"use client"
import React, { useEffect, useState } from 'react'
import { ProductType, StateType } from '../../type';
import PriceFormate from './PriceFormate';
import { useSelector } from 'react-redux';

const ProductPrice = ({ product }: { product: ProductType }) => {

  const { cart } = useSelector((state: StateType) => state?.shopy)
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    const availableProduct = cart.find((item) => item?.id === product?.id)
    if (availableProduct) {
      setExistingProduct(availableProduct)
    }
  }, [cart, product])

  const regularPrice = product?.price
  const discountPrice = product?.price + product?.discountPercentage / 100;
  return (
    <div className='flex items-center gap-2'>
      <PriceFormate
        amount={existingProduct ? discountPrice * existingProduct.quantity! : discountPrice}
        className='text-gray-500 line-through font-normal'>
      </PriceFormate>
      <PriceFormate
        amount={existingProduct ? regularPrice * existingProduct.quantity! : regularPrice}
        className='font-semibold text-[#0989ff]'></PriceFormate>
    </div>
  )
}

export default ProductPrice