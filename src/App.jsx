import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import TodoPage from './components/TodoPage'

export default function App() {
  return (
    <div className='flex min-h-screen w-full bg-gray-100'>
      <SideBar />
      <TodoPage />
      

    </div>  
    )
}


