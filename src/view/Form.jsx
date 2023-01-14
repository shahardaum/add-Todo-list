import React from "react";
import styled from "styled-components";
const Form = () => {
  return (
    <Label>
      <input type="text" placeholder="Your Next Task"></input>
      <button>Add Todo</button>
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
  }
  button:hover {
    transition: 0.8s;
    background-color: #088989;
  }
`;
