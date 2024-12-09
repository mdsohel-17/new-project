import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductsCards from '../GenericComponent/ProductsCards'
import { leatherbag } from './common.const'

const Leatherbag = () => {
  return (
    <>
    <Header/>
    <ProductsCards heading={'OUR LEATHER BAGS '} cardJson={leatherbag} />
    <Footer/>
    </>
  )
}

export default Leatherbag
