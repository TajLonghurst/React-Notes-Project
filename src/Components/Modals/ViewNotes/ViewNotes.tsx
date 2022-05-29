import React, { Fragment, useEffect, useState } from "react";
import classes from "./ViewNotes.module.css";
import xIcon from "../../../Assets/Icons/bx-x.svg";
import Overlay from "../../UI/Overlay";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import { useLocation } from "react-router-dom";
import { NoteItemArry } from "../../../Store/notes.slice";
import { useNavigate } from "react-router-dom";

const ViewNotes = () => {
  const [viewData, setViewData] = useState<NoteItemArry>();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const date: any = location.state;

  useEffect(() => {
    if (!date) {
      return;
    }
    setViewData(date.noteViewData);
  }, [date]);

  const overlayClickHandler = () => {
    dispatch(uiActions.viewNoteHandler({ overRideViewNoteState: false }));
  };

  const deleteCardHandler = () => {
    dispatch(uiActions.viewNoteHandler({ overRideViewNoteState: false }));
    navigate("/");
  };

  return (
    <Fragment>
      <Overlay to={`/`} onClick={overlayClickHandler} />
      <div className={classes.container}>
        <div className={classes.cardcontent}>
          <div
            onClick={deleteCardHandler}
            style={{ backgroundColor: viewData?.color }}
            className={classes.cardbtn}
          >
            <img className={classes.xicon} src={xIcon} alt="Icon Failed" />
          </div>
          <div
            style={{ border: `2px solid ${viewData?.color}` }}
            className={classes.cardbody}
          >
            <p className={classes.cardsubject}>{viewData?.subject}</p>
            <h1 className={classes.cardtitle}>{viewData?.title}</h1>
            <div
              style={{ backgroundColor: viewData?.color }}
              className={classes.cardcategorieborder}
            >
              <p className={classes.cardcategorie}>{viewData?.categorie}</p>
            </div>
            <div className={classes.cardcontent}>
              <p className={classes.carddescription}>{viewData?.description}</p>
            </div>
            <p className={classes.carddate}>Date Created: {viewData?.date}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewNotes;
