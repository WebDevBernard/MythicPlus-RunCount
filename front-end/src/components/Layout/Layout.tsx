import { FC, ReactNode } from "react";
import classes from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
