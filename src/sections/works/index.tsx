import styles from "./style.module.css";
import { SectionLayout } from "../../components/section-layout";
import WorkList from "../../components/work-list";
import { client } from "../../libs/cms";
import { useEffect, useState } from "react";
import type { Work as WorkType, WorkResponse } from "../../types/work-type";

export default function Works() {
  const [works, setWorks] = useState<WorkType[]>([]);

  // cms取得
  useEffect(() => {
    const fetchWorks = async () => {
      const works = await client.get<WorkResponse>({ endpoint: "works" });
      setWorks(works.contents);
      console.log(works);
    };
    fetchWorks();
  }, []);

  return (
    <SectionLayout sectionTitle="Works">
      <div className={styles.container} id="works">
        <WorkList works={works} />
      </div>
    </SectionLayout>
  );
}
