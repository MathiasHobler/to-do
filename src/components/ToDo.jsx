import { React, useState } from "react";
import ToDoContainer from "./ToDo.styled";
// import { Link } from "react-router-dom";

const ToDo = ({
  toDo,
  deleteToDo,
  archiveToDo,
  completeUncomplete,
  changeToDo,
}) => {
  const [editToDo, setEditToDo] = useState(false);
  const [newToDo, setNewToDo] = useState(toDo.toDo);
  return (
    <ToDoContainer toDo={toDo}>
      {!editToDo && <p className="text">{toDo.toDo}</p>}

      {editToDo && (
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        ></input>
      )}
      <div className="date">
        <span>created Date:{toDo.createdDate}</span>
        <span>completed Date:{toDo.completedDate}</span>
      </div>

      <div className="button">
        <button
          type="button"
          onClick={() => {
            completeUncomplete();
          }}
        >
          {!toDo.completed ? "complete" : "uncomplete"}
        </button>
        {/* <Link to="editToDo"> */}
        {!editToDo && (
          <button type="button" onClick={() => setEditToDo(!editToDo)}>
            edit
          </button>
        )}
        {editToDo && (
          <button
            type="button"
            onClick={() => {
              changeToDo(toDo.id, newToDo);
              setEditToDo(!editToDo);
            }}
          >
            change
          </button>
        )}

        {/* </Link> */}
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
