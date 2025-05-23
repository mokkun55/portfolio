import styles from "./style.module.css";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.underline} />
    </div>
  );
}
