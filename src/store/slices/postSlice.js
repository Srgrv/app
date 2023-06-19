import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//utils
import { instanceJSONPlaceholder } from "../../utils/instance";

export const getPostAsync = createAsyncThunk(
  "post/getPostAsync",
  async (id) => {
    const response = await instanceJSONPlaceholder.get(`posts/${id}`);
    console.log(response.data);
    return response.data;
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
  },
  extraReducers: (build) => {
    build.addCase(getPostAsync.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});

const {} = postSlice.actions;
export default postSlice.reducer;
