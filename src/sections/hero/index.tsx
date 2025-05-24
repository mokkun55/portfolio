import styles from "./style.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Hero() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.content}>
        <img
          src="/images/icon.jpg"
          alt="もっくんのアイコン"
          className={styles.icon}
        />
        <h1 className={styles.title}>
          こんにちは！
          <span style={{ color: "var(--text-title)" }}>もっくん</span>
          です！
        </h1>
        <p className={styles.description}>
          ガジェット・アニメ・麻雀・かわいいものが好きです。
          <br />
          現在近大高専(5年)で情シス・プログラミングを勉強中… &
          学生寮で寮長やってます。
        </p>
      </div>
      <IoIosArrowDown className={styles.arrow} size={50} />

      {/* 背景の四角 */}
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </div>
  );
}
