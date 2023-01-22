import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const Todo = (props) => {
  const deleteTodo = () => {
    props.onCheck(props.id);
  };
  return (
    <Box className="todo">
      <label class="container">
        {props.text}
        <input type="checkbox"></input>
        <span class="checkmark"></span>
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
  height: 80px;
  margin-top: 16px;
  margin-bottom: 16px;

  .trash-btn {
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
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 255px;
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
