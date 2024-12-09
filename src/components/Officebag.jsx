import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { officebag } from './common.const'
import ProductsCards from '../GenericComponent/ProductsCards'

const Officebag = () => {
  return (
    <>
    <Header/>
    <ProductsCards heading={'OUR Office Bag'} cardJson={officebag} />
    <Footer/>
    </>
  )
}

export default Officebag
