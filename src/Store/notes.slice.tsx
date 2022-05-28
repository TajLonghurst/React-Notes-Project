import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NoteItemArry {
  id: string;
  subject: string;
  title: string;
  categorie: string;
  description: string;
  color: string;
  date?: string;
  fbId?: string;
}

interface AddActions {
  res: NoteItemArry[];
}

interface notesHandlers {
  noteItems: NoteItemArry[];
}

const initialState: notesHandlers = {
  noteItems: [],
};

const notesSlice = createSlice({
  name: "NOTES",
  initialState: initialState,
  reducers: {
    addNote(state, actions: PayloadAction<AddActions>) {
      const addNote = actions.payload.res;
      const notesList = [];
      for (let fbId in addNote) {
        notesList.push({ fbId, ...addNote[fbId] });
      }

      state.noteItems = notesList;
    },
    removeNote(state, actions: PayloadAction<{ id: string }>) {
      state.noteItems = state.noteItems.filter(
        (id) => id.id !== actions.payload.id
      );
    },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice;
