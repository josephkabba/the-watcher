export interface Article {
  id?: number;
  title: string;
  date: string;
  type: "g" | "l";
  author: string;
  story: string;
  image: string;
  source_url: string;
}
