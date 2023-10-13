import { createContext,useState ,useEffect} from "react";

const CitiesContext = createContext()

function CitiesProvider({children}){
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

    return <CitiesContext.Provider
        value={{cities,isLoading}}
    >
        {children}
    </CitiesContext.Provider>
}

export {CitiesProvider}