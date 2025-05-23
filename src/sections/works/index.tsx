import styles from "./style.module.css";
import { SectionLayout } from "../../components/section-layout";
import WorkList from "../../components/work-list";

export default function Works() {
  // TODO mock
  const works = [
    {
      title: "ポートフォリオサイト",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock1.png",
      techStack: ["React", "TypeScript"],
      pageLink: "https://www.google.com",
      githubLink: "https://www.google.com",
      figmaLink: "https://www.google.com",
    },
    {
      title: "プログラミング部HP",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock2.png",
      techStack: ["Next", "TypeScript"],
    },
    {
      title: "ポートフォリオサイト",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock1.png",
      techStack: ["React", "TypeScript"],
      pageLink: "https://www.google.com",
      githubLink: "https://www.google.com",
      figmaLink: "https://www.google.com",
    },
    {
      title: "プログラミング部HP",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock2.png",
      techStack: ["Next", "TypeScript"],
    },
    {
      title: "ポートフォリオサイト",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock1.png",
      techStack: ["React", "TypeScript"],
      pageLink: "https://www.google.com",
      githubLink: "https://www.google.com",
      figmaLink: "https://www.google.com",
    },
    {
      title: "プログラミング部HP",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock2.png",
      techStack: ["Next", "TypeScript"],
    },
    {
      title: "ポートフォリオサイト",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock1.png",
      techStack: ["React", "TypeScript"],
      pageLink: "https://www.google.com",
      githubLink: "https://www.google.com",
      figmaLink: "https://www.google.com",
    },
    {
      title: "プログラミング部HP",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock2.png",
      techStack: ["Next", "TypeScript"],
    },
    {
      title: "ポートフォリオサイト",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock1.png",
      techStack: ["React", "TypeScript"],
      pageLink: "https://www.google.com",
      githubLink: "https://www.google.com",
      figmaLink: "https://www.google.com",
    },
    {
      title: "プログラミング部HP",
      description:
        "〇〇という課題を解決するために、△△なアプローチで開発しました。 レスポンシブデザインとアクセシビリティにも配慮しています。",
      image: "/images/mocks/mock2.png",
      techStack: ["Next", "TypeScript"],
    },
  ];

  return (
    <SectionLayout sectionTitle="Works">
      <div className={styles.container}>
        <WorkList works={works} />
      </div>
    </SectionLayout>
  );
}
