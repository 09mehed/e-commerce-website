import Container from '@/components/Container'
import ProductImages from '@/components/ProductImages'
import { getData } from '@/helpers'
import React from 'react'
import { ProductType } from '../../../../type'
import ProductPrice from '@/components/ProductPrice'
import { MdStar } from 'react-icons/md'
import { FaRegEye } from 'react-icons/fa'
import PriceFormate from '@/components/PriceFormate'
import AddToCartButton from '@/components/AddToCartButton'
import { payment } from '@/assets'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface PageProps  {
    params: {
        id: string
    }
}

export default async function Page({ params }: PageProps) {
    const product: ProductType = await getData(`https://dummyjson.com/products/${params.id}`)

    if(!product) return notFound();

    return (
        <Container className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <ProductImages images={product?.images} />
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-bold'>
                    {product?.title}
                </h2>
                <div className='flex justify-between items-center'>
                    <ProductPrice product={product}></ProductPrice>
                    <div className='flex items-center gap-1'>
                        <div className='text-base text-[#] flex items-center'>
                            {
                                Array?.from({ length: 5 })?.map((_, index) => {
                                    const filled = index + 1 <= Math.floor(product.rating)
                                    const halfFilled = index + 1 > Math.floor(product.rating) && index < Math.ceil(product.rating)
                                    return (
                                        <MdStar key={index} className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-[#f7ca00]" : "text-[#55585b]"
                                            }`}></MdStar>
                                    )
                                })
                            }
                        </div>
                        <p className='text-base font-semibold'>{`(${product?.rating?.toFixed(1)}) reviews`}</p>
                    </div>
                </div>
                <p className='flex items-center'>
                    <FaRegEye className='mr-1'></FaRegEye>{""}
                    <span className='font-semibold mr-1'>250+</span> peoples are viewing this right now
                </p>
                <p>You are saving <PriceFormate amount={product?.price * (product?.discountPercentage / 100)} className='text-base font-semibold text-green-500'></PriceFormate> upon purchase</p>
                <div>
                    <p className='text-sm tracking-wide'>{product?.description}</p>
                    <p className='text-base'>{product?.warrantyInformation}</p>
                </div>
                <p>
                    Brand: <span className='font-semibold'>{product?.brand}</span>
                </p>
                <p>
                    Category: {""}
                    <span className='font-medium capitalize'>{product?.category}</span>
                </p>

                <p>Tags: {product?.tags?.map((item, index) => (
                    <span className='font-medium capitalize' key={index}>{item} {index < product?.tags?.length - 1 && ", "}</span>
                ))}</p>
                <AddToCartButton product={product} className="rounded-md uppercase font-semibold"></AddToCartButton>
                <div className='bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2'>
                    <Image src={payment} alt='payment' className='w-auto object-cover'></Image>
                    <p className='font-semibold'>Guaranteed safe & secure checkout</p>
                </div>
            </div>
            {/* product review */}
            <div className='p-10 bg-[#f7f7f7] md:col-span-2 flex items-center gap-10'>
                {
                    product?.reviews?.map((item) => (
                        <div key={item?.reviewerName} className='bg-white/80 p-5 border-[1px] border-amazonOrangeDark/50 rounded-md hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-1'>
                            <p>{item?.comment}</p>
                            <div className='text-xs'>
                                <p className='font-semibold'>{item?.reviewerName}</p>
                                <p>{item?.reviewerEmil}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex items-center'>
                                    {
                                        Array?.from({length: 5})?.map((_, index) => (
                                            <MdStar key={index} className={`${index < item?.rating ? "text-yellow-500" : "text-[#55585b]"}`}></MdStar>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}
