// Uses the same styles as Product
import styles from "./Product.module.css";
import NavPage from "../components/NavPage"
export default function Product() {
  return (
    <main className={styles.product}>
      <NavPage/>
      <section>
        <div>
          <h2>
            Destinations
            <br />
            Destinations to see
          </h2>
          <p>
            list of popular destinations
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
