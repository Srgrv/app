import { configureStore } from "@reduxjs/toolkit";

//slices
import loginSlice from "./slices/loginSlice";
import todosSlice from "./slices/todosSlice";
import postsSlice from "./slices/postsSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    todos: todosSlice,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.cb", "meta.arg"],
      },
    }),
});

export default store;
