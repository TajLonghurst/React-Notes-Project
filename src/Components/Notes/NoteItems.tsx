import React, { Fragment } from "react";
import classes from "./NoteItems.module.css";
import DeleteIcon from "../../Assets/Icons/bx-trash.svg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import { NoteItemArry, notesActions } from "../../Store/notes.slice";
import useHttp from "../../Hooks/use-http";
import { Link } from "react-router-dom";

const NoteItems: React.FC<NoteItemArry> = (props) => {
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();

  const cardBodyClickHandler = () => {
    dispatch(uiActions.viewNoteHandler({ overRideViewNoteState: false }));
  };

  const deleteCardHandler = () => {
    dispatch(notesActions.removeNote({ id: props.id }));

    sendRequest({
      typeOfRequest: "PRODUCTLISTDATA",
      method: "DELETE",
      url: `${process.env.REACT_APP_ADDNOTES_FIREBASE_API}/${props.fbId}.json`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.cardcontent}>
          <div
            onClick={deleteCardHandler}
            style={{ background: props.color }}
            className={classes.cardbtn}
          >
            <img
              className={classes.deleteicon}
              src={DeleteIcon}
              alt="Icon Failed"
            />
          </div>
          <Link
            onClick={cardBodyClickHandler}
            className={classes.link}
            to={`/notes/${props.fbId}`}
            state={{ noteViewData: props }}
          >
            <div
              className={classes.cardbody}
              style={{ border: `solid 2px ${props.color}` }}
            >
              <p className={classes.cardsubject}>{props.subject}</p>
              <h1 className={classes.cardtitle}>{props.title}</h1>
              <div
                style={{ background: props.color }}
                className={classes.cardcategorieborder}
              >
                <p className={classes.cardcategorie}>{props.categorie}</p>
              </div>
              <div className={classes.cardcontent}>
                <p className={classes.carddescription}>{props.description}</p>
              </div>
              <p className={classes.carddate}>Date Created: {props.date}</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NoteItems;
