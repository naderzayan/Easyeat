import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import WhishList from './pages/WhishList'
import Cart from './pages/Cart'

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/whish_list' element={<WhishList />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
