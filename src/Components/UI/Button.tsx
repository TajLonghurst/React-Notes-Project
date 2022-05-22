import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
