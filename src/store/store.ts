import { configureStore } from "@reduxjs/toolkit";
import namesReduer from "../features/names.slice";

export const store = configureStore({
  reducer: {
    names: namesReduer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
