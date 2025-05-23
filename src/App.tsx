import styles from "./style.module.css";
import Header from "./components/header";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Works from "./sections/works";
import Outputs from "./sections/outputs";
import Contact from "./sections/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className={styles.container}>
      {/* ヘッダー */}
      <Header />

      {/* ヒーロー */}
      <Hero />

      {/* スキル */}
      <Skills />

      {/* 作品 */}
      <Works />

      {/* アウトプット */}
      <Outputs />

      {/* 連絡先 */}
      <Contact />

      {/* フッター */}
      <Footer />
    </div>
  );
}
