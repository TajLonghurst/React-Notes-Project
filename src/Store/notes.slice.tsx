import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fakeData } from "../Data/FakeProducts";

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
  fakeData: NoteItemArry[];
}

const initialState: notesHandlers = {
  noteItems: [],
  fakeData: fakeData,
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
    removeNote(state, actions: PayloadAction<{ id: string | undefined }>) {
      state.noteItems = state.noteItems.filter((id) => id.id !== actions.payload.id);
      state.fakeData = state.fakeData.filter((id) => id.id !== actions.payload.id);
    },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice;
