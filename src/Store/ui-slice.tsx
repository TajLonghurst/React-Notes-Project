import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiHandlers {
  addNoteIsActive: boolean;
}

const initialState: uiHandlers = {
  addNoteIsActive: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    addNoteHandler(state) {
      state.addNoteIsActive = !state.addNoteIsActive;
    },
    test(state, actions: PayloadAction<boolean>) {},
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
