import React from 'react'
import Navigation from '../Customer/Components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'
function Layout() {
    
  return (
    <div>
        <Navigation />
        <Outlet />

    </div>
  )
}

export default Layout