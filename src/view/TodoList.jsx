import React from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../state/todo.slice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const count = useSelector((state) => state.todo.count);
  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
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
              onCheck={handleTodoDone}
            />
          ))}
        <div className="wrapper">
          <h3>Todos:{count}</h3>
          <Btn bg={"green"}>all</Btn>
          <Btn bg={"blue"}>active</Btn>
          <Btn bg={"red"}>completed</Btn>
        </div>
      </ul>
    </Box>
  );
};
export default TodoList;

const Box = styled.div`
  position: relative;

  display: flex;
  .todo-list {
    display: flex;
    flex-direction: column;

    width: 460px;

    max-height: 77vh;

    background-color: rgb(23 16 222 / 30%);
    border-radius: 10px;
  }
  .wrapper {
    display: flex;
    flex-direction: wrap;
    justify-content: space-around;

    flex-basis: 100%;
  }
  h3 {
    margin-left: 6px;
    margin-bottom: 10px;
    font-size: 16px;
    align-self: flex-end;
    font-weight: 700;
    margin-right: 100px;
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
//all
//active
//completed
