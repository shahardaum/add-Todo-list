import React, { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
  const { id, text, onCheck, completed } = props;
  const [isSelected, setSelected] = useState(completed);

  const deleteTodo = () => {
    onCheck(id);
  };
  const changeCompleted = () => {
    setSelected((prev) => !isSelected);
  };

  return (
    <Box className="todo">
      <label className="container">
        {text}
        <input type="checkbox" onClick={() => changeCompleted()}></input>
        <span className="checkmark"></span>
      </label>
      <FaTrashAlt className="trash-btn" onClick={() => deleteTodo()} />
    </Box>
  );
};
export default Todo;
{
  /* <button className="complete-btn"> </button>
<h3 className="todo-item">hey</h3> */
}
const Box = styled.div`
  display: flex;
  flex-direction: wrap;
  justify-content: space-around;
  border-bottom: 1px solid purple;
  height: 60px;
  margin-top: 20px;

  .trash-btn {
    margin-top: 10px;
    height: 15px;
    width: 15px;
    cursor: pointer;
    fill: red;
    transition: 200ms;
  }
  .trash-btn:hover {
    fill: black;
    border-radius: 2px;
  }
  .container {
    display: flex;
    flex-basis: 50%;
    position: relative;
    padding-left: 35px;
    margin-right: 75px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  .container input:checked ~ .checkmark {
    background-color: #2196f3;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
