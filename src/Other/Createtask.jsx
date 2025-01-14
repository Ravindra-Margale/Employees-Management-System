import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const Createtask = () => {

const [userData,setuserData] = useContext (AuthContext)


  const [newTask, setnewTask] = useState({})
const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [ taskDate, settaskDate] = useState('')
  const [asignTo, setasignTo] = useState('')
  const [category, setcategory] = useState('')

  const submitHandler=(e)=>{
e.preventDefault()  
  
setnewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})

 const data= userData


 data.forEach(function(elem){
 if (asignTo==elem.firstName) {
elem.tasks.push(newTask);
elem.taskCounts.newTask=elem.taskCounts.newTask+1
  
  

 }
 })

setuserData(data)
console.log(data)

settaskDate('')
setasignTo('')
settaskDescription('')
setcategory('')
settaskTitle('')







  }
  return (
    
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form  onSubmit={(e)=>{
              submitHandler(e)
            }}
              className='flex   w-full  item-start justify-between flex-wrap '>

                <div className='w-1/2'>

                <div   >
               <h3 className='text-sm text-gray-300 mb-0.5'>
                Task Title</h3>
               <input
                 value={taskTitle}
                 onChange={(e)=>{
                  settaskTitle(e.target.value)
                 }}
               className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4' type="text" placeholder='Make you design' />
               </div>
             <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>date</h3>
             <input 
                value={taskDate}
                onChange={(e)=>{
                 settaskDate(e.target.value)
                }}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4' type="date" />
                </div>

                <div>
                <h3  className='text-sm text-gray-300 mb-0.5' >Asign to</h3>
                <input 
                 value={asignTo}
                 onChange={(e)=>{
                  setasignTo(e.target.value)
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]
                border-gray-500 mb-4' type="text" placeholder='Employee Name' />
                </div>
                <div>  
                 <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
             <input 
                value={category}
                onChange={(e)=>{
                 setcategory(e.target.value)
                }}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4' type="text" placeholder='design ,Dev, Testing' />
             </div>
             </div>
               
               <div className='w-2/5  flex-col items-start'> 
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
               <textarea 

               value={taskDescription}
               onChange={(e)=>{
                settaskDescription(e.target.value)
               }}

               className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-500 mb-4' name="" id=""  cols ="30 "rows="10"></textarea>
               
               
           
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm mt-4 w-full 
                rounded-lg'>create Task</button>
                </div>
            </form>
        </div> 
    
  )
}

export default Createtask