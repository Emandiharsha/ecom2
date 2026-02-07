import React from 'react'
import FeedBackItems from './FeedBackItems'

const FeedBackList = () => {

    //conditional rendering
    // <div className='bg-white rounded-xl p-12 text-center'>
    //     <p className='text-gray-500 text-lg'>No suggesitions found.Add one!</p>

    // </div>
  return (
    <div className='space-y-4'>
        {/* i will use map method here */}
      <FeedBackItems/>
    </div>
  )
}

export default FeedBackList
