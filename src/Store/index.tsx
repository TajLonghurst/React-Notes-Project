import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notes.slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    notes: notesSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
