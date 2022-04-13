import { NavItems } from "./nav_bar";
import Link from "next/link";

interface Props {
  links: NavItems[];
}

export default function NavBar({ links }: Props): JSX.Element {
  return (
    <div className="flex sm:flex-row flex-col justify-between items-end w-full p-5">
      <h1 className="text-2xl">The Watcher</h1>

      <div className="pt-5 sm:pt-0">
        {links.map(({ name, route, metaData }) => {
          return (
            <Link
              href={{
                pathname: route,
                query: { key: metaData.search },
              }}
              key={name}
            >
              <a className="text-black text-lg hover:text-blue-500 px-2 focus:text-purple-500">
                {name}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
