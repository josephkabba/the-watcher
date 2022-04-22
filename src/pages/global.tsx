import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/router";
import { GetServerSideProps, GetStaticProps } from "next/types";
import { useCallback, useEffect, useState } from "react";
import Card from "../components/card/Card";
import { Article } from "../models/models";
import { SITE_URL, toTitle } from "../utils/utils";

type Props = {
  articles: Article[];
};

export default function GobalNews({ articles }: Props): JSX.Element {
  const router = useRouter();
  const [Title, setTitle] = useState("");
  const [Articles, setArticles] = useState(articles);
  const [SearchText, setSearchText] = useState("");

  const search = useCallback(
    (text: string) => {
      const values = articles.filter((article) => {
        return article.title.toLowerCase().includes(text.toLowerCase());
      });

      setArticles(values);
    },
    [SearchText]
  );

  useEffect(() => {
    search(SearchText);
  }, [SearchText]);

  useEffect(() => {
    if (router.query.slug !== undefined && router.query.slug !== null) {
      const text = router.query.slug as string;
      setTitle(toTitle(text));
    }
  }, [router.query.slug]);

  return (
    <div className="flex flex-col sm:justify-between justify-center pt-12">
      <hr className="bg-gray-400 h-0.5" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mt-3 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        onClick={() => router.back()}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>

      <div className="flex sm:flex-row flex-col sm:justify-between w-full justify-start py-10">
        <h1 className="text-3xl font-light">{`Global news`}</h1>

        <div className="flex sm:mt-0 mt-5 flex-row border-2 w-72 border-black px-4 rounded-lg text-gray-600">
          <input
            className=" bg-white h-10 pr-5  text-sm focus:outline-none"
            type="search"
            name="search"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
          />
          <button type="submit">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-1 sm:grid-cols-4 mt-9">
        {Articles.map((item) => (
          <Card key={item.id} article={item} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${SITE_URL}/api/articles?type=g&limit=25`,
    params: {},
    headers: {},
  };

  const response = await axios.request(options);

  const articles: Article[] = response.data.data;

  return {
    revalidate: 43200,
    props: { articles }, // will be passed to the page component as props
  };
};
