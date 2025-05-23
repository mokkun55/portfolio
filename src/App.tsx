import styles from "./style.module.css";
import Header from "./components/header";

export default function App() {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <Header />
    </div>
  );
}
