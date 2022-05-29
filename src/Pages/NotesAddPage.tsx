import { Fragment } from "react";
import { ModalAddNotes } from "../Components/Modals/AddNotes/ModalAddNotes";
import NavBar from "../Components/Navigation/NavBar";
import NotesList from "../Components/Notes/NotesList";
import { RootState } from "../Store";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

function NotesAddPage() {
  const addNoteIsActive = useSelector(
    (state: RootState) => state.ui.addNoteIsActive
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
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default NotesAddPage;
