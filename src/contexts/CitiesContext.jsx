import { useEffect, useContext, createContext, useReducer} from "react";


const CitiesContext = createContext()

const intitialState = {
  cities:[],
  isLoading: false,
  currentCity : {},
  error:""
}

function reducer(state,action){

  switch(action.type){

    case 'loading':
      return {...state,
        isLoading:true
      }

    case 'cities/loaded':
      return {...state,
        isLoading:false,
        cities:action.payload
      }
    
    case 'city/loaded':
      return {...state,
        isLoading:false,
        currentCity:action.payload
      }

    case 'cities/created':
      return {
        ...state,
        isLoading:false,
        cities: [...state.cities,action.payload],
        currentCity:action.payload
      }

    case 'city/deleted':
      return {
        ...state,
        isLoading:false,
        cities: state.cities.filter(city=>city.id !==action.payload),
        currentCity:{}
      }
      
      
    case 'rejected':
      return {...state,
        error:action.payload,
        isLoading:false}

    default : throw new Error("dispatch function not recognized")
  } 

}


function CitiesProvider({children}){

    const [{cities,isLoading,currentCity},dispatch] = useReducer(reducer,intitialState)

    // const [cities,setCities] = useState([])
    // const [isLoading,setIsLoading] = useState(false)
    // const [currentCity,setCurrentCity] = useState({})


      async function getCity(id){
        dispatch({type:'loading'})
        try {
          const response = await fetch(`http://localhost:8000/cities/${id}`)
          const data = await response.json()
          dispatch({type:'city/loaded',payload:data})
  
        } catch {
          dispatch({type:"rejected",payload:"something went wrong with fetching city "})
        }

      }
  
      async function postCity(newCity){
        dispatch({type:'loading'})
        try {
         
          const response = await fetch(`http://localhost:8000/cities`,{
            method:'POST',
            body: JSON.stringify(newCity),
            headers:{
              "Content-Type":"application/json"
            }
          })
          const data = await response.json()
          dispatch({type:'cities/created',payload:data})
        } catch {
          dispatch({type:"rejected",payload:"something went wrong with creating new city"})
          
        }

      }

      async function deleteCity(id){
        dispatch({type:'loading'})
        try {
          
           await fetch(`http://localhost:8000/cities/${id}`,{
            method:'DELETE',
            body: JSON.stringify(),
            headers:{
              "Content-Type":"application/json"
            }
          })
          dispatch({type:"city/deleted",payload:id})
        } catch{
          dispatch({type:"rejected",payload:"something went wrong with with deleting city"})
        }
      }

    useEffect(function(){
      async function fetchCities(){
        dispatch({type:'loading'})
        try {
          const response = await fetch("http://localhost:8000/cities")
          const data = await response.json()
          dispatch({type:'cities/loaded',payload:data})
        } catch {
          dispatch({type:"rejected",payload:"something went wrong with fetching cities"})
        }
      }
      fetchCities()
    },[])


    return (<CitiesContext.Provider value={{cities,isLoading,currentCity,getCity,postCity,deleteCity}}>
      {children}
      </CitiesContext.Provider>)
}

function useCities(){
  const context = useContext(CitiesContext)
  if(context===undefined) throw new Error('cities context was used outside cities provider')
  return context
}


export {CitiesProvider,useCities}