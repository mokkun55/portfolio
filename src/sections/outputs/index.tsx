import styles from "./style.module.css";
import { SectionLayout } from "../../components/section-layout";
import Tabs from "../../components/tabs";
import { useState, useEffect } from "react";
import OutputList from "../../components/output-list";
import { client } from "../../libs/cms";
import type { Output, OutputResponse } from "../../types/output-type";

export default function Outputs() {
  const [outputs, setOutputs] = useState<Output[]>([]);
  const [activeTab, setActiveTab] = useState<"all" | "article" | "slide">(
    "all"
  );

  // cms取得
  useEffect(() => {
    const fetchOutputs = async () => {
      const outputs = await client.get<OutputResponse>({ endpoint: "outputs" });
      // 日付をDate型に変換してソート
      const formattedOutputs = outputs.contents
        .map((output) => ({
          ...output,
          date: new Date(output.date),
        }))
        .sort((a, b) => b.date.getTime() - a.date.getTime()) as Output[];
      setOutputs(formattedOutputs);
      console.log(outputs);
    };
    fetchOutputs();
  }, []);

  return (
    <SectionLayout sectionTitle="Outputs">
      <div className={styles.container} id="outputs">
        <div className={styles.tabContainer}>
          <Tabs
            label="すべて"
            isActive={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          />
          <Tabs
            label="技術記事"
            isActive={activeTab === "article"}
            onClick={() => setActiveTab("article")}
          />
          <Tabs
            label="スライド"
            isActive={activeTab === "slide"}
            onClick={() => setActiveTab("slide")}
          />
        </div>

        <div className={styles.outputContainer}>
          <OutputList outputs={outputs} filter={activeTab} />
        </div>
      </div>
    </SectionLayout>
  );
}
