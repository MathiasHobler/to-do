import { React } from "react";
import ToDoContainer from "./ToDo.styled";
import { Link } from "react-router-dom";

const ToDo = ({ toDo, deleteToDo, archiveToDo, completeUncomplete }) => {
  return (
    <ToDoContainer toDo={toDo}>
      <p>
        {toDo.toDo}
        <button
          type="button"
          onClick={() => {
            completeUncomplete();
          }}
        >
          {!toDo.completed ? "complete" : "uncomplete"}
        </button>
        <button>
          <Link to="editToDo">edit</Link>
        </button>
        <button
          type="button"
          onClick={() => {
            toDo.completed ? archiveToDo() : deleteToDo();
          }}
        >
          {!toDo.completed ? "delete" : "archive"}
        </button>
      </p>
    </ToDoContainer>
  );
};

export default ToDo;
