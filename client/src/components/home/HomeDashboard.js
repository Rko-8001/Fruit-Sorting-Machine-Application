import React from 'react'
import Sidebar from '../sidePages/sideBar/SideBar'
import SortCategory from './optionInput/SortCategory'

export default function HomeDashboard() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <SortCategory />
      </div>
    </>
  )
}
