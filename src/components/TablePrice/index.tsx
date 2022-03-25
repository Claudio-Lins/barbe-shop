import React from 'react'
import { CortesClassicos } from './CortesClassicos'
import { Container } from './styles'

export function TablePrice() {
  return (
    <Container>
      <div className=" w-full bg-barber-shop-darkGray p-4 md:p-10">
        <div className="border border-barber-shop-orange p-4 md:p-10 flex w-full flex-col md:flex-row divide-y md:divide-x md:divide-y-0">
          <CortesClassicos />
          <CortesClassicos />
        </div>
      </div>
    </Container>
  )
}
