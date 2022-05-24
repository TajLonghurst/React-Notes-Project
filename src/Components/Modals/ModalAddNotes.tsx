import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AddNotes from "./AddNotes";

const portalModalAddNotes = document.getElementById(
  "ModalAddNotes"
) as HTMLElement;

export const ModalAddNotes = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<AddNotes />, portalModalAddNotes)}
    </Fragment>
  );
};
