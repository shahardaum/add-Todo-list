import React from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, displayAll, displayCompleted } from "../state/todo.slice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.count);
  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  const showAll = (todos) => {
    displayAll(todos);
  };

  return (
    <Box className="todo-container">
      <ul className="todo-list">
        {count > 0 &&
          todos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              active={todo.active}
              completed={todo.completed}
              show={todo.show}
              onCheck={handleTodoDone}
            />
          ))}
      </ul>
      <div className="wrapper">
        <h3>Todos &nbsp;:&nbsp;&nbsp;{count}</h3>
        <Btn bg={"green"} onClick={() => dispatch(showAll)}>
          all
        </Btn>
        <Btn bg={"blue"} onClick={() => dispatch(displayAll)}>
          active
        </Btn>
        <Btn bg={"red"} onClick={() => dispatch(displayCompleted)}>
          completed
        </Btn>
      </div>
    </Box>
  );
};
export default TodoList;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(23 16 222 / 30%);
  max-height: 77vh;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 2em;
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    width: 460px;
    
    max-height: 50vh;
    overflow-y: auto;
    
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  .wrapper {
    display: flex;
    flex-direction: wrap;
    justify-content: space-around;
    flex-basis: 100%;
    height: 400px;
    background-color: #1a232a;

    position: relative;
    z-index: 0;
  
    border-radius: 10px;
    overflow: hidden;
    padding: 2rem;
    margin-top:12px;



    &::before {
      content: "";
      position: absolute;
      z-index: -2;
      left: -50%;
      top: -50%;
      width: 200%;
      height: 200%;
      background-color: #1a232a;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-image: conic-gradient(
        transparent,
        rgba(168, 239, 255, 1),
        transparent 30%
      );
      animation: rotate 4s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 6px;
      top: 6px;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      background: #000;
      border-radius: 5px;
    }
  }
  
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes opacityChange {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
h3{
  color:greenyellow;
  font-weight:700;
  margin-bottom:10px;
  align-self: flex-end;
  font-size:16px;
}
 
`;

const Btn = styled.button`
  align-self: flex-end;
  background-color: white;
  color: black;
  border: 2px solid;
  border-color: ${({ bg }) => bg || "none"};
  border-radius: 8px;

  ransition-duration: 0.4s;
  margin-right: 10px;
  margin-bottom: 4px;
  padding: 2px;
  height: 30px;
  font-weight: 700;
  :hover {
    background-color: ${({ bg }) => bg || "none"};
    color: white;
  }
`;
