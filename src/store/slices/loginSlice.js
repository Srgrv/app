import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "d0ce4cd8-d0d2-4152-99ad-f6e1407cb23f",
  },
});

export const postLoginAsync = createAsyncThunk(
  "login/postLoginAsync",
  async ({ email, password, cb }, { dispatch }) => {
    const response = await instance.post(`auth/login`, {
      email: email,
      password: password,
      rememberMe: false,
    });

    if (response.data.resultCode === 0) {
      dispatch(changeEmail({ email, cb }));
    } else {
      console.log("error! wrong email or password");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    email: null,
  },
  reducers: {
    changeEmail(state, action) {
      state.email = action.payload.email;
      action.payload.cb();
    },
  },
});

const { changeEmail } = loginSlice.actions;
export default loginSlice.reducer;
