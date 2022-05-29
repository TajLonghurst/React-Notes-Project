import React from "react";
import { Link } from "react-router-dom";
import classes from "./Overlay.module.css";

type OverlayProps = {
  onClick?: () => void; //The '?' means the <Overlay /> componet doesn't always need to pass a prop.
  to: string;
};

const Overlay = (props: OverlayProps) => {
  return (
    <Link to={props.to}>
      <div onClick={props.onClick} className={classes.overlay}></div>
    </Link>
  );
};

export default Overlay;
