import React from 'react'
import Header from '../../Other/Header'
import TaskListnumbers from '../../Other/TaskListnumbers'
import TaskList from '../taskList/TaskList'

const Employeedashboard = (props) => {

  return (
    
    <div className='p-5 bg-[#1C1C1C] h-screen ' >
     
   <Header changeUser={props.changeUser} data={props.data}/>
   <TaskListnumbers data={props.data} />
   <TaskList  data={props.data} />

    </div>
  )
}

export default Employeedashboard