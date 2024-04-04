import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../styles/TodoListItem.scss";
import classNames from "classnames";
import { useState } from "react";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // 임시 상태관리 코드 삭제요망
  //const [checked, setChecked] = useState(true);
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={classNames("checkbox", { checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
