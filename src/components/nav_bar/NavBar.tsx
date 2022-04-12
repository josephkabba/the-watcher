import { NavItems } from "./nav_bar";
import Link from "next/link";

interface Props {
  links: NavItems[];
}

export default function NavBar({ links }: Props): JSX.Element {
  return (
    <div className="flex justify-between items-end w-full p-5">
      <h1 className="text-2xl">The Watcher</h1>

      <div>
        {links.map(({ name, route, metaData }) => {
          return (
            <Link
              href={{
                pathname: route,
                query: { type: metaData.search },
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
