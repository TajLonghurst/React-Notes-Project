import { Fragment } from "react";
import { ModalAddNotes } from "./Components/Modals/ModalAddNotes";
import NavBar from "./Components/Navigation/NavBar";
import NotesList from "./Components/Notes/NotesList";
//import { useSelector } from "react-redux";

function App() {
  //const addNoteIsActive = useSelector((state) => state.ui.addNoteIsActive);
  return (
    <Fragment>
      <ModalAddNotes />
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default App;
