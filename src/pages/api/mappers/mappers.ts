import { Article } from "../models/local/model";
import { RemoteArticle } from "../models/remote/news.response";

export const mapStoryToArticle = (data: RemoteArticle, type: "g" | "l"): Article => {
  return {
    title: data.title,
    date: data.published_date,
    source_url: data.clean_url,
    image: data.media,
    author: data.author,
    type: type,
    story: data.summary,
  };
};
