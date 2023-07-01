import "./App.css";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";
function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") !== null) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const deleteItem = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const [todos, setTodos] = useState(initTodo);

  const addToDo = (title, desc) => {
    const newtodos = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newtodos]);
  };

  let sno;
  if (todos.length === 0) {
    sno = 0;
  } else {
    sno = todos[todos.length - 1].sno + 1;
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Navbar title="My To-Do List" />
      <AddToDo addToDo={addToDo} />
      <Todos todos={todos} deleteItem={deleteItem} />
    </>
  );
}

export default App;
