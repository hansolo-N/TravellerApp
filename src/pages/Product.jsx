import styles from "./Product.module.css";
import NavPage from "../components/NavPage"
export default function Product() {
  return (
    <main className={styles.product}>
      <NavPage/>
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
          Preserve memories: The app helps users to preserve their travel memories by storing them in a central location.
          Inspire others: Users' travel logs can inspire others to travel to new places and experience new things.
          </p>
          <p>
          Overall, your travelling application has the potential to be a valuable tool for travelers of all kinds. It is easy to use, provides a variety of useful features, and offers a number of benefits to users.
          </p>
        </div>
      </section>
    </main>
  );
}
