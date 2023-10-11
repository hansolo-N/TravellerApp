import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import CityList from './components/CityList'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
function Traveller() {
  const [cities,setCities] = useState({})
  const [isLoading,setIsLoading] = useState(false)



  useEffect(function(){
    async function fetchCities(){
      try {
        const response = await fetch("http://localhost:8000/cities")
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    setCities(fetchCities())
  },[])
 
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='pricing' element={<Pricing/>}/>
          <Route path='app' element={<AppLayout/>}>
            <Route index element={<CityList/>}/>
            <Route path='cities' element={<CityList/>}/>
            <Route path='countries' element={<p>list of countries</p>}/>
            <Route path='form' element={<p>form submission</p>}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Traveller