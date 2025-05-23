import styles from "./style.module.css";
import { SectionLayout } from "../../components/section-layout";
import Tabs from "../../components/tabs";
import { useState } from "react";
import type { Output as OutputType } from "../../types/output-type";
import OutputList from "../../components/output-list";

export default function Outputs() {
  const [outputs] = useState<OutputType[]>([
    {
      type: "article",
      title: "58ハッカソンに参戦しました！",
      date: new Date("2025-01-01"),
      place: "東京",
      description:
        "メンター枠で参戦しました！前回よりもレベルが上っててすごく、面白かったです！！",
      link: "https://react.dev",
    },
    {
      type: "slide",
      title: "LT会に参加しました！",
      date: new Date("2025-01-01"),
      place: "オンライン",
      description:
        "ReactがテーマのLT会をしました！自分は〇〇について発表しましたみなさんのスライドも面白かったです！！",
      link: "https://react.dev",
    },
    {
      type: "article",
      title: "58ハッカソンに参戦しました！",
      date: new Date("2025-01-01"),
      place: "東京",
      description:
        "メンター枠で参戦しました！前回よりもレベルが上っててすごく、面白かったです！！",
      link: "https://react.dev",
    },
    {
      type: "slide",
      title: "LT会に参加しました！",
      date: new Date("2025-01-01"),
      place: "オンライン",
      description:
        "ReactがテーマのLT会をしました！自分は〇〇について発表しましたみなさんのスライドも面白かったです！！",
      link: "https://react.dev",
    },
    {
      type: "article",
      title: "58ハッカソンに参戦しました！",
      date: new Date("2025-01-01"),
      description:
        "メンター枠で参戦しました！前回よりもレベルが上っててすごく、面白かったです！！",
      link: "https://react.dev",
    },
    {
      type: "slide",
      title: "LT会に参加しました！",
      date: new Date("2025-01-01"),
      place: "オンライン",
      description:
        "ReactがテーマのLT会をしました！自分は〇〇について発表しましたみなさんのスライドも面白かったです！！",
      link: "https://react.dev",
    },
  ]);

  const [activeTab, setActiveTab] = useState<"all" | "article" | "slide">(
    "all"
  );

  return (
    <SectionLayout sectionTitle="Outputs">
      <div className={styles.container}>
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
