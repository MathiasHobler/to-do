import { React } from "react";
import styled from "styled-components";

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

const ToDoContainer = styled.section`
  width: min(100% - 2rem);
  display: flex;
  flex-direction: column;
  padding: 2em;

  p {
    padding: 0.5em;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    grid-gap: 1em;
    background: ${(props) => (props.toDo.completed ? "lightgreen" : "#f06565")};
  }
`;
