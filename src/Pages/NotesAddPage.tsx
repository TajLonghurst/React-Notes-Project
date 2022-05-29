import { Fragment } from "react";
import { ModalAddNotes } from "../Components/Modals/AddNotes/ModalAddNotes";
import NotesList from "../Components/Notes/NotesList";
import { RootState } from "../Store";
import { useSelector } from "react-redux";

function NotesAddPage() {
  const addNoteIsActive = useSelector(
    (state: RootState) => state.ui.addNoteIsActive
  );

  return (
    <Fragment>
      {addNoteIsActive && <ModalAddNotes />}
      <NotesList />
    </Fragment>
  );
}

export default NotesAddPage;
