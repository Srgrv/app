import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//utils
import { instanceJSONPlaceholder } from "../../utils/instance";

export const getPostsAsync = createAsyncThunk(
  "posts/getPostsAsync",
  async () => {
    const response = await instanceJSONPlaceholder.get(`posts`);

    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      },
    ],
  },
  extraReducers: (build) => {
    build.addCase(getPostsAsync.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export default postsSlice.reducer;
