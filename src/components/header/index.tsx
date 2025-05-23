import styles from "./style.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>mokkun.tech</h1>
      <div className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
        <a href="#outputs">Outputs</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
