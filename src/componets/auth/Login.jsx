import React, { useState } from 'react'

const Login = ({handleLogin}) => {
   


  const [email, setemail] = useState('')
  const [password,setpassword]= useState('')

  const Submithandler=(e)=>{
    e.preventDefault()
      
    handleLogin(email,password)
    setemail("")
    setpassword("")
  }

  return (
    <div  className='flex h-screen w-screen items-center justify-center' >
        <div className='border-2 border-emerald-600 p-10' >
         <form 
          
          onSubmit={(e)=>{
           Submithandler(e)
          }

          }
         className='flex flex-col items-center justify-center' >

   <input 
   value={email}
   onChange={(e )=>{
    setemail(e.target.value)
   }}
   required className=' outline-none bg-transparent border-2 border-emerald-600 py-2 px-4 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />

   <input 
     value={password}
   onChange={(e)=>{
    setpassword(e.target.value)
   }}
   required className='outline-none bg-transparent border-2 border-emerald-600 py-2 px-4 text-xl rounded-full placeholder:text-gray-400 mt-5' type="password" placeholder='Enter your password'/>

   <button className='text-white outline-none border-2 border-none bg-emerald-600 py-2 px-28 text-xl rounded-full placeholder:text-white mt-7' >
    Log   in</button>

         </form>
        </div>
    </div>
  )
}

export default Login