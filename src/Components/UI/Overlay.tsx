import React from "react";
import classes from "./Overlay.module.css";

type OverlayProps = {
  onClick: () => void;
};

const Overlay = (props: OverlayProps) => {
  return <div onClick={props.onClick} className={classes.overlay}></div>;
};

export default Overlay;
