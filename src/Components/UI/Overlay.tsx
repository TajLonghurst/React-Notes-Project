import React from "react";
import classes from "./Overlay.module.css";

type OverlayProps = {
  onClick?: () => void; //The '?' means the <Overlay /> componet doesn't always need to pass a prop.
};

const Overlay = (props: OverlayProps) => {
  return <div onClick={props.onClick} className={classes.overlay}></div>;
};

export default Overlay;
