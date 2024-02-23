"use client";
import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";

export const TodoContext = createContext({});

export const TodoContextProvider = ({ child }: { child: JSX.Element }) => {
  const [todoItems, setTodoItems] = useLocalStorageState("todoList", {
    defaultValue: [],
  });
  return (
    <TodoContext.Provider value={{ todoItems, setTodoItems }}>
      {child}
    </TodoContext.Provider>
  );
};
