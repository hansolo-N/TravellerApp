import React from 'react'
import styles from "./CityList.module.css"
import Spinner from '../components/Spinner'
import CityItem from './CityItem'

function CityList({cities,isLoading}) {
console.log(cities)

if(isLoading) return <Spinner/>
  return (
    <ul className={styles.cityList}>
        {cities.map((city)=>
        <CityItem key={city.id} city={city}/>
        )}
    </ul>
  )
}

export default CityList