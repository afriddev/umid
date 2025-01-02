/* eslint-disable @typescript-eslint/no-explicit-any */

export type dispatchDataType = {
  type: string;
  payload: any;
};

export type contextType = {
  dispatch: React.Dispatch<dispatchDataType>;
  defaultTheme: string;
  selectedMenu: {
    key: string;
    title: string;
    desc: string;
    parentKey: string | null;
    path:string 
  };
  openSidebar:boolean;
  navigatePathNames:string [] 
};
