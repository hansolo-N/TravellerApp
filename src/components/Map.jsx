import React from 'react'
import styles from "./Map.module.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
function Map() {

 const navigate=  useNavigate()

  const [searchParams,setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  return (
    <div className={styles.mapContainer} onClick={()=>navigate('form')}>
        <h1>{lat}</h1>
        <h1>{lng}</h1>
    </div>
  )
}

export default Map