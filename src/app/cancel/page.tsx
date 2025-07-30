import Button from '@/components/Button'
import Container from '@/components/Container'
import Title from '@/components/Title'
import React from 'react'

const cancelPage = () => {
  return (
    <Container className='py-10'>
        <Title>Your Product has been cancelled</Title>
        <p className='text-base tracking-wide max-w-3xl mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum quas placeat fuga eaque quam at exercitationem, quos nostrum, deleniti voluptate expedita odio reiciendis voluptates, aperiam tempora optio? Ex, quo!
        </p>
        <div className='mt-5 flex items-center gap-x-5'>
            <Button href='/' className='rounded-md bg-black text-white'>
                Continue Shopping
            </Button>
            <Button href='/cart' className='rounded-md bg-black text-white'>
                View Cart
            </Button>
        </div>
    </Container>
  )
}

export default cancelPage