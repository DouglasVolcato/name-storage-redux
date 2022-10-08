import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
  value: string[];
}

const initialState: State = {
  value: [],
};

const namesSlice = createSlice({
  name: "names",
  initialState,
  reducers: {
    addName(state, action: PayloadAction<string>) {
      const newState = state.value;
      newState.push(action.payload);
      state.value = newState;
    },
  },
});

export const { addName } = namesSlice.actions;
export default namesSlice.reducer;
