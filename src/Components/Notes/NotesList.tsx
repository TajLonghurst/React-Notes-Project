import React from "react";
import classes from "./NotesList.module.css";
import "../../index.css";
import NoteItems from "./NoteItems";

const NotesList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className="row">
          {/* {props.notes.map((items) => {
            return (
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
              </div>
              );
            })} */}
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <NoteItems />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <NoteItems />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <NoteItems />
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <NoteItems />
          </div>
        </div>
      </div>
    </div>
    /*NoteItem*/
  );
};

export default NotesList;
