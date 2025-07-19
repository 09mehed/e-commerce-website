"use client"
import { getData } from '@/helpers'
import React, { useEffect, useRef, useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri'
import { ProductType } from '../../../type'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([])
  const [isInputFocused, setIsInputFocused] = useState(false)
  const searchContainerRef = useRef(null)

  useEffect(() => {
    const getProduct = async () => {
      const endPoint = 'https://dummyjson.com/products';
      try {
        const data = await getData(endPoint)
        setProducts(data?.products)
      } catch (error) {
        console.log("error fetching data", error);
      }
    }
    getProduct()
  })

  useEffect(() => {
    const filtered = products?.filter((item:ProductType) => 
      item?.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilterProducts(filtered)
  }, [search, products])

  useEffect(() => {
    const handleClicked = (e:MouseEvent) => {
      if(searchContainerRef && 
        // ts-ignore
        !searchContainerRef.current.contains(e.target)
      ){
        setIsInputFocused(false)
      }
    }
    document.addEventListener('mousedown', handleClicked);
    return () => {
      document.removeEventListener('mousedown', handleClicked)
    }
  },[])

  return (
    <div ref={searchContainerRef} className='hidden md:inline-flex flex-1 h-10 relative'>
      <input type="text" placeholder='Search products here' className='w-full h-full border-2 border-[#0C55AA] px-4 outline-none'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setIsInputFocused(true)}
      />

      {search && (<RiCloseLine onClick={() => setSearch("")} className='text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200' />)}

      <span className='w-10 h-10 bg-[#0C55AA]/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-[#0C55AA] hover:bg-[#0C55AA] duration-200 cursor-pointer' >
        <RiSearchLine></RiSearchLine>
      </span>

      { isInputFocused &&
        search && (
          <div className='absolute left-0 top-12 w-full mx-auto h-auto max-h-96 bg-white rounded-md overflow-y-scroll cursor-pointer text-black'>
            {
              filterProducts?.length > 0 ? <div>
                {
              filterProducts?.map((item:ProductType) => (
                <Link href={{
                  pathname: `/products/${item?.id}`,
                  query: { id: item?.id }
                }}
                onClick={() => setSearch("")}
                className='flex items-center gap-x-2 text-base font-medium hover:bg-[#55585b]/30 px-3 py-1.5'
                key={item?.id}>
                  <CiSearch className='text-lg'></CiSearch> {item?.title}
                </Link>
              ))
            }
              </div>: <div className='py-10 px-5'>
                <p className='text-base'>
                  Nothing matched with{" "} <span className='font-semibold underline underline-offset-2 decoration-[1px]'>{search}</span>{" "} please try again
                </p>
              </div>
            }
          </div>
        )
      }
    </div>
  )
}

export default SearchInput