import styles from "./style.module.css";
import Header from "./components/header";
import Hero from "./sections/hero";
import Skills from "./sections/skills";

export default function App() {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <Header />

      {/* ヒーロー */}
      <Hero />

      {/* スキル */}
      <Skills />
    </div>
  );
}
