import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="todo">Todo</NavLink>
      <NavLink to="posts">Posts</NavLink>
      <NavLink to="login">Login</NavLink>
    </header>
  );
};

export default Header;
