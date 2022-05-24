import React from "react";
import classes from "./NoteItems.module.css";
import DeleteIcon from "../../Assets/Icons/bx-trash.svg";

const NoteItems = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cardbody}>
        <div className={classes.cardbtn}>
          <img
            className={classes.deleteicon}
            src={DeleteIcon}
            alt="Icon Failed"
          />
        </div>
        <p className={classes.cardsubject}>Running</p>
        <h1 className={classes.cardtitle}>Gym Work</h1>
        <div className={classes.cardcategorieborder}>
          <p className={classes.cardcategorie}>Activity</p>
        </div>
        <div className={classes.cardcontent}>
          <p className={classes.carddescription}>
            Seated leg press (10 reps x 3 sets) Seated shoulder press (10 reps x
            3 sets) Close grip lat pulldown (10 reps x 3 sets) Bodyweight lunges
            (10 reps x 3 sets) Full/kneeling press ups (10 reps x 3 sets) Plank
            (30 secs x 3) Leg raises (10 reps x 3 sets)
          </p>
        </div>
        <p className={classes.carddate}>Date Created: 22/05/2001</p>
      </div>
    </div>
  );
};

export default NoteItems;
