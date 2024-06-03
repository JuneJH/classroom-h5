import { createContext, useState, type FC } from "react";
import { NavBar, TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { history, useLocation, Outlet, useRoutes, useNavigate } from "umi";

import styles from "./index.less";
import "../assets/styles/reset.css";

const Bottom: FC = () => {
  const location = useLocation();

  const { pathname } = location;
  const setRouteActive = (value: string) => {
    history.push(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/classfiy",
      title: "分类",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/own",
      title: "我的",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};
export const LayoutContext = createContext({});
const Layout: FC = (props) => {
  const location = useLocation(); 
  const [navTitle, setNavTitle] = useState("首页")
  if (location.pathname === "/login") {
    return <Outlet />;
  }

  return (
    <LayoutContext.Provider value={{navTitle,setNavTitle}}>
      <div className={styles.app}>
        <div className={styles.top}>
          <NavBar onBack={history.back}>{navTitle}</NavBar>
        </div>
        <div className={styles.body}>
          <Outlet />
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
