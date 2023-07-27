import React from 'react'
const Course = ({image,category,title,participants,rating,price}) => {
  return (
    <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-md'>
      <img src={image} alt=""/>
      <div className='mt-2 text-xs text-Teal'>{category}</div>
      <div className='text-sm mt-2 font-bold'>{title}</div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='bg-Solitude p-1 rounded-full'>
          </div>
          <div className='text-sm font-bold'>{participants}</div>
        </div>
        <div className='text-sm font-bold'>{rating}</div>
        <div className=''>{price}</div>
      </div>
    </div>
    
  )
}

export default Course
