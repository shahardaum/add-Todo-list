import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../state/todo.slice";
const Form = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
  };

  return (
    <Label>
      <input
        type="text"
        placeholder="Your Next Task"
        onInput={(e) => setInput(e.target.value)}
      ></input>
      <button
        onClick={input.length > 0 ? handleAddTodo : console.log("try again")}
      >
        Add Todo
      </button>
    </Label>
  );
};

export default Form;
const Label = styled.div`
  position: relative;
  margin-top: 3.2rem;

  input[type="text"] {
    border: none;
    width: 460px;
    height: 50px;
    padding: 0 16px;
    border-radius: 10px;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #0ef5f5;
    color: white;
    padding: 0 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 14px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
  }
  button:hover {
    transition: 0.8s;
    background-color: #088989;
  }
`;
