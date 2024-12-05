import React from 'react'
import { bagimage1, bagimage2 } from '../utils/utils'

const Banner = () => {
  return (
    <div className='flex flex-wrap'>
      <div className='w-6/12 '>
       <div class="text-4xl font-medium text-center border-gray-400 border-2 rounded-xl h-full">
       TrailBliss Bags Brings<br></br> You High-Quality Bags<br></br> Designed to Fit<br></br> Your Everyday Life.
       <p class="text-base">TrailBliss Bags offers stylish, durable,<br></br> and versatile bags for every occasion.<br></br> Carry comfort and quality wherever you go.</p>
       </div>
      </div>
      <div className='w-6/12 flex flex-auto '>
       <div class="h-full w-100  border-gray-400 border-2 rounded-xl">
        <img src={bagimage1}
         alt=""
         className="hover:scale-150 transition-all duration-1000"
          />
         
       </div>
       <div  class=" border-gray-400 border-2 rounded-xl">
       <img src={bagimage2}
         alt=""
         className="hover:scale-150 transition-all duration-1000"
          />
       </div> 
      
      </div>
      <div>
     
      </div>
    </div>
  )
}

export default Banner
