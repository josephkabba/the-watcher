import { FC } from "react";
import Footer from "../footer/Footer";
import NavBar from "../nav_bar/NavBar";
import { navItems } from "../nav_bar/nav_bar";

type Props = {
  ChildLayout: any;
};

export default function Layout({ ChildLayout }: Props): JSX.Element {
  return (
    <div className="w-full h-full mb-16">
      <div className="w-full">
        <NavBar links={navItems} />
        <div className="sm:pl-32 sm:pr-24 pl-2 pr-2">{ChildLayout}</div>
      </div>
      <Footer />
    </div>
  );
}
