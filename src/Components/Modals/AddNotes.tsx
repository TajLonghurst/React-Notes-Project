import React, { Fragment } from "react";
import classes from "./AddNotes.module.css";
import Overlay from "./Overlay";

const AddNotes = () => {
  return (
    <Fragment>
      <Overlay />
      <div className={classes.container}>
        <div className={classes.cardbody}>
          <div className={classes.cardcolorcontainer}>
            <div className={classes.cardcolorgreen}></div>
            <div className={classes.cardcolorblue}></div>
            <div className={classes.cardcolorpurple}></div>
            <div className={classes.cardcolorpink}></div>
            <div className={classes.cardcolororange}></div>
          </div>
          <label className={classes.subjecttext} htmlFor="subject">
            Subject
          </label>
          <input maxLength={22} id="subject" className={classes.inputsubject} />
          <label className={classes.titletext} htmlFor="title">
            Title
          </label>
          <input maxLength={46} id="title" className={classes.inputtitle} />
          <label className={classes.categorietext} htmlFor="categorie">
            Categorie
          </label>
          <input
            maxLength={22}
            id="categorie"
            className={classes.inputcategorie}
          />
          <textarea
            placeholder="Description"
            className={classes.textareadescription}
          />
          <div className={classes.btncontainer}>
            <button className={classes.addbtn}>Add</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddNotes;
