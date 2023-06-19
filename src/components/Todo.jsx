import React from "react";
import { useDispatch } from "react-redux";

//extra-reducers
import { patchTaskAsync } from "../store/slices/todosSlice";
import { deleteTaskAsync } from "../store/slices/todosSlice";

const Todo = ({ title, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(patchTaskAsync(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTaskAsync(id))}>&times;</span>
    </div>
  );
};

export default Todo;
