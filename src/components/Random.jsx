import React from "react";
import styled from "styled-components";

const Random = ({ toDo }) => {
  return (
    <RandomContainer toDo={toDo}>
      <p>{toDo.toDo}</p>
    </RandomContainer>
  );
};

export default Random;

const RandomContainer = styled.section`
  width: min(100% - 2rem);
  display: flex;
  flex-direction: column;
  padding: 2em;

  p {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    grid-gap: 1em;
    background: ${(props) => (props.toDo.completed ? "lightgreen" : "#f06565")};
  }
`;
