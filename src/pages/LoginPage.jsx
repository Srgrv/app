import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

//extra-reducers
import { postLoginAsync } from "../store/slices/loginSlice";

const LoginPage = () => {
  const { reset, register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "";

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      postLoginAsync({
        email: data.email,
        password: data.password,
        cb: () => navigate(from, { replace: true }),
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="login" {...register("email")} />
        <input placeholder="password" {...register("password")} />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default LoginPage;
