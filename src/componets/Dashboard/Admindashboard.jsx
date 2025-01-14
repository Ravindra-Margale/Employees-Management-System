import React from 'react'
import Header from '../../Other/Header'
import Createtask from '../../Other/Createtask'
import AllTask from '../../Other/AllTask'

const Admindashboard = (props) => {
  return (
    <div className='h-screen w-full p-7 mt-6'>
        <Header changeUser={props.changeUser}/>

       <Createtask/>
       <AllTask/>
    </div>
  )
}

export default Admindashboard