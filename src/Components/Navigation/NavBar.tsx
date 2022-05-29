import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import classes from "./NavBar.module.css";
import { uiActions } from "../../Store/ui-slice";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname.toString() === "/notes/addNote") {
      dispatch(uiActions.addNoteHandler({ overRideAddNoteState: true }));
    }
  }, [dispatch, location]);

  const btnOnClickHandler = () => {
    dispatch(uiActions.addNoteHandler({ overRideAddNoteState: null }));
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
