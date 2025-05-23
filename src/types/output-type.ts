export type Output = {
  type: "article" | "slide"; // 記事 | スライド
  title: string;
  date: Date;
  place?: string;
  description: string;
  link: string;
};
