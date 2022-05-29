import { Fragment } from "react";
import { RootState } from "../Store";
import { useSelector } from "react-redux";
import { ModalViewNotes } from "../Components/Modals/ViewNotes/ModalViewNotes";
import NavBar from "../Components/Navigation/NavBar";
import NotesList from "../Components/Notes/NotesList";

function ViewNotesPage() {
  const ViewNotesIsActive = useSelector(
    (state: RootState) => state.ui.viewNoteIsActive
  );
  return (
    <Fragment>
      {ViewNotesIsActive && <ModalViewNotes />}
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default ViewNotesPage;
