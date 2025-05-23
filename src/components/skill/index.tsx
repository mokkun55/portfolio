import styles from "./style.module.css";
import type { Skill as SkillType } from "../../types/skill-type";

export default function Skill({ icon, title, level, description }: SkillType) {
  const stars = "★".repeat(level) + "☆".repeat(5 - level);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.level}>{stars}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
