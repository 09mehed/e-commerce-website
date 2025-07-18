import CartProducts from '@/components/cartPage/CartProducts'
import Container from '@/components/Container'
import React from 'react'

const cartPage = () => {
  return (
    <Container className='py-10'>
        <CartProducts></CartProducts>
    </Container>
  )
}

export default cartPage