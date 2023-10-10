import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
function Traveller() {

 
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='product' element={<Product/>}></Route>
          <Route path='pricing' element={<Pricing/>}></Route>
          <Route path='app' element={<AppLayout/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Traveller