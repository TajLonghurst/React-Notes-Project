import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface uiHandlers {
  addNoteIsActive: boolean;
  viewNoteIsActive: boolean;
  overRideAddNoteState: boolean;
  overRideViewNoteState: boolean;
}

const initialState: uiHandlers = {
  addNoteIsActive: false,
  viewNoteIsActive: false,
  overRideAddNoteState: false,
  overRideViewNoteState: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    addNoteHandler(
      state,
      actions: PayloadAction<{ overRideAddNoteState: boolean | null }>
    ) {
      if (actions.payload.overRideAddNoteState === true) {
        state.addNoteIsActive = actions.payload.overRideAddNoteState;
      } else {
        state.addNoteIsActive = !state.addNoteIsActive;
      }
    },
    viewNoteHandler(
      state,
      actions: PayloadAction<{ overRideViewNoteState: boolean | null }>
    ) {
      if (actions.payload.overRideViewNoteState) {
        state.viewNoteIsActive = actions.payload.overRideViewNoteState;
      } else {
        state.viewNoteIsActive = !state.viewNoteIsActive;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
