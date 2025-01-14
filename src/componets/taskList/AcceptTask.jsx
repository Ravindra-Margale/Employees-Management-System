import React from 'react'

const AcceptTask = ({data}) => {
  return (
    
    <div className='flex-shrink-0 h-full w-[300px] overflow-auto p-5 bg-red-300 rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 px-1 py-0 text-sm'>{data.category}</h3>
      <h4 className='text-base' >{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold' >{data.taskTitle}</h2>
    <p  className='text-sm mt-2'> {data.taskDescription}</p>

    <div className=' flex justify-between mt-4'>
   <button className='bg-green-700 py-2 text-sm'> Mark as Completed</button>
   <button className='bg-red-700 py-2 px-1 text-sm'> Mark as Failed</button>
   </div>
   
   </div>
  )
}

export default AcceptTask