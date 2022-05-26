import { Fragment } from "react";
import { ModalAddNotes } from "./Components/Modals/AddNotes/ModalAddNotes";
import NavBar from "./Components/Navigation/NavBar";
import NotesList from "./Components/Notes/NotesList";
import { RootState } from "./Store";
import { useSelector } from "react-redux";
import { ModalViewNotes } from "./Components/Modals/ViewNotes/ModalViewNotes";
import { AnimatePresence } from "framer-motion";

function App() {
  const addNoteIsActive = useSelector(
    (state: RootState) => state.ui.addNoteIsActive
  );
  const ViewNotesIsActive = useSelector(
    (state: RootState) => state.ui.viewNoteIsActive
  );

  return (
    <Fragment>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {addNoteIsActive && <ModalAddNotes />}
      </AnimatePresence>
      <AnimatePresence
        initial={true}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {ViewNotesIsActive && <ModalViewNotes />}
      </AnimatePresence>
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default App;
