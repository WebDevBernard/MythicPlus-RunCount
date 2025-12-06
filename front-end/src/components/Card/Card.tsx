import React, { FC, ReactNode } from "react";
import classes from "./Card.module.css";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
