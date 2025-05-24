import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../Pages/userPages/LandingPage'

function UserRouter() {
  return (
   <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter