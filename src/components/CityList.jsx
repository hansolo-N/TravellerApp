import React from 'react'
import styles from "./CityList.module.css"
import Spinner from '../components/Spinner'
import CityItem from './CityItem'
import Message from './Message'

function CityList({cities,isLoading}) {
console.log(cities)

if(isLoading) return <Spinner/>

if(!cities.length)
    return <Message message={'add your first your first city by clicking on some location on the map'}/>


  return (
    <ul className={styles.cityList}>
        {cities.map((city)=>
        <CityItem key={city.id} city={city}/>
        )}
    </ul>
  )
}

export default CityList