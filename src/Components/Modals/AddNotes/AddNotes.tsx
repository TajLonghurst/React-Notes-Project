import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../Store/ui-slice";
import classes from "./AddNotes.module.css";
import Overlay from "../../UI/Overlay";
import { motion } from "framer-motion";
import { NotesOpenAnimation } from "../../../Animations/Notes-Animations";
import useInput from "../../../Hooks/use-Input";
import useHttp from "../../../Hooks/use-http";
import { v4 as uuidv4 } from "uuid";

//I AM FULLY AWARE THAT I CAN BE BREAKING THIS UP INTO MORE COMPONETS FOR BETTER REDABILITY. BUT MY CURRENT FOCUS IS LEARNING REACT WITH 'TYPESCRIPT'
// MY OTHER REACT PROJECTS WILL DEMON STRAIGHT MY COMPONENT ORGANIZATION.

const AddNotes = () => {
  const dispatch = useDispatch();

  const { sendRequest } = useHttp();
  const [selectColor, setSelectColor] = useState<string>("#d7d7d7");

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
    const noteUuidv4 = uuidv4();

    const D = new Date();
    const day = ("0" + D.getDate()).slice(-2);
    const month = ("0" + (D.getMonth() + 1)).slice(-2);
    const year = D.getFullYear();
    const date = `${day}/${month}/${year}`;

    sendRequest({
      typeOfRequest: "PRODUCTLISTDATA",
      method: "POST",
      url: `${process.env.REACT_APP_ADDNOTES_FIREBASE_API}.json`,
      data: {
        id: noteUuidv4,
        subject: entredSubjectValue,
        title: entredTitleValue,
        categorie: entredCategorieValue,
        description: entredDescriptionValue,
        color: selectColor,
        date: date,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

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
          style={{ border: `solid 2px ${selectColor}` }}
        >
          <div className={classes.cardcolorcontainer}>
            <div
              onClick={() => setSelectColor("#55ef80")}
              className={classes.cardcolorgreen}
            ></div>
            <div
              onClick={() => setSelectColor("#55caef")}
              className={classes.cardcolorblue}
            ></div>
            <div
              onClick={() => setSelectColor("#7d55ef")}
              className={classes.cardcolorpurple}
            ></div>
            <div
              onClick={() => setSelectColor("#ef558c")}
              className={classes.cardcolorpink}
            ></div>
            <div
              onClick={() => setSelectColor("#ef5555")}
              className={classes.cardcolororange}
            ></div>
          </div>
          <label
            style={{ color: selectColor }}
            className={classes.subjecttext}
            htmlFor="subject"
          >
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
          <label
            style={{ color: selectColor }}
            className={classes.titletext}
            htmlFor="title"
          >
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
          <label
            style={{ color: selectColor }}
            className={classes.categorietext}
            htmlFor="categorie"
          >
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
            <button
              style={{ backgroundColor: selectColor }}
              type="submit"
              className={classes.addbtn}
            >
              Add
            </button>
          </div>
        </motion.form>
      </div>
    </Fragment>
  );
};

export default AddNotes;
