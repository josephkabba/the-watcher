export interface NewsArticalsResponse {
  status: string;
  total_hits: number;
  page: number;
  total_pages: number;
  page_size: number;
  articles: RemoteArticle[];
  user_input: UserInput;
}

export interface RemoteArticle {
  published_date: string;
  title: string;
  link: string;
  summary: string;
  author: string;
  published_date_precision: string;
  clean_url: string;
  rights: string;
  rank: number;
  topic: string;
  country: string;
  language: string;
  authors: string[];
  media: string;
  is_opinion: boolean;
  twitter_account: string;
  _score: number;
  _id: string;
}

interface UserInput {
  q: string;
  lang: string;
  from: string;
  sort_by: string;
  page: number;
  size: number;
}
