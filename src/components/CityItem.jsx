import { Link } from "react-router-dom";
// import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { useDeleteCity } from "../hooks/useDeleteCity";
import { useFetchCurrentCity } from "../hooks/useFetchCurrentCity";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  // const { currentCity, deleteCity } = useCities();
  const { currentCity } = useFetchCurrentCity();

  const { cityName, emoji, date, id, position } = city;

  const { deleteCity, deletingCity } = useDeleteCity();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      {currentCity && (
        <Link
          className={`${styles.cityItem} ${
            id === currentCity.currentCity_id ? styles["cityItem--active"] : ""
          }`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button
            className={styles.deleteBtn}
            onClick={handleClick}
            disabled={deletingCity}
          >
            &times;
          </button>
        </Link>
      )}
    </li>
  );
}

export default CityItem;
