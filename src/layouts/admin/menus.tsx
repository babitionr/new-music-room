import { DatePicker, Menu } from "antd";

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
const Layout: IMenu[] = [
  {
    icon: <IonTitle className="h-6 w-6" />,
    name: "Dashboard",
  },
];

export default Layout;

interface IMenu {
  name: string;
  icon?: React.JSX.Element;
  child?: IMenu[];
}
