import styled from "styled-components";
import Form from "./Form";
import TodoList from "./ToDoList";

function App() {
  return (
    <Box className="App">
      <h1 className="hover-5">Todo list</h1>
      <Form />
      <TodoList />
    </Box>
  );
}

export default App;
const Box = styled.div`
  min-height: 100vh;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;

  .hover-5 {
    --h: 1.2em; /* the height */
    --c: #1095c1; /* the color */

    color: #0000;
    text-shadow: 0 calc(var(--_t, var(--h)) - var(--h)) 0 #000,
      0 var(--_t, var(--h)) 0 #fff;
    box-shadow: 0 var(--_t, var(--h)) var(--c);
    clip-path: inset(0 0 1px 0);
    background: linear-gradient(var(--c) 0 0) 0 var(--_t, var(--h)) no-repeat;
    transition: 0.4s, clip-path 0s;
  }
  .hover-5:hover {
    --_t: 0em;
    clip-path: inset(0 0 calc(-1 * var(--h)) 0);
    transition: 0.4s 0.4s, clip-path 0.4s;
  }

  body {
    height: 100vh;
    margin: 0;
    display: grid;
    place-content: center;
  }
  h1 {
    font-family: system-ui, sans-serif;
    font-size: 3rem;
    margin: 0;
    cursor: pointer;
    padding: 0 0.1em;
  }
`;
