import React from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { uiActions } from "../../Store/ui-slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const btnOnClickHandler = () => {
    dispatch(uiActions.addNoteHandler());
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.navbar}>
        <h1 className={classes.logo}>N2S</h1>
        <div className={classes.navBtn}>
          <Button to={"/notes/addNote"} onClick={btnOnClickHandler}>
            Creat Note
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
