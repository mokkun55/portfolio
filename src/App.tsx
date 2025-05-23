import styles from "./style.module.css";
import Header from "./components/header";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <Header />

      {/* ヒーロー */}
      <Hero />
    </div>
  );
}
