import Image from "next/image";
import homeImage from "../../public/undraw_newspaper_k-72-w.svg";
import CardModel from "../components/card/Card";
import { listCardItem } from "../../test_data/test_data";

export default function Home() {
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
          {listCardItem.map((item) => (
            <CardModel {...item} />
          ))}
        </div>

        <h1 className="text-black font-light text-xl w-96 mt-10">
          Lateset local news
        </h1>

        <div className="flex sm:flex-row flex-col justify-between mt-9">
          {listCardItem.map((item) => (
            <CardModel {...item} />
          ))}
        </div>
      </div>

      <hr className="bg-gray-400 h-0.5" />

      <div className="w-full flex mt-5 flex-col">
        <div className="flex sm:flex-row justify-between flex-col">
          <h1 className="text-black font-light text-xl">The weather</h1>

          <h1 className="text-black font-light text-xl">
            use the map to check weather
          </h1>
        </div>

        <div className="h-72 mt-5 mb-7 bg-gray-400 w-full"></div>
      </div>

      <div className="w-full mt-7">
        <div className="flex sm:flex-row flex-col justify-between sm:items-end">
          <div className="flex flex-col">
            <h1 className="text-black font-light text-2xl">Uganda/Kampala</h1>
            <h1 className="text-black font-light text-xl">
              Rainy weather today
            </h1>
          </div>

          <h1 className="text-black font-light text-xl">
            Tusday 29th March 2022
          </h1>
        </div>

        <div className="flex sm:flex-row justify-between pt-7 flex-col">
          <div></div>

          <h1 className="text-black font-bold text-8xl">24 C</h1>
        </div>
      </div>
    </>
  );
}
