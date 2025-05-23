import styles from "./style.module.css";

type Props = {
  icon: React.ReactNode;
  title: string;
  id: string;
  link?: string;
};

export default function ContactCard({ icon, title, id, link }: Props) {
  return (
    <a href={link || "/"} className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.id}>{id}</div>
      </div>
    </a>
  );
}
