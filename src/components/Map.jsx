import {React,useEffect,useState} from 'react'
import styles from "./Map.module.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer,TileLayer,Marker,Popup, useMap, useMapEvents } from 'react-leaflet'
import { useCities } from '../contexts/CitiesContext'
import useGeoLocation from "../hooks/useGeoLocation"
import Button from "./Button"
function Map() {



 const {cities} = useCities()

  const [searchParams] = useSearchParams()
  const [mapPosition,setMapPostion] = useState([40,0])
  const {isLoading:isLoadingPosition,position:geoLocationPosition,getPosition} = useGeoLocation()
  const mapLat = searchParams.get('lat')
  const mapLng = searchParams.get('lng')


  useEffect(function(){
    if(mapLat && mapLng) setMapPostion([mapLat,mapLng])

  },[mapLat,mapLng])

  useEffect(function(){
    if(geoLocationPosition) setMapPostion([geoLocationPosition.lat,geoLocationPosition.lng])

  },[geoLocationPosition])

  return (
    <div className={styles.mapContainer}>
      <Button type= 'position' onClick={getPosition}>
        {isLoadingPosition? 'Loading...': "use your current position"}
      </Button>
          <MapContainer center={mapPosition} zoom={13} scrollWheelZoom={false} className={styles.map}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
          {cities.map((city)=><Marker position={[city.position.lat,city.position.lng]} key={city.id}>
            <Popup>
               <span>{city.emoji}<span>{city.cityName}</span></span>
            </Popup>
          </Marker>)}

          <ChangeCenter position={mapPosition}/>
          <RegisterClick/>
          </MapContainer>
    </div>
  )
}
function RegisterClick(){
  const navigate = useNavigate()
  useMapEvents({
    click: e=> navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}


function ChangeCenter({position}){
  const map = useMap()
  map.setView(position)
  return (
    null
  )

}



export default Map