import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../Pages/userPages/LandingPage'
import GalleryPage from '../Pages/userPages/GalleryPage'

function UserRouter() {
  return (
   <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Gallery" element={<GalleryPage/>}/>
      </Routes>
    </div>
  )
}

export default UserRouter