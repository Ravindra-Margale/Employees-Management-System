import React from 'react'

const TaskListnumbers = ({data}) => {
  return (
    <div className='flex   justify-between overflow-x-auto gap-5 mt-5   w-full' >

     <div className='rounded-xl w-[45%] px-9 py-6 bg-blue-400'>
    <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
    <h3 className='text-xl font-medium'>New Task</h3>
     </div>

     <div className='rounded-xl w-[45%]  px-9 py-6 bg-yellow-400'>
    <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
    <h3 className='text-xl font-medium'>Completed</h3>
     </div>

     <div className='rounded-xl w-[45%]  px-9 py-6 bg-orange-400'>
    <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
    <h3 className='text-xl font-medium'>Active Task</h3>
     </div>

     <div className='rounded-xl w-[45%]  px-9 py-6 bg-red-400'>
    <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
    <h3 className='text-xl font-medium'>Failed Task</h3>
     </div>
    </div>
  )
}

export default TaskListnumbers