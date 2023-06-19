import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

//components
import FieldTodoPage from "../components/FieldTodoPage";
import List from "../components/List";

//extra-reducers
import { getTasksAsync } from "../store/slices/todosSlice";

const TodoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAsync());
  }, [dispatch]);

  return (
    <div>
      <FieldTodoPage />
      <List />
    </div>
  );
};

export default TodoPage;
