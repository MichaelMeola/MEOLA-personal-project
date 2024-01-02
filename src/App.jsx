import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Music from './pages/Music'
import Product from './pages/Product'
import SignUp from './pages/SignUp'
import Shop from './pages/Shop'
import NoPage from './pages/NoPage'
import './App.css'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
