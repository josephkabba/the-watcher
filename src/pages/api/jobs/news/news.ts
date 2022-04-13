import { RemoteArticle } from "../../models/remote/news.response";
import { NewsArticalsResponse } from "../../models/remote/news.response";
import { AxiosRequestConfig, AxiosResponse } from "axios/index.d";
import axios from "axios";

export const getNews = async (
  country: "US" | "UG"
): Promise<RemoteArticle[]> => {
  let search = "global top news";

  if (country === "UG") {
    search = "Uganda top news";
  }

  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: search, lang: "en", page: "1", page_size: "25" },
    headers: {
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      "X-RapidAPI-Key": "94270eb6d5msh5cb21aa93d8fe45p15fc13jsnf95a9cf17165",
    },
  };

  const response = await axios.request<
    any,
    AxiosResponse<NewsArticalsResponse, any>,
    any
  >(options);

  return response.data.articles;
};
