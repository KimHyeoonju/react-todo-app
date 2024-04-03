import { renderHook } from "@testing-library/react";
import TodoTemplate from "./components/TodoTemplate";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
