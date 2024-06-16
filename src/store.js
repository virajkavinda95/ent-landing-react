import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slices/languageSlice";
import audioReducer from "./slices/audioSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    sound: audioReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
