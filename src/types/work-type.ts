export type WorkImage = {
  url: string;
  height: number;
  width: number;
};

export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  image: WorkImage;
  description: string;
  pageLink?: string;
  githubLink?: string;
  figmaLink?: string;
  techStack?: string[];
};

export type WorkResponse = {
  contents: Work[];
  totalCount: number;
  offset: number;
  limit: number;
};
