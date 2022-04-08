export type NavItems = {
  name: string;
  route: string;
  metaData: {
    search?: string;
  };
};

export const navItems: NavItems[] = [
  {
    name: "Home",
    route: "/home",
    metaData: {},
  },
  {
    name: "Weather",
    route: "/home",
    metaData: {
      search: "weather",
    },
  },
  {
    name: "Global",
    route: "/news",
    metaData: {
      search: "global",
    },
  },
  {
    name: "Local",
    route: "/news",
    metaData: {
      search: "local",
    },
  },
];
