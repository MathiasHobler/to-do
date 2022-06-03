import styled from "styled-components";

const ToDoContainer = styled.section`
  width: min(100% - 2rem);
  background: ${(props) => (props.toDo.completed ? "lightgreen" : "#f06565")};
  margin: auto;
  margin-bottom: 1em;
  border-radius: 1em;
  grid-column-gap: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.7fr 0.3fr 0.5fr;
  grid-column-gap: 1em;
  grid-template-areas:
    "text text"
    "date date"
    "button button";

  .button {
    grid-area: button;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    justify-items: center;
    padding: 0.3em;
  }

  .date {
    grid-area: date;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    justify-items: center;
  }

  .text {
    padding: 0.5em;
    text-align: center;
    grid-area: text;
  }
`;

export default ToDoContainer;

// .container {
// }
// .button { grid-area: button; }
// .text { grid-area: text; }
// .date { grid-area: date; }
