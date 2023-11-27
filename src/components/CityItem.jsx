import { Link } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { useFetchCity } from "../hooks/useFetchCity";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  // const { currentCity, deleteCity } = useCities();

  const { getCity, isLoadingCity } = useFetchCity();

  // const { city: currentCity } = getCity(city.id);

  if (!isLoadingCity) console.log(isLoadingCity);

  // const { cityName, emoji, date, id, position } = currentCity;

  // console.log(currentCity.at(0));

  // function handleClick(e) {
  //   e.preventDefault();
  //   deleteCity(id);
  // }

  return (
    // <li>
    //   <Link
    //     className={`${styles.cityItem} ${
    //       id === currentCity.id ? styles["cityItem--active"] : ""
    //     }`}
    //     to={`${id}?lat=${position.lat}&lng=${position.lng}`}
    //   >
    //     <span className={styles.emoji}>{emoji}</span>
    //     <h3 className={styles.name}>{cityName}</h3>
    //     <time className={styles.date}>({formatDate(date)})</time>
    //     <button className={styles.deleteBtn} onClick={handleClick}>
    //       &times;
    //     </button>
    //   </Link>
    // </li>
    <h1>hello</h1>
  );
}

export default CityItem;
