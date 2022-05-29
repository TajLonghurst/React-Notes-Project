import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ViewNotesPage from "./Pages/ViewNotesPage";
import NotesPage from "./Pages/NotesPage";
import NotesAddPage from "./Pages/NotesAddPage";
import NavBar from "./Components/Navigation/NavBar";
import { Fragment } from "react";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<NotesPage />}>
          <Route path="/notes" element={<NotesPage />} />
        </Route>
        <Route path="/notes/:noteId" element={<ViewNotesPage />} />
        <Route path="/notes/addNote" element={<NotesAddPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
