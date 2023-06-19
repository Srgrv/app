import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

//components
import Todo from "./Todo";

const List = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <NavLink>
              <Todo
                id={todo.id}
                completed={todo.completed}
                title={todo.title}
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
