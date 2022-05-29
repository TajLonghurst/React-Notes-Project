import { Fragment } from "react";
import NavBar from "../Components/Navigation/NavBar";
import NotesList from "../Components/Notes/NotesList";

function NotesPage() {
  return (
    <Fragment>
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default NotesPage;
