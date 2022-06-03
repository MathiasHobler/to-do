import { React, useState } from "react";
import styled from "styled-components";
import useStore from "../common/useStore";

const NewToDo = ({ addNewToDo }) => {
  const [newToDo, setNewToDo] = useState("");
  const addToDo = useStore((state) => state.addToDo);
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (!!newToDo) {
          addNewToDo(newToDo);
          addToDo(newToDo);
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
