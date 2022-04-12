import { AxiosResponse } from "axios/index.d";
import axios, { AxiosRequestConfig } from "axios";
import { ArticalResponse, Story } from "../../models/remote/article.response";

export const getArticle = async (url: string): Promise<Story> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://extract-news.p.rapidapi.com/v0/article",
    params: {
      url: url,
    },
    headers: {
      "X-RapidAPI-Host": "extract-news.p.rapidapi.com",
      "X-RapidAPI-Key": "94270eb6d5msh5cb21aa93d8fe45p15fc13jsnf95a9cf17165",
    },
  };

  const response = await axios.request<
    any,
    AxiosResponse<ArticalResponse, any>,
    any
  >(options);

  return response.data.article;
};
