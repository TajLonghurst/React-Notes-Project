import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import classes from "./AddNotes.module.css";
import Overlay from "../../UI/Overlay";
import { motion } from "framer-motion";
import { NotesOpenAnimation } from "../../../Animations/Notes-Animations";
import { notesActions } from "../../../Store/notes.slice";
import useInput from "../../../Hooks/use-Input";

const AddNotes = () => {
  const dispatch = useDispatch();

  const {
    value: entredSubjectValue,
    isValid: entredSubjectIsValid,
    hasError: entredSubjectHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    resetInput: resetSubjectInput,
  } = useInput("Subject");

  const {
    value: entredTitleValue,
    isValid: entredTitleIsValid,
    hasError: entredTitleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    resetInput: resetTitleInput,
  } = useInput("Title");

  const {
    value: entredCategorieValue,
    isValid: entredCategorieIsValid,
    hasError: entredCategorieHasError,
    valueChangeHandler: categorieChangeHandler,
    inputBlurHandler: categorieBlurHandler,
    resetInput: resetCategorieInput,
  } = useInput("Categorie");
  const {
    value: entredDescriptionValue,
    isValid: entredDescriptionIsValid,
    hasError: entredDescriptionHasError,
    valueChangeHandler: descriptioneChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    resetInput: resetDescriptionInput,
  } = useInput("Description");

  const overlayClickHandler = () => {
    dispatch(uiActions.addNoteHandler());
  };

  const formSumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formIsValid = false;

    if (
      entredTitleIsValid &&
      entredSubjectIsValid &&
      entredCategorieIsValid &&
      entredDescriptionIsValid
    ) {
      formIsValid = true;
    }
    if (!formIsValid) {
      return;
    }

    dispatch(
      notesActions.addNote({
        subject: entredSubjectValue,
        title: entredTitleValue,
        categorie: entredCategorieValue,
        description: entredDescriptionValue,
        color: "#fff",
      })
    );
    resetSubjectInput();
    resetTitleInput();
    resetCategorieInput();
    resetDescriptionInput();
  };

  const subjectInputHasError = entredSubjectHasError
    ? `${classes.inputsubjecterror}`
    : `${classes.inputsubject}`;

  const titleInputHasError = entredTitleHasError
    ? `${classes.inputtitleerror}`
    : `${classes.inputtitle}`;

  const categorieInputHasError = entredCategorieHasError
    ? `${classes.inputsubjecterror}`
    : `${classes.inputcategorie}`;

  const descriptionInputHasError = entredDescriptionHasError
    ? `${classes.textareadescriptionerror}`
    : `${classes.textareadescription}`;

  return (
    <Fragment>
      <Overlay onClick={overlayClickHandler} />
      <div className={classes.container}>
        <motion.form
          onSubmit={formSumbitHandler}
          variants={NotesOpenAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={classes.cardbody}
        >
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
          <input
            value={entredSubjectValue}
            onChange={subjectChangeHandler}
            onBlur={subjectBlurHandler}
            maxLength={22}
            id="subject"
            className={subjectInputHasError}
          />
          <label className={classes.titletext} htmlFor="title">
            Title
          </label>
          <input
            value={entredTitleValue}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            maxLength={46}
            id="title"
            className={titleInputHasError}
          />
          <label className={classes.categorietext} htmlFor="categorie">
            Categorie
          </label>
          <input
            value={entredCategorieValue}
            onChange={categorieChangeHandler}
            onBlur={categorieBlurHandler}
            maxLength={22}
            id="categorie"
            className={categorieInputHasError}
          />
          <textarea
            value={entredDescriptionValue}
            onChange={descriptioneChangeHandler}
            onBlur={descriptionBlurHandler}
            placeholder="Description"
            className={descriptionInputHasError}
          />
          <div className={classes.btncontainer}>
            <button type="submit" className={classes.addbtn}>
              Add
            </button>
          </div>
        </motion.form>
      </div>
    </Fragment>
  );
};

export default AddNotes;
