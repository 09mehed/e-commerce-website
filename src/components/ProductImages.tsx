'use client'
import Image from 'next/image';
import React, { useState } from 'react'

interface Props{
    images: string[];
}

const ProductImages = ({ images }: Props) => {
    const [currentsImage, setCurrentImage] = useState(images[0])
    console.log(images);
  return (
    <div className="flex float-start">
      <div>
        {images?.map((item, index) => (
            <Image 
              key={index} 
              src={item} 
              alt={`product image ${index}`} 
              width={200} 
              height={200} 
              className={`w-24 h-24 object-contain cursor-pointer opacity-50 hover:opacity-100 duration-200 border border-gray-200 rounded-sm mb-1 p-1 ${currentsImage === item && 'border-gray-500 opacity-100'}`}
              onClick={() => setCurrentImage(item)}
            />
        ))}
      </div>
      <div className='bg-gray-100 rounded-md ml-5 w-full max-h-[550px]'>
          <Image 
            src={currentsImage} 
            alt='product image' 
            width={500} 
            height={500} 
            className='w-full h-full object-contain'
          />
      </div>
    </div>
  )
}

export default ProductImages
