import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiHandlers {
  addNoteIsActive: boolean;
  viewNoteIsActive: boolean;
}

const initialState: uiHandlers = {
  addNoteIsActive: false,
  viewNoteIsActive: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    addNoteHandler(state) {
      state.addNoteIsActive = !state.addNoteIsActive;
    },
    viewNoteHandler(state) {
      state.viewNoteIsActive = !state.viewNoteIsActive;
    },
    test(state, actions: PayloadAction<boolean>) {},
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
