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
    route: "/global",
    metaData: {
      search: "global",
    },
  },
  {
    name: "Local",
    route: "/local",
    metaData: {
      search: "local",
    },
  },
];
