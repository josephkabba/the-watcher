import homeImage from "../../public/undraw_newspaper_k-72-w.svg";
import Card from "../components/card/Card";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { SITE_URL } from "../utils/utils";
import { Article } from "../models/models";
import { GetServerSideProps } from "next";
import { WeatherRootObject } from "../models/weather";
import moment from "moment";

const id = "weather";

type Props = {
  local: Article[];
  global: Article[];
};

export default function Home({ local, global }: Props) {
  const router = useRouter();
  const [SearchText, setSearchText] = useState("kampala");
  const [LoadingData, setLoading] = useState(false);
  const [Data, setData] = useState<WeatherRootObject>();
  const [Date, setDate] = useState("");

  const search = async (text: string) => {
    setLoading(true);

    try {
      if (text.length > 0) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text.toLowerCase()}&appid=fac5fe60c6bbe2986282fefe5b9b8959`;
        const response = await axios.get<
          any,
          AxiosResponse<WeatherRootObject, any>,
          any
        >(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setData(response.data);
      }
    } catch (err: any) {}

    setLoading(false);
  };

  useEffect(() => {
    const date = moment().format("dddd, MMMM Do YYYY");
    setDate(date);
  }, []);

  useEffect(() => {
    search(SearchText);

    if (search.length <= 0) {
      setSearchText("kampala");
    }
  }, [SearchText]);

  useEffect(() => {
    console.log(router.query);
    if (router.query.type === "weather") {
      const scrollToId = document.getElementById(id)!!.offsetTop;
      window.scrollTo({
        left: 0,
        top: scrollToId,
        behavior: "smooth",
      });
    }
  }, [router.query.type]);
  return (
    <>
      <div className="flex sm:flex-row flex-col sm:text-left text-center justify-between pb-5 pt-2 w-full">
        <div className="flex flex-col">
          <div>
            <h1 className="text-black pt-14 font-medium text-3xl">
              WELCOME TO THE TRUTH
            </h1>
            <h1 className="text-black font-light text-2xl">
              News and real time weather
            </h1>
            <hr className="bg-gray-400 h-0.5" />
          </div>

          <p className="text-black font-light text-xl sm:w-96 pt-14">
            We provide authentic and exciting news from all over the world as
            well as local news in your country and area. Dive in.
          </p>
        </div>

        <Image src={homeImage} alt="home image" width={356} height={200} />
      </div>

      <hr className="bg-gray-400 h-0.5" />

      <div className="flex flex-col justify-start py-10">
        <h1 className="text-black font-light text-xl w-96 mt-10">
          Lateset global news
        </h1>

        <div className="flex sm:flex-row flex-col justify-between mt-9">
          {global.map((item) => (
            <Card key={item.id} article={item} />
          ))}
        </div>

        <h1 className="text-black font-light text-xl w-96 mt-10">
          Lateset local news
        </h1>

        <div className="flex sm:flex-row flex-col justify-between mt-9">
          {local.map((item) => (
            <Card key={item.id} article={item} />
          ))}
        </div>
      </div>

      <hr id={id} className="bg-gray-400 h-0.5" />

      <div className="w-full flex mt-5 flex-col">
        <div className="flex mb-5 sm:flex-row justify-between flex-col">
          <h1 className="text-black font-light text-xl">The weather</h1>

          <h1 className="text-black font-light text-xl">
            Search for cities and see the weather
          </h1>
        </div>

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
              sl
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full mt-7">
        <div className="flex sm:flex-row flex-col justify-between sm:items-end">
          <div className="flex flex-col">
            <h1 className="text-black font-light text-2xl uppercase">{`${Data?.sys.country}/${SearchText}`}</h1>
            <h1 className="text-black font-light text-xl capitalize">
              {`${Data?.weather[0].description}`}
            </h1>
          </div>

          <h1 className="text-black font-light text-xl">{Date}</h1>
        </div>

        <div className="flex sm:flex-row justify-between pt-7 flex-col">
          <div></div>

          <h1 className="text-black font-bold text-8xl">{`${Number.parseInt(
            `${Data?.main.temp}`
          )}° F`}</h1>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const options: AxiosRequestConfig[] = [
    {
      method: "GET",
      url: `${SITE_URL}/api/articles?type=l&limit=4`,
      params: {},
      headers: {},
    },
    {
      method: "GET",
      url: `${SITE_URL}/api/articles?type=g&limit=4`,
      params: {},
      headers: {},
    },
  ];

  const resOne = await axios.request(options[0]);
  const resTwo = await axios.request(options[1]);

  const props: Props = {
    local: resOne.data.data,
    global: resTwo.data.data,
  };

  return { props: props };
};
