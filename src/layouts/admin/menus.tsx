import { DatePicker, Menu } from "antd";
import { Dashboard, Home } from "@svgs";

const Layout: IMenu[] = [
  {
    icon: <Home className="h-6 w-6" />,
    name: "Home",
  },
];

export default Layout;

interface IMenu {
  name: string;
  icon?: React.JSX.Element;
  child?: IMenu[];
}
