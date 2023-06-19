import { configureStore } from "@reduxjs/toolkit";

//slices
import loginSlice from "./slices/loginSlice";
import todosSlice from "./slices/todosSlice";
import postsSlice from "./slices/postsSlice";
import postSlice from "./slices/postSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    todos: todosSlice,
    posts: postsSlice,
    post: postSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActionPaths: ["payload.cb", "meta.arg"],
      },
    }),
});

export default store;
