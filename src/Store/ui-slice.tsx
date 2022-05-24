import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addNoteIsActive: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    addNoteHandler(state, action) {
      state.addNoteIsActive = !state.addNoteIsActive;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
