import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

 const [userData,setuserData] = useContext (AuthContext)


  return (
    <div  className='bg-[#1C1C1C] p-5 rounded-md mt-5 h-70 '>
    
    <div  className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded-md'>
         <h2 className='w-1/6'>Employee-Name</h2>
         <h3 className='w-1/6'> New Task</h3>
         <h5 className='w-1/6'> Active Task </h5>
         <h5 className='w-1/6'> Completed</h5>
         <h5 className='w-1/6'>Failed</h5>
     </div>
 <div className=' '>

     {userData.map(function(elem,idx){
         
         return  <div key={idx}  className='border-2 py-2 mb-2 px-4 flex justify-between rounded-md '>
         <h2 className='text-xl w-1/6 text-white-600'>{elem.firstName}</h2>
         <h3 className='text-xl w-1/6 text-blue-600'>{elem.taskCounts.newTask}</h3>
         <h5 className='text-xl w-1/6 text-yellow-800'>{elem.taskCounts.active} </h5>
         <h5 className='text-xl w-1/6 text-gray-600'> {elem.taskCounts.completed}</h5>
         <h5 className='text-xl w-1/6 text-red-600'> {elem.taskCounts.failed} </h5>
     </div>
          
    })}
 </div>






   
    </div>
  )
}

export default AllTask