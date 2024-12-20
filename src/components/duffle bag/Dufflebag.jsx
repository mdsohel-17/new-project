import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { dufflebag } from '../common.const'
import ProductsCards from '../../GenericComponent/ProductsCards'

const Dufflebag = () => {
  return (
    <>
    <Header/>
    <ProductsCards heading={'OUR Duffle Bag'} cardJson={dufflebag} />
    <Footer/>
    </>
  )
}

export default Dufflebag
