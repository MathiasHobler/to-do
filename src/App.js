import "./App.css";
import styled from "styled-components";
import {
  Header,
  ToDo,
  NewToDo,
  Random,
  Archive,
  Navbar,
} from "./components/components";
import { nanoid } from "nanoid";
import { Routes, Route } from "react-router-dom";
import useLocalStorage from "./common/useLocalStorage";
import { useState } from "react";
import useStore from "./common/useStore";

function App() {
  const [toDos, setToDo] = useLocalStorage("toDoItems", []);
  const todos = useStore((state) => state.todos);
  console.log(todos, "global todo");
  console.log(toDos, "local todo");

  const [shuffeld, setShuffeld] = useState([]);

  function addNewToDo(addToDo) {
    console.log(toDos);
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
        return { ...toDo, archive: !toDo.archive };
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

  function shuffleToDos() {
    setShuffeld(toDos.filter(() => Math.random() > 0.5));
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NewToDo addNewToDo={addNewToDo} />
              {toDos
                .filter((todo) => !todo.archive)
                .map((toDo) => {
                  return (
                    <ToDo
                      key={toDo.id}
                      toDo={toDo}
                      deleteToDo={() => deleteToDo(toDo.id)}
                      archiveToDo={() => archiveToDo(toDo.id)}
                      completeUncomplete={() => completeUncomplete(toDo.id)}
                    />
                  );
                })}
            </>
          }
        />
        <Route
          path="archive"
          element={toDos
            .filter((toDo) => toDo.archive)
            .map((toDo) => {
              return <Archive key={toDo.id} toDo={toDo} />;
            })}
        />
        <Route
          path="random"
          element={
            <>
              <button
                type="button"
                onClick={() => {
                  shuffleToDos();
                }}
              >
                Shuffle
              </button>
              <p>Your random ToDo:</p>
              {shuffeld.map((toDo) => {
                return <Random key={toDo.id} toDo={toDo} />;
              })}
            </>
          }
        />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
