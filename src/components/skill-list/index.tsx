import Skill from "../skill";
import type { Skill as SkillType } from "../../types/skill-type";
import styles from "./style.module.css";

type Props = {
  skills: SkillType[];
};

export default function SkillList({ skills }: Props) {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <Skill key={skill.title} {...skill} />
      ))}
    </div>
  );
}
