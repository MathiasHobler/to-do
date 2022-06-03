import { React } from "react";
import ToDoContainer from "./ToDo.styled";
import useStore from "../common/useStore";

const ToDo = ({ toDo, deleteToDo, archiveToDo, completeUncomplete }) => {
  const deleteTodo = useStore((state) => state.deleteTodo);
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
        <button
          type="button"
          onClick={() => {
            toDo.completed ? archiveToDo() : deleteTodo(toDo.id); //Delete Function with Zustand does not work at the moment
          }}
        >
          {!toDo.completed ? "delete" : "archive"}
        </button>
      </p>
    </ToDoContainer>
  );
};

export default ToDo;
