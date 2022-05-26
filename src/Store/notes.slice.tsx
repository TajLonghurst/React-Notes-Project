import { createSlice } from "@reduxjs/toolkit";

interface NoteItemArry {
  id: number;
  subject: string;
  title: string;
  categorie: string;
  decription: string;
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
    addNote(state) {
      const D = new Date();
      const day = ("0" + D.getDate()).slice(-2);
      const month = ("0" + (D.getMonth() + 1)).slice(-2);
      const year = D.getFullYear();
      const date = `${day}/${month}/${year}`;

      state.noteItems = [
        ...state.noteItems,
        {
          id: 1,
          subject: "Running",
          title: "Gym Work",
          categorie: "Avtivity",
          decription: "new",
          color: "#fff",
          date: date,
        },
      ];
    },
  },
});

export const notesActions = notesSlice.actions;

export default notesSlice;
