import styles from "./style.module.css";

type Props = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Tabs({ label, isActive, onClick }: Props) {
  return (
    <button
      className={`${styles.tab} ${isActive && styles.active}`}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
