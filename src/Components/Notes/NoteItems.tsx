import React from "react";
import classes from "./NoteItems.module.css";
import DeleteIcon from "../../Assets/Icons/bx-trash.svg";
import { useDispatch } from "react-redux";
import { uiActions } from "../../Store/ui-slice";
import { NoteItemArry } from "../../Store/notes.slice";

const NoteItems: React.FC<NoteItemArry> = (props) => {
  const dispatch = useDispatch();

  const cardBodyClickHandler = () => {
    dispatch(uiActions.viewNoteHandler());
  };

  return (
    <div className={classes.container}>
      <div className={classes.cardcontent}>
        <div className={classes.cardbtn}>
          <img
            className={classes.deleteicon}
            src={DeleteIcon}
            alt="Icon Failed"
          />
        </div>
        <div onClick={cardBodyClickHandler} className={classes.cardbody}>
          <p className={classes.cardsubject}>{props.subject}</p>
          <h1 className={classes.cardtitle}>{props.title}</h1>
          <div className={classes.cardcategorieborder}>
            <p className={classes.cardcategorie}>{props.categorie}</p>
          </div>
          <div className={classes.cardcontent}>
            <p className={classes.carddescription}>{props.description}</p>
          </div>
          <p className={classes.carddate}>Date Created: {props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItems;
