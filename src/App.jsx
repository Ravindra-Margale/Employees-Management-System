import { useContext, useEffect, useState } from 'react'

import './App.css'
import Login from './componets/auth/Login'
import Employeedashboard from './componets/Dashboard/Employeedashboard'
import Admindashboard from './componets/Dashboard/Admindashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/LocalStorage'



function App() {

  const [user, setUser] = useState(null)

  const [loggedInUserData, setloggedInUserData] = useState(null)

 const [userData,setuserData]= useContext (AuthContext)
    // console.log(data);

  useEffect(() => {
  
     const loggedInUser= localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  }, [])





  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData  ) {
      const employee = userData.find((e) => e.email == email && e.password == password)

      if (employee) {
        setUser('employee')

         setloggedInUserData(employee) 
        //  console.log(employee)

        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee  }))
      }

    } else {
      alert("Please write correct data")
    }
  }



  return (
    <>





{
  !user ? (
    <Login handleLogin={handleLogin} />
  ) : user === 'admin' ? (
    <Admindashboard   changeUser={setUser}/>
  ) : user === 'employee' ? (
    <Employeedashboard data={loggedInUserData} changeUser={setUser} />
  ) : null 
}



    </>
  )

}

export default App
