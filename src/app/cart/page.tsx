import CartProducts from '@/components/cartPage/CartProducts'
import Container from '@/components/Container'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const cartPage = async() => {
  const session = await getServerSession();
  if(!session?.user){
    redirect("/");
  }
  return (
    <Container className='py-10'>
        <CartProducts></CartProducts>
    </Container>
  )
}

export default cartPage