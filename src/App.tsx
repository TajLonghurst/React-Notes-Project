import { Fragment } from "react";
import { ModalAddNotes } from "./Components/Modals/AddNotes/ModalAddNotes";
import NavBar from "./Components/Navigation/NavBar";
import NotesList from "./Components/Notes/NotesList";
import { RootState } from "./Store";
import { useSelector } from "react-redux";
import { ModalViewNotes } from "./Components/Modals/ViewNotes/ModalViewNotes";

function App() {
  const addNoteIsActive = useSelector(
    (state: RootState) => state.ui.addNoteIsActive
  );
  const ViewNotesIsActive = useSelector(
    (state: RootState) => state.ui.viewNoteIsActive
  );

  return (
    <Fragment>
      {addNoteIsActive && <ModalAddNotes />}
      {ViewNotesIsActive && <ModalViewNotes />}
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default App;
