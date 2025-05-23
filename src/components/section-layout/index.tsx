import styles from "./style.module.css";
import SectionTitle from "../section-title";

type Props = {
  children: React.ReactNode;
  sectionTitle: string;
};

export const SectionLayout = ({ children, sectionTitle }: Props) => {
  return (
    <div className={styles.container}>
      <SectionTitle title={sectionTitle} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
