import Link from "next/link";
import Image from "next/image";
import { Article } from "../../models/models";

export type CardModel = {
  article: Article;
};

export default function Card({ article }: CardModel): JSX.Element {
  return (
    <div className="flex mb-4 flex-col">
      <div className="shadow rounded-lg w-56 h-36 bg-gray-400">
        <Image
          className="shadow rounded-lg w-56 h-3"
          loader={() => article.image}
          src={article.image}
          alt={article.title}
          width={224}
          height={144}
        />
      </div>

      <div className="w-56 p-1">
        <h1 className="text-xl font-medium capitalize line-clamp-1">
          {article.title}
        </h1>

        <h1 className="text-sm font-extralight mt-1">{`Date ${article.date}`}</h1>

        <h1 className="text-xl font-light mt-3 line-clamp-3">
          {article.story}
        </h1>

        <div className="mt-2">
          <Link href={`/${encodeURIComponent(`${article.id}`)}`}>
            <a className="text-black font-extralight text-base hover:text-blue-500 focus:text-purple-500">
              Read more {">"}{" "}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
