import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import ViewNotesPage from "./Pages/ViewNotesPage";
import NotesPage from "./Pages/NotesPage";
import { AnimatePresence } from "framer-motion";
import NotesAddPage from "./Pages/NotesAddPage";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence
      initial={true}
      exitBeforeEnter={true}
      onExitComplete={() => null}
    >
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<NotesPage />}>
          <Route path="/notes" element={<NotesPage />} />
        </Route>
        <Route path="/notes/:noteId" element={<ViewNotesPage />} />
        <Route path="/notes/addNote" element={<NotesAddPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
