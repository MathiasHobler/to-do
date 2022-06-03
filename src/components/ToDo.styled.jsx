import styled from "styled-components";

const ToDoContainer = styled.section`
  width: min(100% - 2rem);
  background: ${(props) => (props.toDo.completed ? "lightgreen" : "#f06565")};
  margin: auto;
  border-radius: 1em;

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    justify-items: center;
    padding: 0.3em;
  }

  p {
    padding: 0.5em;
    text-align: center;
  }
`;

export default ToDoContainer;
