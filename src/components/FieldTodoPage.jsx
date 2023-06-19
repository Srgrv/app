import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

//extra-reducers
import { addTaskAsync } from "../store/slices/todosSlice";

const FieldTodoPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTaskAsync(data.addTask));
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" {...register("addTask")} />
      <input type="submit" value="add" />
    </form>
  );
};

export default FieldTodoPage;
