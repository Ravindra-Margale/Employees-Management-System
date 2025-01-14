import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import Completetask from './Completetask'
import Failtask from './Failtask'

const TaskList = ({data}) => {
  // console.log(data);
  return (
    <div id='taskList' className='h-[68%]  overflow-x-auto flex items-center justify-start w-full py-5 gap-5 flex-nowrap mt-5'>
       
       {data.tasks.map((elem,idx)=> {
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask  key={idx} data={elem}/>
        }
        if(elem.completed){
          return <Completetask  key={idx } data={elem}/>
        }
        if(elem.failed){
          return <Failtask  key={idx} data={elem} />
        }

       })}
       


       {/* <AcceptTask/>
       <NewTask/>
     < Completetask/>

   <Failtask/> */}
   
     
    </div>
  )
}

export default TaskList