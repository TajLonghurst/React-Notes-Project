import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ViewNotes from "./ViewNotes";

const portalModalViewNotes = document.getElementById(
  "ModalViewNotes"
) as HTMLElement;

export const ModalViewNotes = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ViewNotes />, portalModalViewNotes)}
    </Fragment>
  );
};
