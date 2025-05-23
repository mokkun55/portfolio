import styles from "./style.module.css";
import { SectionLayout } from "../../components/section-layout";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import SkillList from "../../components/skill-list";

export default function Skills() {
  // TODO mock
  const skills = [
    {
      icon: <FaHtml5 size={50} color="#E44D26" />,
      title: "HTML",
      level: 4,
      description: "セマンティックなマークアップを心がけています",
    },
    {
      icon: <FaCss3 size={50} color="#264DE4" />,
      title: "CSS",
      level: 3,
      description: "レスポンシブデザインの実装ができます",
    },
    {
      icon: <SiJavascript size={50} color="#F7DF1E" />,
      title: "JavaScript",
      level: 3,
      description: "ES6以降の文法を使った実装ができます",
    },
    {
      icon: <SiTypescript size={50} color="#3178C6" />,
      title: "TypeScript",
      level: 3,
      description: "型安全なコードを書くように心がけています",
    },
    {
      icon: <FaReact size={50} color="#5ED2F3" />,
      title: "React",
      level: 3,
      description: "フックを活用したコンポーネント開発ができます",
    },
    {
      icon: <RiNextjsFill size={50} color="#000000" />,
      title: "Next.js",
      level: 2,
      description: "基本的な機能を使ったアプリケーション開発ができます",
    },
    {
      icon: <IoLogoGithub size={50} color="#181717" />,
      title: "Git/GitHub",
      level: 3,
      description: "基本的なバージョン管理とチーム開発ができます",
    },
  ];
  
  return (
    <SectionLayout sectionTitle="Skills">
      <div className={styles.container}>
        <SkillList skills={skills} />
      </div>
    </SectionLayout>
  );
}
