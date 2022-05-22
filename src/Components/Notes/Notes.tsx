import React from "react";
import classes from "./Notes.module.css";
import "../../index.css";

const Notes = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className="row">
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div>Hay</div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div>Hay</div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div>Hay</div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div>Hay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
