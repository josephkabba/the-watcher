import Link from "next/link";

export type CardModel = {
  image: string;
  label: string;
  detail: string;
  date: string;
  link: string;
};

export default function Card({
  image,
  label,
  detail,
  date,
  link,
}: CardModel): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="shadow rounded-lg w-56 h-36 bg-gray-400">
        {/* <Image
          src={image}
          alt={label}
          width={224}
          height={144}
        /> */}
      </div>

      <div className="w-56 p-1">
        <h1 className="text-xl font-medium capitalize">{label}</h1>

        <h1 className="text-sm font-extralight mt-1">{`Date ${date}`}</h1>

        <h1 className="text-xl font-light mt-3 line-clamp-4">{detail}</h1>

        <div className="mt-2">
          <Link href={link}>
            <a className="text-black font-extralight text-base hover:text-blue-500 focus:text-purple-500">
              Read more {">"}{" "}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
