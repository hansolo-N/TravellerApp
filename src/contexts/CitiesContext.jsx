import { useState ,useEffect, useContext, createContext} from "react";


const CitiesContext = createContext()

function CitiesProvider({children}){
    const [cities,setCities] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [currentCity,setCurrentCity] = useState({})


      async function getCity(id){
        try {
          setIsLoading(true)
          const response = await fetch(`http://localhost:8000/cities/${id}`)
          const data = await response.json()
          setCurrentCity(data)
  
        } catch (error) {
          throw new Error("something went wrong with fetch request")
        }
        finally{
          setIsLoading(false)
        }
      }
  

  
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
    return (<CitiesContext.Provider value={{cities,isLoading,currentCity,getCity}}>
      {children}
      </CitiesContext.Provider>)
}

function useCities(){
  const context = useContext(CitiesContext)
  if(context===undefined) throw new Error('cities context was used outside cities provider')
  return context
}


export {CitiesProvider,useCities}