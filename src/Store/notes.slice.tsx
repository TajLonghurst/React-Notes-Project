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
  id: string;
  subject: string;
  title: string;
  categorie: string;
  description: string;
  color: string;
  date: string;
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
      state.noteItems = [
        ...state.noteItems,
        {
          id: actions.payload.id,
          subject: actions.payload.subject,
          title: actions.payload.title,
          categorie: actions.payload.categorie,
          description: actions.payload.description,
          color: actions.payload.color,
          date: actions.payload.date,
        },
      ];
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
