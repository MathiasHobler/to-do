import { React, useState } from "react";
import styled from "styled-components";

const NewToDo = ({ addNewToDo }) => {
  const [newToDo, setNewToDo] = useState("");
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (!!newToDo) {
          addNewToDo(newToDo);
        }
        setNewToDo("");
      }}
    >
      <label>add new ToDo:</label>
      <input
        type="text"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)}
      ></input>
      <button type="submit">add</button>
    </Form>
  );
};

export default NewToDo;

const Form = styled.form`
  width: min(100% - 2rem);
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;

  input {
    outline: none;
  }
`;
