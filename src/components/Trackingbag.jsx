import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductsCards from '../GenericComponent/ProductsCards'
import { trackingbag } from './common.const'

const Trackingbag = () => {
  return (
   <>
   <Header/>
   <ProductsCards heading={'OUR Tracking Bag'} cardJson={trackingbag} />
   <Footer/>
   </>
  )
}

export default Trackingbag
