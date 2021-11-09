type User = {
  username: string;
  url: string;
  avatar: string;
};

type ShortRepo = {
  repositoryName: string;
  description: string;
  url: string;
};

export type Repo = {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: Array<User>;
};

export type Developer = {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: ShortRepo;
};
