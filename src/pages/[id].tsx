import { useRouter } from "next/router";
import { Article } from "../models/models";
import Image from "next/image";
import axios, { AxiosRequestConfig } from "axios";
import { SITE_URL } from "../utils/utils";
import { GetServerSideProps } from "next";

type Props = {
  article: Article;
};

export default function Detail({ article }: Props): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col pt-12">
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

      <div className="flex flex-col w-full py-10">
        <h1 className="text-5xl font-light line-clamp-1">{article.title}</h1>
        <h1 className="text-xl font-light line-clamp-1">{article.date}</h1>
      </div>

      <div className="w-full h-96 bg-gray-400">
        <Image
          loader={() => article.image}
          src={article.image}
          alt={article.title}
          height={384}
          width={1130}
        />
      </div>

      <div className="sm:flex sm:flex-row grid grid-cols-1 grid-row-3 pt-9 px-5">
        <div className="flexflex-col shrink-0">
          <h1 className="font-thin text-xl">Written by</h1>
          <h1 className="font-bold text-xl">{article.author}</h1>
        </div>
        <div className="place-self-stretch sm:ml-10 flex sm:flex-row sm:pt-0 pt-10">
          <hr className="bg-gray-400 h-0.5 sm:w-0.5 sm:h-full" />
          <p className="font-light sm:ml-9 text-xl text-justify">
            {article.story}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${SITE_URL}/api`,
    params: {},
    headers: {},
  };

  const response = await axios.request(options);

  const paths = response.data.data.map((item: any) => {
    if (item.id !== null && item.id !== undefined) {
      return { params: { id: `${item.id}` } };
    }

    return {
      params: { id: "0" },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `${SITE_URL}/api/article?id=${params.id}`,
    params: {},
    headers: {},
  };

  const response = await axios.request(options);

  const article: Article = response.data.data[0];

  return { revalidate: 60, props: { article } };
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const options: AxiosRequestConfig = {
//     method: "GET",
//     url: `${SITE_URL}/api/article?id=${context.query.id}`,
//     params: {},
//     headers: {},
//   };

//   const response = await axios.request(options);

//   const article: Article = response.data.data[0];

//   return { props: { article } };
// };
