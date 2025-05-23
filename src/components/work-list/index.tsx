import styles from "./style.module.css";
import type { Work as WorkType } from "../../types/work-type";
import Work from "../work";

type Props = {
  works: WorkType[];
};

export default function WorkList({ works }: Props) {
  return (
    <div className={styles.container}>
      {works.map((work) => (
        <Work key={work.title} work={work} />
      ))}
    </div>
  );
}
