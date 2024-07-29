import React from 'react'


const Card = () => {
  return (
    <div className="grid grid-cols-1 bg-white rounded-md">
        <div className='my-2'>
            <h2 className='font-semibold mx-4 my-5 px-2'>
                Bachelor in Medicine and Bachelor in Surgery (MBBS)
            </h2>
            <p className='text-sm mx-4 my-3 px-2'>
                <b>Period:</b> 17 October 2017 - 25 September 2022
            </p>
            <p className='text-sm mx-4 my-3 px-2'>
                <b>Achievements:</b> Graduated with First Class Honours. Consistently placed on the Dean's List for outstanding academic performance throughout the program.
            </p>
            <button className='bg-blue-500 text-white px-2 py-1 rounded-full text-xs mx-4 my-2'>
                Read More
            </button>
        </div>
        
        
      
    </div>
  )
}

export default Card

