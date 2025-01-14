import React from 'react'

const Failtask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] p-5 overflow-auto bg-yellow-300 rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 px-1 py-0 text-sm'>{data.category}</h3>
      <h4 className='text-base' >{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold' >{data.taskTitle}</h2>
    <p  className='text-sm mt-2'> {data.taskDescription}</p>
    <div className='mt-4'>
      <button className=' bg-red-600 w-full'>Failed-Task</button>
    </div>
   </div>
  )
}

export default Failtask