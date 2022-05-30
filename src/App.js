import "./App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Header, ToDo, NewToDo } from "./components/components";
import { nanoid } from "nanoid";

function App() {
  const [toDos, setToDo] = useState(() => {
    const localStoredItems = localStorage.getItem("toDoItems");
    if (localStoredItems) {
      return JSON.parse(localStoredItems);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("toDoItems", JSON.stringify(toDos));
  }, [toDos]);

  function addNewToDo(addToDo) {
    const newToDo = [
      ...toDos,
      {
        id: nanoid(),
        toDo: addToDo,
        completed: false,
        archive: false,
      },
    ];
    setToDo(newToDo);
  }

  function deleteToDo(id) {
    const filteredToDo = toDos.filter((toDo) => {
      return toDo.id !== id;
    });
    setToDo(filteredToDo);
  }

  function archiveToDo(id) {
    const archiveToDo = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, archive: true };
      } else {
        return toDo;
      }
    });
    setToDo(archiveToDo);
  }

  function completeUncomplete(id) {
    const complete = toDos.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, completed: !toDo.completed };
      } else {
        return toDo;
      }
    });
    setToDo(complete);
  }

  return (
    <>
      <Header />
      <NewToDo addNewToDo={addNewToDo} />
      {toDos.map((toDo) => {
        return (
          <ToDo
            key={toDo.id}
            toDo={toDo}
            deleteToDo={deleteToDo}
            archiveToDo={archiveToDo}
            completeUncomplete={completeUncomplete}
          />
        );
      })}
    </>
  );
}

export default App;
