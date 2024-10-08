import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function RoutesProtection() {
  const auth = localStorage.getItem('loggedIn')
  return  auth? <Outlet/>: <Navigate to={"/login"}/>
}

export default RoutesProtection
