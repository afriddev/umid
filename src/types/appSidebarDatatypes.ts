export type routeType = {
  title: string;
  desc: string | null;
  key: string;
  parentKey: string | null;
  subPages: null | routeType[];
  icon: string;
  path: string |null;
};

export type menuRouteType = {
  heading: string;
  routes: routeType[];
};
