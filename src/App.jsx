import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddBooks from './Components/AddBooks/AddBooks'
import ViewData from './Components/ViewBooks/ViewData'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import EditBooks from './Components/EditBooks/EditBooks'



function App() {
  

  return (
    <>
      <Header />

      <Routes >
        <Route path="/" element={<AddBooks />} />
        <Route path="/viewData" element={<ViewData />} />
        <Route path='/Edit/:id' element={<EditBooks /> } />
      </Routes>
    </>
  )
}

export default App
