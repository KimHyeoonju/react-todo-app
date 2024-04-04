import { renderHook } from "@testing-library/react";
import TodoTemplate from "./components/TodoTemplate";
import { useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";

// const = 상수
const initState = [
  {
    id: 1,
    text: "리액트의 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트의 이해",
    checked: false,
  },
  {
    id: 3,
    text: "할 일 앱 만들어 보기",
    checked: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initState);

  // id는 고유한 값이어야 한다.
  const nextId = useRef(4);

  // todos 배열에 개 객체 추가
  const onInsert = text => {
    const todo = {
      // nextId 의 현재값
      id: nextId.current,
      text,
      checked: false,
    };

    // Todos 배열에 set으로 내용 추가
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  // 삭제 기능
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // 토글 기능(수정)
  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id == id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
