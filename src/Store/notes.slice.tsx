import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NoteItemArry {
  id: string;
  subject: string;
  title: string;
  categorie: string;
  description: string;
  color: string;
  date?: string;
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
      const addNote = actions.payload;
      const notesList = [];
      for (let id in addNote.res) {
        notesList.push(addNote.res[id]);
      }

      state.noteItems = notesList;
    },
    // removeNote(state, actions: PayloadAction<string>) {
    //   state.noteItems = state.noteItems.filter(
    //     (id) => id !== actions.payload.id
    //   );
    // },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice;
