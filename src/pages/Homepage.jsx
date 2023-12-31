import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import NavPage from "../components/NavPage";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <NavPage />
      <section>
        <h1>
          Your adventure starts here!
          <br />
          Traveller keeps track of your adventures.
        </h1>
        <h2>
          Track your travels, map your adventures. A map which logs all your
          adventures around the world,allowing you to share destinations with
          your friends.
        </h2>
        <Link to="/app" className="cta">
          Start Your Adventure
        </Link>
      </section>
    </main>
  );
}
