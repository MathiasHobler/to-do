import create from "zustand";
import { nanoid } from "nanoid";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => {
      return {
        todos: [],
        addToDo: (todo) => {
          set((state) => {
            return {
              todos: [
                ...state.todos,
                { id: nanoid(), toDo: todo, completed: false, archive: false },
              ],
            };
          });
        },
        deleteTodo: (id) => {
          set((state) => {
            return { todos: state.todos.filter((todo) => todo.id !== id) };
          });
        },
        completeTodo: (id) => {
          set((state) => {
            return {
              todos: state.todo.map((todo) => {
                if (todo.id === id) {
                  return { ...todo, archive: !todo.archive };
                } else {
                  return todo;
                }
              }),
            };
          });
        },
      };
    },
    { name: "todos-global" }
  )
);

export default useStore;
