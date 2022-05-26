import React, { Fragment } from "react";
import classes from "./ViewNotes.module.css";
import DeleteIcon from "../../../Assets/Icons/bx-trash.svg";
import Overlay from "../../UI/Overlay";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import { NotesOpenAnimation } from "../../../Animations/Notes-Animations";
import { motion } from "framer-motion";

const ViewNotes = () => {
  const dispatch = useDispatch();

  const overlayClickHandler = () => {
    dispatch(uiActions.viewNoteHandler());
  };

  return (
    <Fragment>
      <Overlay onClick={overlayClickHandler} />
      <div className={classes.container}>
        <motion.div
          variants={NotesOpenAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.cardcontent}
        >
          <div className={classes.cardbtn}>
            <img
              className={classes.deleteicon}
              src={DeleteIcon}
              alt="Icon Failed"
            />
          </div>
          <div className={classes.cardbody}>
            <p className={classes.cardsubject}>Running</p>
            <h1 className={classes.cardtitle}>Gym Work</h1>
            <div className={classes.cardcategorieborder}>
              <p className={classes.cardcategorie}>Activity</p>
            </div>
            <div className={classes.cardcontent}>
              <p className={classes.carddescription}>
                Seated leg press (10 reps x 3 sets) Seated shoulder press (10
                reps x 3 sets) Close grip lat pulldown (10 reps x 3 sets)
                Bodyweight lunges (10 reps x 3 sets) Full/kneeling press ups (10
                reps x 3 sets) Plank (30 secs x 3) Leg raises (10 reps x 3 sets)
              </p>
            </div>
            <p className={classes.carddate}>Date Created: 22/05/2001</p>
          </div>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default ViewNotes;
