
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState} from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlCoordinates } from "../hooks/useUrlCoordinates";
import Message from "./Message"
import DatePicker from "react-datepicker";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const [lat,lng] = useUrlCoordinates()
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeoData,setIsLoadingGeoData] = useState(false)
  const [emoji,setEmoji] = useState()
  const [geoLocationError,setGeoLocationError] = useState('')

  const baseUrl = "https://api.bigdatacloud.net/data/reverse-geocode-client"

  useEffect(function(){
    if(!lat && !lng) return;

    async function fetchCity(){
      try {
        setIsLoadingGeoData(true)
        setGeoLocationError('')
        const response = await fetch(`${baseUrl}?latitude=${lat}&longitude=${lng}`)
        const data = await response.json()

        if(!data.countryCode){
          throw new Error("that does not seem to be a city, try another location 😁")
        }

        setCityName(data.city || data.locality ||"")
        setCountry(data.countryName)
        setEmoji(convertToEmoji(data.countryCode))
      } catch (error) {
        setGeoLocationError(error.message)
      }
      finally{
        setIsLoadingGeoData(false)
      }
    }
    fetchCity()
  },[lat,lng])


  function handleSubmit(e){
    e.preventDefault()

  }


  if(geoLocationError){
    return <Message message={geoLocationError}/>
  }

  if(!lat && !lng){
     return <Message message ={"click somwhere on the map"}/>
  }
  return (
    <form className={styles.form} onSubmit={()=>handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker onChange={(date)=>setDate(date)} selected={date} dateFormat='dd/MM/yyyy'/>
        
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        <BackButton/>
      </div>
    </form>
  );
}

export default Form;
