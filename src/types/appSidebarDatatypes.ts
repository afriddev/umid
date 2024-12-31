export type routeType = {
  title: string;
  desc: string | null;
  key: string;
  parentKey: string | null;
  subPages: null | routeType[];
  icon: string;
};

export type menuRouteType = {
  heading: string;
  routes: routeType[];
};
