import type { Output as OutputType } from "../../types/output-type";
import styles from "./style.module.css";
import { RiArticleLine, RiSlideshowLine } from "react-icons/ri";

type Props = {
  output: OutputType;
};

export default function Output({ output }: Props) {
  return (
    <div className={styles.item} key={output.title}>
      <div className={styles.icon}>
        {output.type[0] === "article" ? (
          <RiArticleLine color="var(--text-title)" size={32} />
        ) : (
          <RiSlideshowLine color="var(--color-yellow)" size={32} />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{output.title}</div>
          <div className={styles.dateContainer}>
            <div className={styles.date}>
              {output.date.toLocaleDateString("sv-SE")}
            </div>
            {output.place && (
              <div className={styles.place}>@{output.place}</div>
            )}
          </div>
        </div>
        <div className={styles.description}>{output.description}</div>
        <div className={styles.link}>
          <a href={output.link} target="_blank" rel="noopener noreferrer">
            {output.type[0] === "article" ? "記事を読む" : "スライドを見る"}
          </a>
        </div>
      </div>
    </div>
  );
}
