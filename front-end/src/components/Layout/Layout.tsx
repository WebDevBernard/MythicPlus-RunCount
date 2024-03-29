import { FC } from "react";
import classes from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return <div className={classes.layout}>{children}</div>;
};

export default Layout;
