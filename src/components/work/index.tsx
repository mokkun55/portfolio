import styles from "./style.module.css";
import type { Work as WorkType } from "../../types/work-type";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
type Props = {
  work: WorkType;
};

export default function Work({ work }: Props) {
  return (
    <div className={styles.container}>
      <img
        // TODO cmsのimageAPI使ってもいいかも
        // https://document.microcms.io/image-api/size
        src={work.image.url}
        alt={work.title}
        className={styles.image}
        width={work.image.width}
        height={work.image.height}
      />

      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{work.title}</h3>
          <p className={styles.description}>{work.description}</p>
        </div>

        <div className={styles.techStackContainer}>
          {work.techStack?.map((tech) => (
            <span key={tech} className={styles.techStack}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.linkContainer}>
          <div className={styles.leftLinks}>
            <div
              className={`${styles.links} ${
                !work.githubLink && styles.disabled
              }`}
            >
              <a
                href={work.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <FaGithub />
            </div>

            <div
              className={`${styles.links} ${
                !work.figmaLink && styles.disabled
              }`}
            >
              <a
                href={work.figmaLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Figma
              </a>
              <FaFigma />
            </div>
          </div>

          <div
            className={`${styles.links} ${!work.pageLink && styles.disabled}`}
          >
            <a href={work.pageLink} target="_blank" rel="noopener noreferrer">
              View
            </a>
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
    </div>
  );
}
