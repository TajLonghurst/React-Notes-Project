import React from "react";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const btnOnClickHandler = () => {};

  return (
    <nav className={classes.nav}>
      <div className={classes.navbar}>
        <h1 className={classes.logo}>Note 2 Self</h1>
        <div className={classes.navBtn}>
          <Button onClick={btnOnClickHandler}>Creat Note</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
