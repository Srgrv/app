import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//utils
import { instanceJSONPlaceholder } from "../../utils/instance";

export const patchTaskAsync = createAsyncThunk(
  "todos/patchTaskAsync",
  async (id, { dispatch, getState }) => {
    const todo = getState().todos.todos.find((todo) => todo.id === id);

    const response = await instanceJSONPlaceholder.patch(`todos/${id}`, {
      body: {
        completed: !todo.completed,
      },
    });

    dispatch(toggleTask({ id }));
  }

  //нужно сделать запрос на сервер для изменения input типа checked в туду
);

export const addTaskAsync = createAsyncThunk(
  "todos/addTaskAsync",
  async (title, { dispatch }) => {
    const response = await instanceJSONPlaceholder.post(`posts`, {
      body: {
        title: title,
        completed: false,
        id: new Date().toISOString(),
        userId: 1,
      },
    });
    dispatch(addTask(response.data.body));
    console.log(response.data.body);
  }
);

export const deleteTaskAsync = createAsyncThunk(
  "todos/deleteTaskAsync",
  async (id, { dispatch }) => {
    const response = await instanceJSONPlaceholder.delete(`todos/${id}`);
    console.log(response.data);
    dispatch(deleteTask({ id }));
  }
);

export const getTasksAsync = createAsyncThunk(
  "todos/getTasksAsync",
  async (_) => {
    const response = await instanceJSONPlaceholder.get(`todos/?_limit=30`);

    return response.data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    toggleTask(state, action) {
      const change = state.todos.find((todo) => todo.id === action.payload.id);
      change.completed = !change.completed;
    },
    addTask(state, action) {
      state.todos.push(action.payload);
    },
    deleteTask(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (build) => {
    build.addCase(getTasksAsync.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

const { toggleTask, addTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
