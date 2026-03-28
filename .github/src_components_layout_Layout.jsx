import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Outlet />
      <BottomNav />
    </div>
  )
}

export default Layout