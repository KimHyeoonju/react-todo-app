import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "../styles/TodoInsert.scss";

const TodoInsert = () => {
  // [] 배열
  // [값, 함수]
  // useState(초기값);
  const [value, setValue] = useState("");

  const onSubmit = event => {
    // submit 이벤트는 브라우저에서 새로고침 발생시킴
    // 이를 방지하기 위해 아래 함수 호출
    event.preventDefault();
    setValue("");
  };

  const onChange = event => {
    // target : html 태그를 정함
    setValue(event.target.value);
    // console.log("입력하는 중", value);
  };

  // html 태그를 리턴 할 때는 () 소괄호를 사용해야한다.
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={value}
      />
      <button type="button">
        {/* 리액트 아이콘 */}
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
