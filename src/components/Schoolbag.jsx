import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProductsCards from '../GenericComponent/ProductsCards'
import { schoolbag } from './common.const'

const Schoolbag = () => {
  return (
   <>
   <Header/>
   <ProductsCards  heading={'OUR School Bag'} cardJson={schoolbag}/>
   <Footer/>
   </>
  )
}

export default Schoolbag
