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
  // TODO cms管理するかは考える。今は手打ちで行きます
  const skills = [
    {
      icon: <FaHtml5 size={50} color="#E44D26" />,
      title: "HTML",
      level: 5,
      description: "基本的なことに関しては理解しています",
    },
    {
      icon: <FaCss3 size={50} color="#264DE4" />,
      title: "CSS",
      level: 4,
      description: "レスポンシブデザインやアニメーションの実装ができます",
    },
    {
      icon: <SiJavascript size={50} color="#F7DF1E" />,
      title: "JavaScript",
      level: 4,
      description: "複雑めなサービスも作成しています",
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
      level: 4,
      description: "hooksを活用したコンポーネント開発ができます",
    },
    {
      icon: <RiNextjsFill size={50} color="#000000" />,
      title: "Next.js",
      level: 3,
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
        <div className={styles.otherSkillsContainer}>
          <p className={styles.otherSkillsTitle}>その他利用経験あり</p>
          <p className={styles.otherSkillsDescription}>
            Scss / Tailwind / MUI / Mantine / Java / Python / Node.js / Express
            / ReactNative / Expo / Firebase / Supabase / Prisma / GitHubActions
            / Vercel
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
