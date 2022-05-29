import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  to: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Link to={props.to}>
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
