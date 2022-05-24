import { Fragment } from "react";
import { ModalAddNotes } from "./Components/Modals/ModalAddNotes";
import NavBar from "./Components/Navigation/NavBar";
import NotesList from "./Components/Notes/NotesList";
import { RootState } from "./Store";
import { useSelector } from "react-redux";

function App() {
  const addNoteIsActive = useSelector(
    (state: RootState) => state.ui.addNoteIsActive
  );
  return (
    <Fragment>
      {addNoteIsActive && <ModalAddNotes />}
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default App;
