import React, { Fragment } from "react";
import NavBar from "./Components/Navigation/NavBar";
import NotesList from "./Components/Notes/NotesList";

function App() {
  return (
    <Fragment>
      <NavBar />
      <NotesList />
    </Fragment>
  );
}

export default App;
