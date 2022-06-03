import { React } from "react";
import ToDoContainer from "./ToDo.styled";
import { Link } from "react-router-dom";

const ToDo = ({ toDo, deleteToDo, archiveToDo, completeUncomplete }) => {
  let editButton;

  if (!toDo.complete) {
    editButton = (
      <Link to="editToDo">
        <button>edit</button>
      </Link>
    );
  } else {
    editButton = <></>;
  }
  return (
    <ToDoContainer toDo={toDo}>
      <p>{toDo.toDo}</p>
      <div>
        <button
          type="button"
          onClick={() => {
            completeUncomplete();
          }}
        >
          {!toDo.completed ? "complete" : "uncomplete"}
        </button>
        <Link to="editToDo">
          <button>edit</button>
        </Link>
        {editButton}
        <button
          type="button"
          onClick={() => {
            toDo.completed ? archiveToDo() : deleteToDo();
          }}
        >
          {!toDo.completed ? "delete" : "archive"}
        </button>
      </div>
    </ToDoContainer>
  );
};

export default ToDo;
