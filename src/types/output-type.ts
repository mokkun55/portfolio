type OutputType = "article" | "slide";

export type Output = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  type: OutputType[];
  date: Date;
  place: string;
  description: string;
  link: string;
};

export type OutputResponse = {
  contents: Omit<Output, "date"> & { date: string }[];
  totalCount: number;
  offset: number;
  limit: number;
};
