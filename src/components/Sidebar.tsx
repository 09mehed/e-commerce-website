"use client"
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType, StateType } from '../../type'
import { addToFavorite } from '@/redux/shofySlice'
import toast from 'react-hot-toast'

const Sidebar = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch()

  const { favorite } = useSelector((state: StateType) => state?.shopy)
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(null)

  useEffect(() => {
    const availableProduct = favorite.find((item) => item?.id === product?.id)
    if (availableProduct) {
      setExistingProduct(availableProduct)
    }else{
      setExistingProduct(null)
    }
  }, [favorite, product])

  const handleFavorite = () => {
    dispatch(addToFavorite(product))
    if(existingProduct){
      toast.success('Remove from favorite successfully')
    }else{
      toast.success('Added from favorite successfully')
    }
  }

  return (
    <div className='absolute right-2 bottom-44 border flex flex-col text-2xl border-[#eaebed] bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40'>
      <button aria-label="Close" className='p-2 hover:bg-[#0989ff]/5 hover:text-[#0989ff] duration-200'>
        <FiShoppingCart></FiShoppingCart>
      </button>
      <button aria-label="Close" className='p-2 hover:bg-[#0989ff]/5 hover:text-[#0989ff] duration-200 border-y border-y-[#eaebed]'>
        <LuEye></LuEye>
      </button>
      <button
        onClick={handleFavorite}
        aria-label="Close"
        className='p-2 hover:bg-[#0989ff]/5 hover:text-[#0989ff] duration-200'>
        {
          existingProduct ? <MdFavorite className='text-[#0989ff]'></MdFavorite> : <MdFavoriteBorder></MdFavoriteBorder>
        }

      </button>
    </div>
  )
}

export default Sidebar