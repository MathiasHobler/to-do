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
import { Routes, Route, Link } from "react-router-dom";
import useLocalStorage from "./common/useLocalStorage";

function App() {
  const [toDos, setToDo] = useLocalStorage("toDoItems", []);

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
        <Route path="archive" element={<Archive />} />
        <Route path="random" element={<Random />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
