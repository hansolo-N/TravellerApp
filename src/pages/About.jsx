import styles from "./About.module.css";
import NavPage from "../components/NavPage";
import HeroLayout from "../ui/HeroLayout";
export default function Product() {
  return (
    <main className={styles.product}>
      <NavPage />
      <HeroLayout />
    </main>
  );
}
