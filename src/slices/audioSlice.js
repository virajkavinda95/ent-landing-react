import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sounds: false,
};

const audioSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    setSound: (state, action) => {
      state.sounds = action.payload;
    },
  },
});

export const { setSound } = audioSlice.actions;

export default audioSlice.reducer;
