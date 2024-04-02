//리액트를 불러오겠다.
import React from "react";
import "../styles/TodoTemplate.scss";

//{} 안은 기능
//return 끝나고 보내주는거


//function TodoTemplate () {
    //아래와 동일하다
const TodoTemplate = ({childern}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정관리</div>
            <div className="content">{childern}</div>
        </div>
    );
};

export default TodoTemplate;