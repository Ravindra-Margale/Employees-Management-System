import React, { useState } from 'react'
import { setLocalStorage } from '../utils/LocalStorage'

const Header = (props) => {

  // const [username, setusername] = useState('')
  // if (!data) {
  //   setusername('Admin')
  // }else{
  //   setusername(data.firstName)
  // }
  
   const logOutuser = ()=>{
       localStorage.setItem('loggedInUser','')

      props.changeUser('')
      //  window.location.reload()
   }


  return (
    <div className='flex items-end justify-between '>
        <h1  className='text-2xl font-medium'>
            Hello <br />
            <span className='text-3xl font-semibold'>{props.firstName}</span>  </h1>
        <button  onClick={logOutuser} className='bg-red-500 text-sm font-medium text-white px-2  py-1 rounded-md'> Log Out</button>
    </div>
  )
}

export default Header 