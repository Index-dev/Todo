import React from "react";
import "./../css/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Today's To-Do</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
