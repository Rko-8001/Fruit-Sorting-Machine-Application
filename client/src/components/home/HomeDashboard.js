import React from 'react'
import Sidebar from '../sidePages/sideBar/SideBar'

export default function HomeDashboard() {
  return (
    <>
      <div className='flex h-full'>
        <Sidebar />
        <div>HomeDashboard</div>
      </div>
    </>
  )
}
