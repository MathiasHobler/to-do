import { React, useState } from "react";
import styled from "styled-components";

const NewToDo = ({ addNewToDo }) => {
  const [newToDo, setNewToDo] = useState("");
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        addNewToDo(newToDo);
      }}
    >
      <label>add new ToDo</label>
      <input
        type="text"
        onChange={(event) => setNewToDo(event.target.value)}
      ></input>
      <button type="submit">add</button>
    </Form>
  );
};

export default NewToDo;

const Form = styled.form`
  width: min(100% - 2rem);
`;
