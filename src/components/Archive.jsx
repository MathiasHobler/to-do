import React from "react";
import ToDoContainer from "./ToDo.styled";

const Archive = ({ toDo }) => {
  return (
    <ToDoContainer toDo={toDo}>
      <p>{toDo.toDo}</p>
    </ToDoContainer>
  );
};

export default Archive;
