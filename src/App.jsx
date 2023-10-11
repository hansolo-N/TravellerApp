import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from "./pages/Product"
import Pricing from "./pages/Pricing"
import Homepage from "./pages/Homepage"
import City from './components/City'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Form from './components/Form'
import Login from './pages/Login'
function Traveller() {
  const [cities,setCities] = useState([])
  const [isLoading,setIsLoading] = useState(false)


  useEffect(function(){
    async function fetchCities(){
      try {
        setIsLoading(true)
        const response = await fetch("http://localhost:8000/cities")
        const data = await response.json()
        setCities(data)
      } catch (error) {
        console.log(error)
      }
      finally{
        setIsLoading(false)
      }
    }
    fetchCities()
  },[])
 
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='pricing' element={<Pricing/>}/>
          <Route path='app' element={<AppLayout/>}>
            <Route index element={<CityList cities={cities}/>}/>
            <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
            <Route path ='cities/:id' element={<City/>}/>
            <Route path='countries' element={<CountryList cities={cities} isLoading={isLoading}/>}/>
            <Route path='form' element={<Form/>}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Traveller